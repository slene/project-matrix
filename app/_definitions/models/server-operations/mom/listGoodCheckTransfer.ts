import type {ActionHandlerContext, IRpdServer, ServerOperation} from "@ruiapp/rapid-core";
import type {BaseMaterial,} from "~/_definitions/meta/entity-types";

export type QueryGoodOutTransferInput = {
  operationId: number;
};

export type QueryGoodOutTransferOutput = {
  operationId: number;
  material: Partial<BaseMaterial>;
  totalAmount?: number;
  totalShelves?: number;
  waitingAmount?: number;
  waitingShelves?: number;
  checkedAmount?: number;
  checkedShelves?: number;
};


export default {
  code: "listGoodCheckTransfers",
  method: "POST",
  async handler(ctx: ActionHandlerContext) {
    const {server} = ctx;
    const input: QueryGoodOutTransferInput = ctx.input;

    const transferOutputs = await listGoodCheckTransfers(server, input);

    ctx.output = transferOutputs;
  },
} satisfies ServerOperation;

async function listGoodCheckTransfers(server: IRpdServer, input: QueryGoodOutTransferInput) {

  const transfers = await server.queryDatabaseObject(
    `
      WITH inventory_checked_cte AS (SELECT mio.id                                                       AS operation_id,
                                            miai.material_id,
                                            COALESCE(COUNT(mg.id) FILTER ( WHERE mg.id NOTNULL ), 0)     AS total_shelves,
                                            SUM(COALESCE(mg.quantity, 0))                                AS total_amount,
                                            SUM(COALESCE(micr.quantity, 0))                              AS checked_amount,
                                            COALESCE(COUNT(micr.id) FILTER ( WHERE micr.id NOTNULL ), 0) AS checked_shelves,
                                            COALESCE(ARRAY_AGG(micr.good_id) FILTER ( WHERE micr.id NOTNULL ),
                                                     '{}'::int[])                                        AS checked_good_ids,
                                            COALESCE(ARRAY_AGG(mg.id) FILTER ( WHERE mg.id NOTNULL ),
                                                     '{}'::int[])                                        AS in_stock_good_ids
                                     FROM mom_inventory_operations mio
                                            INNER JOIN mom_inventory_application_items miai
                                                       ON mio.application_id = miai.operation_id
                                            LEFT JOIN mom_goods mg
                                                      ON miai.material_id = mg.material_id AND
                                                         mg.state = 'normal' AND
                                                         mg.location_id NOTNULL
                                            LEFT JOIN mom_inventory_check_records micr
                                                      ON miai.material_id = micr.material_id AND
                                                         mio.id = micr.operation_id AND
                                                         micr.operation_id = $1
                                     WHERE 1 = 1
                                       AND mio.id = $1
                                     GROUP BY mio.id, miai.material_id),
           result AS (SELECT ioc.*,
                             greatest(ioc.total_amount - ioc.checked_amount,
                                      0)                        AS waiting_amount,
                             greatest(ioc.total_shelves - ioc.checked_shelves,
                                      0)                        AS waiting_shelves,
                             jsonb_build_object('id', bm.id,
                                                'code', bm.code,
                                                'name', bm.name,
                                                'specification', bm.specification,
                                                'qualityGuaranteePeriod', bm.quality_guarantee_period,
                                                'defaultUnit',
                                                to_jsonb(bu.*)) AS material
                      FROM inventory_checked_cte ioc
                             INNER JOIN base_materials bm ON ioc.material_id = bm.id
                             INNER JOIN base_units bu ON bm.default_unit_id = bu.id)
      SELECT r.*
      FROM result r;
    `,
    [input.operationId],
  );

  return transfers.map((item) => {
    return {
      operationId: item.operation_id,
      material: item.material,
      totalAmount: item.total_amount,
      totalShelves: item.total_shelves,
      waitingAmount: item.waiting_amount,
      waitingShelves: item.waiting_shelves,
      checkedAmount: item.checked_amount,
      checkedShelves: item.checked_shelves,
    } as QueryGoodOutTransferOutput;
  });
}
