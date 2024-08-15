import { cloneDeep, omit } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";
import { materialFormatStrTemplate } from "~/utils/fmt";

const materialFormItemConfig: RapidEntityFormConfig["items"][0] = {
  type: "auto",
  label: "物品",
  code: "material",
  formControlType: "rapidTableSelect",
  formControlProps: {
    disabled: true,
    dropdownMatchSelectWidth: 500,
    listTextFormat: "{{material.code}} {{material.name}}（{{material.specification}}）",
    listValueFieldName: "material.id",
    listFilterFields: ["material.specification", "lotNum"],
    searchPlaceholder: "搜索物料规格、批次号",
    columns: [
      {
        title: "物品",
        code: "material",
        format: "{{material.code}} {{material.name}}（{{material.specification}}）",
        width: 260,
      },
      {
        title: "批次号",
        code: "lotNum",
        width: 120,
      },
    ],
    requestConfig: {
      url: `/mom/mom_inventory_application_items/operations/find`,
      params: {
        fixedFilters: [
          {
            field: "application",
            operator: "exists",
            filters: [
              {
                field: "id",
                operator: "eq",
                value: "",
              },
            ],
          },
        ],
        properties: ["id", "material", "lotNum", "unit"],
      },
    },
    onSelectedRecord: [
      {
        $action: "script",
        script: `
        const info = event.args[0] || {};

        const _ = event.framework.getExpressionVars()._;
        event.page.sendComponentMessage('goodTransferList-newForm-rapidForm', {
          name: "setFieldsValue",
          payload: {
            unit: _.get(info, 'unit.name'),
            lotNum: _.get(info, 'lotNum')
          }
        });
      `,
      },
    ],
  },
  $exps: {
    "formControlProps.requestConfig.params.fixedFilters[0].filters[0].value": "_.get(_.first(_.get($stores.detail, 'data.list')), 'application.id')",
  },
};

const createOperationFormConfig: Partial<RapidEntityFormConfig> = {
  defaultFormFields: { outMethod: "batch" },
  items: [
    materialFormItemConfig,
    {
      type: "auto",
      code: "unit",
      formControlProps: {
        disabled: true,
      },
    },
    {
      type: "auto",
      code: "lotNum",
      formControlProps: {
        disabled: true,
      },
    },
    {
      type: "date",
      code: "manufactureDate",
    },
    {
      type: "auto",
      code: "packageNum",
    },
    {
      type: "auto",
      code: "outMethod",
      label: "收货方式",
      formControlType: "rapidRadioListFormInput",
      formControlProps: {
        optionType: "button",
        listTextFieldName: "label",
        listValueFieldName: "value",
        listDataSource: {
          data: {
            list: [
              {
                label: "批量收货",
                value: "batch",
              },
              {
                label: "单托收货",
                value: "single",
              },
            ],
          },
        },
      },
    },
    {
      type: "auto",
      label: "单托数量",
      $exps: {
        _hidden: "$self.form.getFieldValue('outMethod') !== 'batch'",
      },
      code: "palletWeight",
      formControlType: "antdInputNumber",
      formControlProps: {
        min: 0,
      },
    },
    {
      type: "auto",
      label: "托数",
      $exps: {
        _hidden: "$self.form.getFieldValue('outMethod') !== 'batch'",
      },
      code: "palletCount",
      formControlType: "antdInputNumber",
      formControlProps: {
        min: 0,
      },
    },
    {
      type: "auto",
      code: "transfers",
      $exps: {
        _hidden: "$self.form.getFieldValue('outMethod') !== 'single'",
        wrapperCol: JSON.stringify({ offset: 0 }),
      },
      formControlType: "rapidEditableTable",
      formControlProps: {
        width: "100%",
        columns: [
          {
            name: "index",
            title: "序号",
            width: 50,
            fixed: "left",
            control: `
              function(r, index){
                return index + 1;
              }
            `,
          },
          {
            name: "palletWeight",
            title: "数量",
            control: "number",
            width: 100,
          },
        ],
      },
    },
  ],
  // onSaveSuccess: [
  //   {
  //     $action: "loadStoreData",
  //     storeName: "list",
  //   },
  //   {
  //     $action: "loadStoreData",
  //     scopeId: "applicationItemList-scope",
  //     storeName: "goodTransferGroupList",
  //   },
  // ],
  customRequest: {
    method: "post",
    url: "/app/createGoodTransfers",
  },
};

