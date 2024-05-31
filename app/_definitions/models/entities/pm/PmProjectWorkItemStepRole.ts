import type { TDictionaryCodes } from "../../../meta/data-dictionary-codes";
import type { TEntitySingularCodes } from "../../../meta/model-codes";
import type { RapidEntity } from "@ruiapp/rapid-extension";

const entity: RapidEntity<TEntitySingularCodes, TDictionaryCodes> = {
  namespace: "app",
  code: "PmProjectWorkItemStepRole",
  name: "项目工作项步骤角色",
  fields: [
    {
      code: "project",
      name: "项目",
      type: "relation",
      targetSingularCode: "pm_project",
      targetIdColumnName: "project_id",
    },
    {
      code: "workItemType",
      name: "工作项类型",
      type: "relation",
      targetSingularCode: "pm_work_item_type",
      targetIdColumnName: "work_item_type_id",
    },
    {
      code: "workItemTypeStep",
      name: "工作项步骤",
      type: "relation",
      targetSingularCode: "pm_work_item_type_step",
      targetIdColumnName: "work_item_type_step_id",
    },
    {
      code: "projectRole",
      name: "项目角色",
      type: "relation",
      targetSingularCode: "pm_project_role",
      targetIdColumnName: "project_role_id",
    },
  ],
};

export default entity;
