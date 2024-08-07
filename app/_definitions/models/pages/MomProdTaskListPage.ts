import { cloneDeep } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";

const formConfig: Partial<RapidEntityFormConfig> = {
  items: [
    {
      type: "auto",
      code: "code",
    },
    {
      type: "auto",
      code: "material",
      formControlProps: {
        listTextFormat: "{{code}} {{name}}",
      },
    },
    {
      type: "auto",
      code: "materialProcess",
      listDataFindOptions: {
        properties: ["id", "materialFlow", "process", "orderNum"],
        orderBy: [
          {
            field: "orderNum",
          },
        ],
      },
      formControlProps: {
        listTextFormat: "{{process.name}}",
      },
    },
    {
      type: "auto",
      code: "amount",
    },
    {
      type: "auto",
      code: "unit",
    },
    {
      type: "auto",
      code: "equipment",
      formControlProps: {
        listTextFormat: "{{code}} {{name}}",
      },
    },
    {
      type: "auto",
      code: "assignees",
    },
    {
      type: "auto",
      code: "deadline",
    },
    {
      type: "auto",
      code: "assigner",
    },
    {
      type: "auto",
      code: "assignmentState",
    },
    {
      type: "auto",
      code: "executionState",
    },
  ],
};

const page: RapidPage = {
  code: "mom_prod_task_list",
  name: "工序任务列表",
  title: "任务管理",
  view: [
    {
      $type: "sonicEntityList",
      entityCode: "ProductionTask",
      viewMode: "table",
      selectionMode: "none",
      listActions: [
        {
          $type: "sonicToolbarNewEntityButton",
          text: "新建",
          icon: "PlusOutlined",
          actionStyle: "primary",
        },
      ],
      extraActions: [
        {
          $type: "sonicToolbarFormItem",
          formItemType: "search",
          placeholder: "Search",
          actionEventName: "onSearch",
          filterMode: "contains",
          filterFields: ["code"],
        },
      ],
      columns: [
        {
          type: "link",
          code: "code",
          width: "150px",
          fixed: "left",
          rendererType: "link",
          rendererProps: {
            url: "/pages/mom_prod_task_details?id={{id}}",
          },
        },
        {
          type: "link",
          code: "workOrder",
          width: "150px",
          fixed: "left",
          rendererType: "link",
          rendererProps: {
            text: "{{workOrder.code}}",
            url: "/pages/mom_work_order_details?id={{workOrder.id}}",
          },
        },
        {
          type: "auto",
          code: "materialProcess",
          width: "150px",
          rendererProps: {
            format: "{{aliasName}}",
          },
        },
        {
          type: "auto",
          code: "amount",
          width: "100px",
        },
        {
          type: "auto",
          code: "unit",
          width: "150px",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "equipment",
          width: "150px",
          rendererProps: {
            format: "{{name}} {{code}}",
          },
        },
        {
          type: "auto",
          code: "assignees",
          width: "150px",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "deadline",
          width: "150px",
        },
        {
          type: "auto",
          code: "assigner",
          width: "150px",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "assignedAt",
          width: "150px",
        },
        {
          type: "auto",
          code: "acceptedAt",
          width: "150px",
        },
        {
          type: "auto",
          code: "executionState",
          width: "100px",
        },
        {
          type: "auto",
          code: "createdAt",
          width: "150px",
        },
      ],
      actions: [
        {
          $type: "sonicRecordActionEditEntity",
          code: "edit",
          actionType: "edit",
          actionText: "修改",
        },
        {
          $type: "sonicRecordActionDeleteEntity",
          code: "delete",
          actionType: "delete",
          actionText: "删除",
          dataSourceCode: "list",
          entityCode: "ProductionTask",
        },
      ],
      newForm: cloneDeep(formConfig),
      editForm: cloneDeep(formConfig),
      searchForm: {
        entityCode: "OcUser",
        items: [
          {
            type: "auto",
            code: "code",
            filterMode: "contains",
          },
        ],
      },
    },
  ],
};

export default page;
