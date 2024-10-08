import { cloneDeep } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";

const formConfig: Partial<RapidEntityFormConfig> = {
  items: [
    {
      code: "name",
      type: "auto",
    },
    {
      code: "description",
      type: "auto",
    },
  ],
};

const page: RapidPage = {
  code: "mom_inspection_instrument_category_list",
  name: "检验仪器类型",
  title: "检验仪器类型",
  permissionCheck: { any: [] },
  view: [
    {
      $type: "sonicEntityList",
      entityCode: "MomInspectionInstrumentCategory",
      viewMode: "table",
      selectionMode: "none",
      orderBy: [
        {
          field: "name",
        },
      ],
      listActions: [
        {
          $type: "sonicToolbarNewEntityButton",
          text: "新建",
          icon: "PlusOutlined",
          actionStyle: "primary",
          $permissionCheck: "inspectionInstrumentCategory.manage",
        },
      ],
      extraActions: [
        {
          $type: "sonicToolbarFormItem",
          formItemType: "search",
          placeholder: "搜索名称、描述",
          actionEventName: "onSearch",
          filterMode: "contains",
          filterFields: ["name", "description"],
        },
      ],
      columns: [
        {
          type: "auto",
          code: "name",
          width: "120px",
          fixed: "left",
        },
        {
          type: "auto",
          code: "description",
          fixed: "left",
        },
      ],
      actions: [
        {
          $type: "sonicRecordActionEditEntity",
          code: "edit",
          actionType: "edit",
          actionText: "修改",
          $permissionCheck: "inspectionInstrumentCategory.manage",
        },
        {
          $type: "sonicRecordActionDeleteEntity",
          code: "delete",
          actionType: "delete",
          actionText: "删除",
          dataSourceCode: "list",
          entityCode: "MomInspectionInstrumentCategory",
          $permissionCheck: "inspectionInstrumentCategory.manage",
        },
      ],
      newForm: cloneDeep(formConfig),
      editForm: cloneDeep(formConfig),
      searchForm: {
        entityCode: "MomInspectionInstrumentCategory",
        items: [
          {
            type: "auto",
            code: "name",
            filterMode: "contains",
          },
          {
            type: "auto",
            code: "description",
            filterMode: "contains",
          },
        ],
      },
    },
  ],
};

export default page;
