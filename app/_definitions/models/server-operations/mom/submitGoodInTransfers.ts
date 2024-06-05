import type {ActionHandlerContext, IRpdServer, ServerOperation} from "@ruiapp/rapid-core";
import type {
  MomGood,
  MomGoodLocation,
  MomGoodTransfer, SaveMomGoodInput,
  SaveMomGoodLocationInput,
  SaveMomGoodTransferInput,
} from "~/_definitions/meta/entity-types";
import dayjs from "dayjs";

export type CreateGoodTransferInput = {
  operationId: number;
  materialId: number;
  toLocationId: number;
  shelves: {
    binNum: string;
  }[];
};

// PDA入库操作接口
export default {
  code: "submitGoodInTransfers",
  method: "POST",
  async handler(ctx: ActionHandlerContext) {
    const {server} = ctx;
    const input: CreateGoodTransferInput = ctx.input;

    await submitGoodInTransfers(server, input);

    ctx.output = {
      result: ctx.input,
    };
  },
} satisfies ServerOperation;

async function submitGoodInTransfers(server: IRpdServer, input: CreateGoodTransferInput) {
  const goodManager = server.getEntityManager<MomGood>("mom_good");
  const goodLocationManager = server.getEntityManager<MomGoodLocation>("mom_good_location");
  const goodTransferManager = server.getEntityManager<MomGoodTransfer>("mom_good_transfer");

  for (const shelve of input.shelves) {
    const goodTransfer = await goodTransferManager.findEntity({
      filters: [
        {
          operator: "and",
          filters: [
            {
              field: "operation",
              operator: "exists",
              filters: [
                {
                  field: "id",
                  operator: "eq",
                  value: input.operationId
                }
              ]
            }
          ]
        },
        {
          operator: "and",
          filters: [
            {
              field: "material",
              operator: "exists",
              filters: [
                {
                  field: "id",
                  operator: "eq",
                  value: input.materialId
                }
              ]
            }
          ]
        },
        {operator: "eq", field: "binNum", value: shelve.binNum},
      ],
      properties: ["id", "good"],
    })

    await goodManager.updateEntityById({
      id: goodTransfer?.good?.id,
      entityToSave: {
        location: {id: input.toLocationId},
        putInTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      } as SaveMomGoodInput,
    });

    await goodLocationManager.createEntity({
      entity: {
        good: {id: goodTransfer?.good?.id},
        location: {id: input.toLocationId},
        putInTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      } as SaveMomGoodLocationInput,
    });

    await goodTransferManager.updateEntityById({
      id: goodTransfer?.id,
      entityToSave: {
        to: {id: input.toLocationId},
      } as SaveMomGoodTransferInput,
    });
  }
}
