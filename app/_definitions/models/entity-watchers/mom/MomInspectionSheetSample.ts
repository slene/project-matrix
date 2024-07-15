import type {EntityWatcher, EntityWatchHandlerContext} from "@ruiapp/rapid-core";

export default [
  {
    eventName: "entity.beforeCreate",
    modelSingularCode: "mom_inspection_sheet_sample",
    handler: async (ctx: EntityWatchHandlerContext<"entity.beforeCreate">) => {
      const { payload } = ctx;
      let before = payload.before;

      if (before.measurements && Array.isArray(before.measurements)) {
        before.measurements.forEach((measurement: any) => {
          measurement.sheet_id = before.sheet_id;
          measurement.sampleCode = before.code;
        });
      }
    },
  },
] satisfies EntityWatcher<any>[];