const editOperationFormConfig: Partial<RapidEntityFormConfig> = {
  items: [
    materialFormItemConfig,
    {
      type: "auto",
      code: "unit",
      formControlProps: {
        disabled: true,
      },
    },
    {
      type: "auto",
      code: "lotNum",
      formControlProps: {
        disabled: true,
      },
    },
    {
      type: "auto",
      code: "binNum",
      label: "托盘号",
    },
    {
      type: "auto",
      code: "quantity",
    },
    {
      type: "treeSelect",
      code: "to",
      formControlProps: {
        listDataSourceCode: "locations",
        listParentField: "parent.id",
      },
    },
    {
      type: "auto",
      code: "transferTime",
    },
    {
      type: "auto",
      code: "packageNum",
    },
  ],
  // onSaveSuccess: [
  //   {
  //     $action: "loadStoreData",
  //     storeName: "list",
  //   },
  //   {
  //     $action: "loadStoreData",
  //     scopeId: "applicationItemList-scope",
  //     storeName: "goodTransferGroupList",
  //   },
  // ],
};

function getFormConfig(formType: "newForm" | "editForm") {
  const formConfig: Partial<RapidEntityFormConfig> = {
    items: [
      {
        type: "auto",
        code: "material",
        formControlType: "rapidEntityTableSelect",
        formControlProps: {
          entityCode: "BaseMaterial",
          dropdownMatchSelectWidth: 500,
          listTextFormat: materialFormatStrTemplate,
          listFilterFields: ["name", "code", "specification"],
          requestParams: {
            properties: ["id", "code", "name", "specification", "defaultUnit", "category"],
            keepNonPropertyFields: true,
          },
          columns: [
            {
              title: "名称",
              code: "name",
              width: 120,
            },
            {
              title: "编号",
              code: "code",
              width: 120,
            },
            {
              title: "规格",
              code: "specification",
              width: 120,
            },
          ],
          onSelectedRecord: [
            {
              $action: "script",
              script: `
                const info = event.args[0] || {};

                const _ = event.framework.getExpressionVars()._;
                event.page.sendComponentMessage('applicationItemList-${formType}-rapidForm', {
                  name: "setFieldsValue",
                  payload: {
                    materialCategoryId: _.get(info, 'category.id'),
                    unit: _.get(info, 'defaultUnit.id'),
                    lotNum: ''
                  }
                });
              `,
            },
          ],
        },
      },
      {
        type: "auto",
        code: "lotNum",
        $exps: {
          _hidden:
            "_.get($page.scope.stores, 'detail.data.list[0].operationType') === 'out' ||  _.get($page.scope.stores, 'detail.data.list[0].operationType') === 'transfer'",
        },
      },
      {
        type: "auto",
        code: "lotNum",
        formControlType: "materialLotNumSelector",
        formControlProps: {},
        $exps: {
          _hidden: "_.get($page.scope.stores, 'detail.data.list[0].operationType') === 'in'",
          "formControlProps.materialId": "$self.form.getFieldValue('material')",
          "formControlProps.materialCategoryId": "$self.form.getFieldValue('materialCategoryId')",
          "formControlProps.businessTypeId": "_.get($page.scope.stores, 'detail.data.list[0].businessType.id')",
        },
      },
      // {
      //   type: "auto",
      //   code: "binNum",
      // },
      // {
      //   type: "auto",
      //   code: "serialNum",
      // },
      // {
      //   type: "auto",
      //   code: "trackingCode",
      // },
      // {
      //   type: "auto",
      //   code: "tags",
      // },
      {
        type: "auto",
        code: "quantity",
      },
      {
        type: "auto",
        code: "unit",
      },
    ],
    customRequest: {
      method: "post",
      url: "/app/createInventoryApplicationItems",
    },
  };

  return formConfig;
}

const operationDataExp = `_.first(_.get($page.getScope('applicationItemList-scope')?.getStore('operationList'), 'data.list'))`;

