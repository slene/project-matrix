import { cloneDeep } from "lodash";
import type { RapidPage, RapidEntityFormConfig } from "@ruiapp/rapid-extension";

const materialFormItemConfig: RapidEntityFormConfig["items"][0] = {
  type: "auto",
  label: "物品",
  code: "material",
  formControlType: "tableSingleSelector",
  formControlProps: {
    labelFormat: "{{material.code}} {{material.name}}（{{material.specification}}）",
    valueKey: "material.id",
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
        if(info) {
          const _ = event.framework.getExpressionVars()._;
          event.page.sendComponentMessage('goodTransferList-newForm-rapidForm', {
            name: "setFieldsValue",
            payload: {
              unit: _.get(info, 'unit.name'),
              lotNum: _.get(info, 'lotNum')
            }
          });
        }
      `,
      },
    ],
  },
  $exps: {
    "formControlProps.requestConfig.params.fixedFilters[0].filters[0].value": "_.get(_.first(_.get($stores.detail, 'data.list')), 'application.id')",
  },
};

const createFormConfig: Partial<RapidEntityFormConfig> = {
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
      formControlType: "editableTable",
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
  customRequest: {
    method: "post",
    url: "/app/createGoodTransfers",
  },
};

const formConfig: Partial<RapidEntityFormConfig> = {
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
};

const page: RapidPage = {
  code: "mom_inventory_in_operation_details",
  name: "入库操作详情",
  title: "入库操作详情",
  // permissionCheck: {any: []},
  view: [
    {
      $type: "rapidEntityForm",
      entityCode: "MomInventoryOperation",
      mode: "view",
      column: 3,
      extraProperties: ["application"],
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
        {
          type: "auto",
          code: "createdAt",
        },
        {
          type: "auto",
          code: "state",
        },
        {
          type: "auto",
          code: "contractNum",
        },
        {
          type: "auto",
          code: "supplier",
          rendererProps: {
            format: "{{name}}",
          },
        },
        {
          type: "auto",
          code: "approvalState",
        },
      ],
      $exps: {
        entityId: "$rui.parseQuery().id",
      },
    },
    {
      $type: "box",
      children: [
        {
          $type: "sectionSeparator",
          showLine: true,
        },
        {
          $type: "htmlElement",
          htmlTag: "h2",
          children: [
            {
              $type: "text",
              text: "申请明细",
            },
          ],
        },
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
          pageSize: -1,
          orderBy: [
            {
              field: "orderNum",
            },
          ],
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
              code: "lotNum",
              width: "100px",
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
          ],
          $exps: {
            "fixedFilters[0].filters[0].value": "_.get(_.first(_.get($stores.detail, 'data.list')), 'application.id')",
          },
        },
      ],
      $exps: {
        _hidden: "!_.get(_.first(_.get($stores.detail, 'data.list')), 'application.id')",
      },
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
              $id: "goodTransferList",
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
                  $exps: {
                    _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'state') !== 'processing'",
                  },
                },
                {
                  $type: "sonicToolbarRefreshButton",
                  text: "刷新",
                  icon: "ReloadOutlined",
                },
              ],
              pageSize: -1,
              orderBy: [
                {
                  field: "createdAt",
                },
              ],
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
                  width: "100px",
                  rendererProps: {
                    format: "{{lotNum}}",
                  },
                },
                {
                  type: "auto",
                  code: "binNum",
                  width: "100px",
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
                  type: "auto",
                  code: "material",
                  title: "保质期",
                  rendererProps: {
                    format: "{{qualityGuaranteePeriod}}",
                  },
                },
                {
                  type: "auto",
                  code: "good",
                  title: "生产日期",
                  fieldName: "good.manufactureDate",
                  fieldType: "date",
                },
                {
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
                  printTemplateCode: "rawMaterialIdentificationCard",
                  dataSourceAdapter: `
                    return _.map(data, function(item){
                      const createdAt = _.get(item, "good.createdAt");
                      const validityDate = _.get(item, "good.validityDate");
                      const dictionaries = rapidAppDefinition.getDataDictionaries();
                      const dictionary = _.find(dictionaries, function(d) { return d.code === 'QualificationState'; });
                      const qualificationStateInfo = _.find(_.get(dictionary, 'entries'), function(e){ return e.value === _.get(item, "lot.qualificationState") });

                      return _.merge({}, item, {
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
                    });
                  `,
                  $exps: {
                    _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'operationType') !== 'in'",
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
                  $exps: {
                    _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'state') !== 'processing'",
                  },
                },
                {
                  $type: "sonicRecordActionDeleteEntity",
                  code: "delete",
                  actionType: "delete",
                  actionText: "删除",
                  dataSourceCode: "list",
                  entityCode: "MomGoodTransfer",
                  $exps: {
                    _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'state') !== 'processing'",
                  },
                },
              ],
              newForm: cloneDeep(createFormConfig),
              editForm: cloneDeep(formConfig),
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
                "fixedFilters[0].filters[0].value": "$rui.parseQuery().id",
                "newForm.fixedFields.operation_id": "$rui.parseQuery().id",
                "newForm.fixedFields.operationId": "$rui.parseQuery().id",
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
                "fixedFilters[0].value": "$rui.parseQuery().id",
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
                  title: "物料编码",
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
                  printTemplateCode: "rawMaterialInspectionIdentificationCard",
                  dataSourceAdapter: `
                  return _.map(data, function(item){
                    const createdAt = _.get(item, "good.createdAt");

                    return _.merge({}, item, {
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
                  });
                `,
                  $exps: {
                    operationId: "$rui.parseQuery().id",
                  },
                },
              ],
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
      $type: "rapidToolbar",
      items: [
        // {
        //   $type: "rapidToolbarButton",
        //   text: "确认提交",
        //   actionStyle: "primary",
        //   size: "large",
        //   onAction: [
        //     {
        //       $action: "sendHttpRequest",
        //       method: "PATCH",
        //       data: { state: "done", approvalState: "approving" },
        //       $exps: {
        //         url: `"/api/mom/mom_inventory_operations/" + $rui.parseQuery().id`,
        //       },
        //     },
        //   ],
        //   $exps: {
        //     _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'state') !== 'processing'",
        //   },
        // },
        {
          $type: "rapidToolbarButton",
          text: "批准",
          actionStyle: "primary",
          size: "large",
          onAction: [
            {
              $action: "sendHttpRequest",
              method: "PATCH",
              data: { approvalState: "approved" },
              $exps: {
                url: `"/api/mom/mom_inventory_operations/" + $rui.parseQuery().id`,
              },
            },
          ],
          $exps: {
            _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'approvalState') !== 'approving'",
          },
        },
        {
          $type: "rapidToolbarButton",
          text: "拒绝",
          danger: true,
          size: "large",
          onAction: [
            {
              $action: "sendHttpRequest",
              method: "PATCH",
              data: { approvalState: "rejected" },
              $exps: {
                url: `"/api/mom/mom_inventory_operations/" + $rui.parseQuery().id`,
              },
            },
          ],
          $exps: {
            _hidden: "_.get(_.first(_.get($stores.detail, 'data.list')), 'approvalState') !== 'approving'",
          },
        },
      ],
    },
  ],
};

export default page;