const page: RapidPage = {
  code: "mom_inventory_application_details",
  //@ts-ignore
  parentCode: "mom_inventory_application_list",
  name: "库存业务申请单详情",
  title: "库存业务申请单详情",
  // permissionCheck: {any: []},
  view: [
    {
      $type: "rapidEntityForm",
      entityCode: "MomInventoryApplication",
      mode: "view",
      column: 3,
      items: [
        {
          type: "auto",
          code: "code",
        },
        {
          type: "auto",
          code: "operationType",
        },
        {
          type: "auto",
          code: "businessType",
          rendererProps: {
            format: "{{name}}",
          },
        },
        // {
        //   type: "auto",
        //   code: "from",
        //   rendererProps: {
        //     format: "{{name}}",
        //   },
        // },
        // {
        //   type: "auto",
        //   code: "to",
        //   rendererProps: {
        //     format: "{{name}}",
        //   },
        // },
        // {
        //   type: "auto",
        //   code: "state",
        // },
        {
          type: "auto",
          code: "createdAt",
        },
      ],
      $exps: {
        entityId: "$rui.parseQuery().id",
      },
    },
    {
      $type: "antdTabs",
      items: [
        {
          key: "items",
          label: "物品明细",
          children: [
            {
              $id: "applicationItemList",
              $type: "sonicEntityList",
              entityCode: "MomInventoryApplicationItem",
              viewMode: "table",
              selectionMode: "none",
              fixedFilters: [
                {
                  field: "application",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: "",
                    },
                  ],
                },
              ],
              listActions: [
                {
                  $type: "sonicToolbarNewEntityButton",
                  text: "新建",
                  icon: "PlusOutlined",
                  actionStyle: "primary",
                  $permissionCheck: "inventoryApplication.manage",
                },
                // {
                //   $type: "sonicToolbarRefreshButton",
                //   text: "刷新",
                //   icon: "ReloadOutlined",
                // },
              ],
              pageSize: -1,
              orderBy: [
                {
                  field: "orderNum",
                },
              ],
              columns: [
                // {
                //   type: 'auto',
                //   code: 'good',
                //   width: '100px',
                //   rendererProps: {
                //     format: "{{lotNum}} / {{serialNum}}",
                //   },
                // },
                {
                  type: "auto",
                  code: "material",
                  rendererType: "anchor",
                  rendererProps: {
                    children: {
                      $type: "materialLabelRenderer",
                      $exps: {
                        value: "$slot.value",
                      },
                    },
                    $exps: {
                      href: "$rui.execVarText('/pages/base_material_details?id={{id}}', $slot.value)",
                    },
                  },
                },
                {
                  type: "auto",
                  code: "lotNum",
                  width: "180px",
                },
                // {
                //   type: "auto",
                //   code: "binNum",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "serialNum",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "trackingCode",
                //   width: "100px",
                // },
                // {
                //   type: "auto",
                //   code: "tags",
                //   width: "100px",
                // },
                {
                  type: "auto",
                  code: "quantity",
                  width: "100px",
                },
                {
                  type: "auto",
                  code: "unit",
                  width: "80px",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
              ],
              actions: [
                {
                  $type: "sonicRecordActionEditEntity",
                  code: "edit",
                  actionType: "edit",
                  actionText: "修改",
                  $permissionCheck: "inventoryApplication.manage",
                },
                {
                  $type: "sonicRecordActionDeleteEntity",
                  code: "delete",
                  actionType: "delete",
                  actionText: "删除",
                  dataSourceCode: "list",
                  entityCode: "MomInventoryApplicationItem",
                  $permissionCheck: "inventoryApplication.manage",
                },
                {
                  $type: "inventoryApplicationReceivingAction",
                  $exps: {
                    _hidden: `_.get(_.first(_.get($stores.detail, 'data.list')), 'operationType') !== 'in'`,
                    applicationId: "$rui.parseQuery().id",
                  },
                  $permissionCheck: "inventoryOperation.manage",
                },
              ],
              newForm: cloneDeep(getFormConfig("newForm")),
              editForm: cloneDeep(omit(getFormConfig("editForm"), "customRequest")),
              stores: [
                {
                  type: "entityStore",
                  name: "operationList",
                  entityCode: "MomInventoryOperation",
                  properties: ["id", "application", "code", "createdAt", "state", "operationType", "businessType"],
                  filters: [
                    {
                      field: "application_id",
                      operator: "eq",
                      value: "",
                    },
                    {
                      field: "operationType",
                      operator: "eq",
                      value: "in",
                    },
                  ],
                  pagination: {
                    limit: 1,
                  },
                  orderBy: [
                    {
                      field: "createdAt",
                      desc: true,
                    },
                  ],
                },
              ],
              $exps: {
                "stores[0].filters[0].value": "$rui.parseQuery().id",
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
                "newForm.fixedFields.application": "$rui.parseQuery().id",
              },
            },
          ],
        },
      ],
    },
    {
      $type: "sectionSeparator",
      showLine: false,
    },
    {
      $type: "antdTabs",
      items: [
        {
          key: "items",
          label: "库存操作明细",
          children: [
            {
              $id: "goodTransferList_records",
              $type: "sonicEntityList",
              entityCode: "MomGoodTransfer",
              viewMode: "table",
              fixedFilters: [
                {
                  field: "operation",
                  operator: "exists",
                  filters: [
                    {
                      field: "id",
                      operator: "eq",
                      value: "-1",
                    },
                  ],
                },
              ],
              listActions: [
                // {
                //   $type: "sonicToolbarNewEntityButton",
                //   text: "新建",
                //   icon: "PlusOutlined",
                //   actionStyle: "primary",
                //   $permissionCheck: "inventoryOperation.manage",
                //   $exps: {
                //     _hidden: `_.get(${operationDataExp}, 'state') !== 'processing'`,
                //   },
                // },
                // {
                //   $type: "sonicToolbarRefreshButton",
                //   text: "刷新",
                //   icon: "ReloadOutlined",
                // },
                {
                  $type: "batchPrintAction",
                  title: "批量打印",
                  dataSourceAdapter: `
                    const createdAt = _.get(record, "good.createdAt");
                    const validityDate = _.get(record, "good.validityDate");
                    const dictionaries = rapidAppDefinition.getDataDictionaries();
                    const dictionary = _.find(dictionaries, function(d) { return d.code === 'QualificationState'; });
                    const qualificationStateInfo = _.find(_.get(dictionary, 'entries'), function(e){ return e.value === _.get(record, "lot.qualificationState") });

                    return {
                      templateCode: _.get(record, "material.category.printTemplate.code"),
                      taskData: _.merge({}, record, {
                        materialName: _.get(record, "material.name"),
                        materialCode: _.get(record, "material.code"),
                        materialSpecification: _.get(record, "material.specification"),
                        lotNum: _.get(record, 'lot.lotNum'),
                        createdAt: createdAt && dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                        validityDate: validityDate && dayjs(validityDate).format("YYYY-MM-DD"),
                        currentTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                        unit: _.get(record, "unit.name"),
                        qualificationState: _.get(qualificationStateInfo, 'name')
                      })
                    };
                  `,
                },
              ],
              pageSize: -1,
              orderBy: [
                {
                  field: "createdAt",
                },
              ],
              relations: {
                material: {
                  properties: ["id", "code", "name", "specification", "category"],
                  relations: {
                    category: {
                      properties: ["id", "code", "name", "printTemplate"],
                    },
                  },
                },
              },
              columns: [
                {
                  type: "auto",
                  code: "material",
                  rendererType: "anchor",
                  rendererProps: {
                    children: {
                      $type: "materialLabelRenderer",
                      $exps: {
                        value: "$slot.value",
                      },
                    },
                    $exps: {
                      href: "$rui.execVarText('/pages/base_material_details?id={{id}}', $slot.value)",
                    },
                  },
                },
                {
                  type: "auto",
                  code: "lot",
                  title: "批号",
                  width: "160px",
                  rendererProps: {
                    format: "{{lotNum}}",
                  },
                },
                {
                  type: "auto",
                  code: "binNum",
                  width: "160px",
                  title: "托盘号",
                },
                {
                  type: "auto",
                  code: "quantity",
                  width: "100px",
                },
                {
                  type: "auto",
                  code: "unit",
                  width: "80px",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
                {
                  key: "qualityGuaranteePeriod",
                  type: "auto",
                  code: "material",
                  title: "保质期",
                  fieldName: "material.qualityGuaranteePeriod",
                },
                {
                  key: "manufactureDate",
                  type: "auto",
                  code: "good",
                  title: "生产日期",
                  fieldName: "good.manufactureDate",
                  fieldType: "date",
                },
                {
                  key: "validityDate",
                  type: "auto",
                  code: "good",
                  title: "有效期至",
                  fieldName: "good.validityDate",
                  fieldType: "date",
                },
                {
                  type: "auto",
                  code: "to",
                  width: "150px",
                  rendererProps: {
                    format: "{{name}}",
                  },
                },
              ],
              actions: [
                {
                  $type: "sonicRecordActionPrintEntity",
                  code: "print",
                  actionType: "print",
                  actionText: "打印",
                  dataSourceAdapter: `
                    return _.map(data, function(item){
                      const createdAt = _.get(item, "good.createdAt");
                      const validityDate = _.get(item, "good.validityDate");
                      const dictionaries = rapidAppDefinition.getDataDictionaries();
                      const dictionary = _.find(dictionaries, function(d) { return d.code === 'QualificationState'; });
                      const qualificationStateInfo = _.find(_.get(dictionary, 'entries'), function(e){ return e.value === _.get(item, "lot.qualificationState") });

                      return {
                        templateCode: _.get(item, "material.category.printTemplate.code"),
                        taskData: _.merge({}, item, {
                          materialName: _.get(item, "material.name"),
                          materialCode: _.get(item, "material.code"),
                          materialSpecification: _.get(item, "material.specification"),
                          lotNum: _.get(item, 'lot.lotNum'),
                          createdAt: createdAt && dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                          validityDate: validityDate && dayjs(validityDate).format("YYYY-MM-DD"),
                          currentTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                          unit: _.get(item, "unit.name"),
                          qualificationState: _.get(qualificationStateInfo, 'name')
                        })
                      }
                    });
                  `,
                  $exps: {
                    _hidden: `_.get(${operationDataExp}, 'operationType') !== 'in'`,
                  },
                },
                // {
                //   $type: "inspectionPrintRecordAction",
                //   actionType: "print",
                //   actionText: "送检",
                //   printTemplateCode: "rawMaterialInspectionIdentificationCard",
                //   dataSourceAdapter: `
                //     return _.map(data, function(item){
                //       const createdAt = _.get(item, "good.createdAt");

                //       return _.merge({}, item, {
                //         materialName: _.get(item, "material.name"),
                //         materialCode: _.get(item, "material.code"),
                //         materialSpecification: _.get(item, "material.specification"),
                //         createdAt: createdAt && dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                //         lotNum: _.get(item, 'lot.lotNum'),
                //         currentTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                //         sampleCode: _.get(item, 'sampleNo'),
                //         inspectDate: dayjs().format("YYYY-MM-DD"),
                //         remark: _.get(item, 'remark')
                //       })
                //     });
                //   `,
                //   $exps: {
                //     operationId: "$rui.parseQuery().id",
                //   },
                // },
                {
                  $type: "sonicRecordActionEditEntity",
                  code: "edit",
                  actionType: "edit",
                  actionText: "修改",
                  $permissionCheck: "inventoryOperation.manage",
                  $exps: {
                    _hidden: `_.get(${operationDataExp}, 'state') !== 'processing'`,
                  },
                },
                {
                  $type: "sonicRecordActionDeleteEntity",
                  code: "delete",
                  actionType: "delete",
                  actionText: "删除",
                  dataSourceCode: "list",
                  entityCode: "MomGoodTransfer",
                  $permissionCheck: "inventoryOperation.manage",
                  $exps: {
                    _hidden: `_.get(${operationDataExp}, 'state') !== 'processing'`,
                  },
                },
              ],
              newForm: cloneDeep(createOperationFormConfig),
              editForm: cloneDeep(editOperationFormConfig),
              onSelectedIdsChange: [
                {
                  $action: "setVars",
                  $exps: {
                    "vars.selectedIds": "$event.args[0].selectedIds",
                    "vars.selectedRecords": "$event.args[0].selectedRecords",
                  },
                },
              ],
              stores: [
                {
                  type: "entityStore",
                  name: "locations",
                  entityCode: "BaseLocation",
                  properties: ["id", "type", "code", "name", "parent", "orderNum", "createdAt"],
                  filters: [],
                  orderBy: [
                    {
                      field: "orderNum",
                    },
                  ],
                },
              ],
              $exps: {
                "fixedFilters[0].filters[0].value": `_.get(${operationDataExp}, 'id') || -1`,
                "newForm.fixedFields.operation_id": `_.get(${operationDataExp}, 'id')`,
                "newForm.fixedFields.operationId": `_.get(${operationDataExp}, 'id')`,
              },
            },
          ],
        },
        {
          key: "groups",
          label: "物品明细",
          children: [
            {
              $id: "goodTransferGroupList",
              $type: "businessTable",
              selectionMode: "none",
              dataSourceCode: "goodTransferGroupList",
              requestConfig: {
                url: "/api/app/listGoodInTransfers",
              },
              $exps: {
                "fixedFilters[0].value": `_.get(${operationDataExp}, 'id')`,
              },
              fixedFilters: [
                {
                  field: "operationId",
                  operator: "eq",
                  value: "",
                },
              ],
              requestParamsAdapter: `
                return {
                  operationId: _.get(params, "filters[0]filters[0]value"),
                  limit: 1000
                }
              `,
              responseDataAdapter: `
                return {
                  list: data || []
                }
              `,
              columns: [
                {
                  title: "物料编号",
                  type: "auto",
                  code: "material.code",
                },
                {
                  title: "物料名称",
                  type: "auto",
                  code: "material.name",
                },
                {
                  title: "规格型号",
                  type: "auto",
                  code: "material.specification",
                },
                {
                  title: "单位",
                  type: "auto",
                  code: "material.defaultUnit.name",
                },
                {
                  title: "入库数量",
                  type: "auto",
                  code: "completedAmount",
                },
                {
                  title: "入库托数",
                  type: "auto",
                  code: "completedPalletAmount",
                },
                {
                  title: "批号",
                  type: "auto",
                  code: "lotNum",
                },
                // {
                //   title: "保质期（天）",
                //   type: "auto",
                //   code: "material.specification",
                // },
                // {
                //   title: "生产日期",
                //   type: "auto",
                //   code: "material.specification",
                // },
                // {
                //   title: "有效期至",
                //   type: "auto",
                //   code: "material.specification",
                // },
                {
                  title: "检验状态",
                  type: "auto",
                  code: "inspectState",
                  rendererType: "rapidOptionFieldRenderer",
                  rendererProps: {
                    dictionaryCode: "QualificationState",
                  },
                },
              ],
              actions: [
                {
                  $type: "inspectionPrintRecordAction",
                  actionType: "print",
                  actionText: "送检",
                  dataSourceAdapter: `
                  return _.map(data, function(item){
                    const createdAt = _.get(item, "good.createdAt");

                    return {
                      templateCode: "rawMaterialInspectionIdentificationCard",
                      taskData: _.merge({}, item, {
                        materialName: _.get(item, "material.name"),
                        materialCode: _.get(item, "material.code"),
                        materialSpecification: _.get(item, "material.specification"),
                        createdAt: createdAt && dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss"),
                        lotNum: _.get(item, 'lot.lotNum'),
                        currentTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                        sampleCode: _.get(item, 'sampleNo'),
                        inspectDate: dayjs().format("YYYY-MM-DD"),
                        remark: _.get(item, 'remark')
                      })
                    }
                  });
                `,
                  $exps: {
                    operationId: `_.get(${operationDataExp}, 'id')`,
                  },
                },
              ],
            },
          ],
        },
      ],
      $exps: {
        _hidden: `_.get(_.first(_.get($page.getStore('detail'), 'data.list')), 'operationType') !== 'in'`,
      },
    },
  ],
};

export default page;
