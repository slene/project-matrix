export const entitySingularCodes = [
  'app_client',
  'app_nav_item',
  'base_building',
  'base_employee',
  'base_form_field',
  'base_gate',
  'base_location',
  'base_lot',
  'base_material',
  'base_material_category',
  'base_material_document',
  'base_material_type',
  'base_office',
  'base_partner',
  'base_partner_category',
  'base_unit',
  'base_unit_category',
  'bpm_activity',
  'bpm_application',
  'bpm_task',
  'bpm_process',
  'bpm_process_category',
  'bpm_process_revision',
  'cbs_contract',
  'cbs_contract_file',
  'cbs_contract_funding_budget',
  'cbs_contract_relation',
  'cbs_contract_relation_kind',
  'cbs_order',
  'cbs_order_item',
  'ecm_document',
  'ecm_revision',
  'ecm_storage_object',
  'fin_account',
  'fin_business_category',
  'fin_expense_category',
  'fin_transaction',
  'kis_config',
  'data_dictionary',
  'data_dictionary_entry',
  'model',
  'property',
  'route',
  'mom_assembly_main',
  'mom_assembly_part',
  'mom_equipment',
  'mom_equipment_category',
  'mom_good',
  'mom_good_label',
  'mom_good_location',
  'mom_good_transfer',
  'mom_inspection_category',
  'mom_inspection_characteristic',
  'mom_inspection_characteristic_category',
  'mom_inspection_defect',
  'mom_inspection_defect_category',
  'mom_inspection_defect_stat',
  'mom_inspection_instrument',
  'mom_inspection_instrument_category',
  'mom_inspection_measurement',
  'mom_inspection_method',
  'mom_inspection_rule',
  'mom_inspection_sheet',
  'mom_inventory',
  'mom_inventory_application',
  'mom_inventory_application_item',
  'mom_inventory_business_type',
  'mom_inventory_label',
  'mom_inventory_operation',
  'mom_inventory_stat_table',
  'mom_inventory_stat_trigger',
  'mom_lab',
  'mom_line',
  'mom_manufacturing_resource_plan',
  'mom_master_production_schedule',
  'mom_master_production_schedule_item',
  'mom_material_breakdown',
  'mom_material_breakdown_part',
  'mom_material_inventory_balance',
  'mom_material_inventory_log',
  'mom_material_lot_warehouse_inventory_balance',
  'mom_material_lot_warehouse_inventory_log',
  'mom_material_warehouse_inventory_balance',
  'mom_material_warehouse_inventory_log',
  'mom_package',
  'mom_package_good',
  'mom_print_template',
  'mom_process',
  'mom_process_category',
  'mom_route',
  'mom_route_process',
  'mom_route_process_input',
  'mom_route_process_output',
  'mom_route_template',
  'mom_route_template_process',
  'mom_shift',
  'mom_shop',
  'mom_station',
  'mom_warehouse',
  'mom_work_order',
  'mom_work_report',
  'mom_work_task',
  'mom_work_team',
  'mom_work_track',
  'oc_department',
  'oc_role',
  'oc_user',
  'shopfloor_app',
  'shopfloor_app_step',
  'shopfloor_app_version',
  'shopfloor_display_device',
  'shopfloor_station',
  'svc_print_task',
  'svc_printer',
  'sys_action',
  'sys_action_group',
  'webhook',
  'pm_milestone',
  'pm_phase',
  'pm_project',
  'pm_project_budget',
  'pm_project_category',
  'pm_project_cost_budget',
  'pm_project_cost_category',
  'pm_project_event',
  'pm_project_role',
  'pm_project_work_item_step_role',
  'pm_project_work_item_type',
  'pm_work_item',
  'pm_work_item_resolution',
  'pm_work_item_step',
  'pm_work_item_type',
  'pm_work_item_type_step',
] as const;
export type TEntitySingularCodes = typeof entitySingularCodes[number];

const entityFieldCodes = {
  'AppClient': [
    'id',
    'code',
    'name',
    'config',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'AppNavItem': [
    'id',
    'code',
    'name',
    'client',
    'parent',
    'orderNum',
    'icon',
    'pageCode',
    'config',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseBuilding': [
    'id',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseEmployee': [
    'id',
    'code',
    'name',
    'department',
    'state',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseFormField': [
    'id',
    'code',
    'name',
    'source',
    'externalId',
    'externalData',
    'fieldType',
    'state',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseGate': [
    'id',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseLocation': [
    'id',
    'parent',
    'type',
    'code',
    'name',
    'description',
    'orderNum',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseLot': [
    'id',
    'material',
    'lotNum',
    'sourceType',
    'expireTime',
    'qualificationState',
    'isAOD',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseMaterial': [
    'id',
    'code',
    'name',
    'brand',
    'specification',
    'description',
    'category',
    'defaultUnit',
    'types',
    'canProduce',
    'canPurchase',
    'canOutsource',
    'canSale',
    'state',
    'isInspectionFree',
    'qualityGuaranteePeriod',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseMaterialCategory': [
    'id',
    'code',
    'name',
    'defaultUnit',
    'orderNum',
    'parent',
    'materials',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseMaterialDocument': [
    'id',
    'material',
    'document',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseMaterialType': [
    'id',
    'materials',
    'code',
    'name',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseOffice': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BasePartner': [
    'id',
    'code',
    'name',
    'categories',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BasePartnerCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseUnit': [
    'id',
    'code',
    'name',
    'nameEn',
    'printSymbol',
    'type',
    'orderNum',
    'category',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BaseUnitCategory': [
    'id',
    'name',
    'orderNum',
    'units',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BpmActivity': [
    'id',
    'application',
    'name',
    'kind',
    'tasks',
    'state',
    'resolution',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BpmApplication': [
    'id',
    'process',
    'code',
    'title',
    'formData',
    'initiator',
    'initiatedAt',
    'approvedAt',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BpmTask': [
    'id',
    'activity',
    'assignee',
    'state',
    'resolution',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BpmProcess': [
    'id',
    'category',
    'name',
    'description',
    'formConfig',
    'flowConfig',
    'listConfig',
    'advancedConfig',
    'state',
    'publishState',
    'activeRevision',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BpmProcessCategory': [
    'id',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'BpmProcessRevision': [
    'id',
    'process',
    'name',
    'description',
    'formConfig',
    'flowConfig',
    'advancedConfig',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsContract': [
    'id',
    'kind',
    'code',
    'name',
    'description',
    'project',
    'salesman',
    'orders',
    'totalAmount',
    'signingDate',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsContractFile': [
    'id',
    'code',
    'name',
    'size',
    'description',
    'contract',
    'storageObject',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsContractFundingBudget': [
    'id',
    'code',
    'name',
    'description',
    'project',
    'salesman',
    'orders',
    'totalAmount',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsContractRelation': [
    'id',
    'main',
    'target',
    'kind',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsContractRelationKind': [
    'id',
    'code',
    'name',
    'orderNum',
    'opposite',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsOrder': [
    'id',
    'kind',
    'code',
    'name',
    'description',
    'projects',
    'contracts',
    'mrp',
    'items',
    'totalAmount',
    'taxFee',
    'transactions',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'CbsOrderItem': [
    'id',
    'order',
    'mrp',
    'orderNum',
    'subject',
    'name',
    'tags',
    'description',
    'price',
    'quantity',
    'unit',
    'taxRate',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'EcmDocument': [
    'id',
    'type',
    'code',
    'name',
    'extName',
    'title',
    'size',
    'lastRevision',
    'storageObject',
    'ref',
    'parent',
    'ancestorIdPath',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'EcmRevision': [
    'id',
    'document',
    'size',
    'storageObject',
    'publishState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'EcmStorageObject': [
    'id',
    'size',
    'key',
    'hash',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'FinAccount': [
    'id',
    'code',
    'name',
    'description',
    'initialAmount',
    'balance',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'FinBusinessCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'parent',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'FinExpenseCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'parent',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'FinTransaction': [
    'id',
    'code',
    'account',
    'type',
    'description',
    'amount',
    'balance',
    'transferedAt',
    'state',
    'contract',
    'order',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'KisConfig': [
    'id',
    'api_endpoint',
    'client_id',
    'client_secret',
    'uid',
    'session_id',
    'access_token',
    'auth_data',
    'refresh_auth_data_token',
    'gateway_router_addr',
    'session_id_expire_in',
    'access_token_expire_in',
    'refresh_auth_data_token_expire_in',
    'updated_at',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'DataDictionary': [
    'id',
    'code',
    'name',
    'valueType',
    'level',
    'description',
    'source',
    'externalId',
    'externalData',
    'state',
    'entries',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'DataDictionaryEntry': [
    'id',
    'dictionary',
    'value',
    'name',
    'color',
    'icon',
    'description',
    'disabled',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Model': [
    'id',
    'namespace',
    'name',
    'description',
    'singularCode',
    'pluralCode',
    'properties',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Property': [
    'id',
    'model',
    'type',
    'name',
    'code',
    'description',
    'columnName',
    'required',
    'defaultValue',
    'config',
    'autoIncrement',
    'minLength',
    'maxLength',
    'relation',
    'targetSingularCode',
    'targetIdColumnName',
    'selfIdColumnName',
    'linkSchema',
    'linkTableName',
    'dataDictionary',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Route': [
    'id',
    'namespace',
    'code',
    'name',
    'description',
    'type',
    'method',
    'endpoint',
    'actions',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomAssemblyMain': [
    'id',
    'workOrder',
    'workTrack',
    'workTask',
    'route',
    'routeProcess',
    'mainMaterial',
    'mainMaterialCode',
    'mainLotNum',
    'mainSerialNum',
    'parts',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomAssemblyPart': [
    'id',
    'main',
    'partMaterial',
    'partMaterialCode',
    'partLotNum',
    'partSerialNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomEquipment': [
    'id',
    'code',
    'name',
    'category',
    'state',
    'powerState',
    'productionState',
    'planedDailyWorkingTime',
    'station',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomEquipmentCategory': [
    'id',
    'name',
    'orderNum',
    'parent',
    'equipments',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomGood': [
    'id',
    'trackingCode',
    'material',
    'materialCode',
    'lotNum',
    'binNum',
    'serialNum',
    'quantity',
    'unit',
    'location',
    'putInTime',
    'source',
    'tags',
    'labels',
    'state',
    'extra',
    'manufactureDate',
    'validityDate',
    'lot',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomGoodLabel': [
    'id',
    'good',
    'name',
    'textValue',
    'numberValue',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomGoodLocation': [
    'id',
    'good',
    'location',
    'putInTime',
    'takeOutTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomGoodTransfer': [
    'id',
    'operation',
    'orderNum',
    'good',
    'trackingCode',
    'material',
    'lotNum',
    'binNum',
    'serialNum',
    'tags',
    'quantity',
    'unit',
    'from',
    'to',
    'transferTime',
    'packageNum',
    'manufactureDate',
    'validityDate',
    'printTime',
    'lot',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'parent',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionCharacteristic': [
    'id',
    'rule',
    'name',
    'skippable',
    'category',
    'method',
    'instrumentCategory',
    'instrument',
    'kind',
    'determineType',
    'norminal',
    'upperTol',
    'lowerTol',
    'upperLimit',
    'lowerLimit',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionCharacteristicCategory': [
    'id',
    'name',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionDefect': [
    'id',
    'name',
    'category',
    'orderNum',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionDefectCategory': [
    'id',
    'name',
    'orderNum',
    'parent',
    'state',
    'defects',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionDefectStat': [
    'id',
    'sheet',
    'defect',
    'sampleAmount',
    'defectAmount',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionInstrument': [
    'id',
    'code',
    'category',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionInstrumentCategory': [
    'id',
    'name',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionMeasurement': [
    'id',
    'sheet',
    'sampleCode',
    'characteristic',
    'instrumentCategory',
    'instrument',
    'inspector',
    'inspectedAt',
    'qualitativeValue',
    'quantitativeValue',
    'isQualified',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionMethod': [
    'id',
    'name',
    'description',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionRule': [
    'id',
    'category',
    'material',
    'routeProcess',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInspectionSheet': [
    'id',
    'code',
    'state',
    'result',
    'material',
    'materialCode',
    'lotNum',
    'serialNum',
    'sampleCount',
    'workOrder',
    'workTrack',
    'workTask',
    'inventoryOperation',
    'rule',
    'routeProcess',
    'sender',
    'inspector',
    'reviewer',
    'measurements',
    'defectStats',
    'lot',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventory': [
    'id',
    'material',
    'warehouse',
    'availableQuantity',
    'allocableQuantity',
    'onOrderQuantity',
    'intransitQuantity',
    'onHandQuantity',
    'reservedQuantity',
    'allocatedQuantity',
    'shippingQuantity',
    'deliveredQuantity',
    'processingQuantity',
    'processedQuantity',
    'yieldQuantity',
    'unit',
    'lotNum',
    'binNum',
    'serialNum',
    'tags',
    'labels',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryApplication': [
    'id',
    'code',
    'operationType',
    'businessType',
    'applicant',
    'items',
    'state',
    'extra',
    'contractNum',
    'supplier',
    'operationState',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryApplicationItem': [
    'id',
    'application',
    'orderNum',
    'good',
    'trackingCode',
    'material',
    'lotNum',
    'binNum',
    'serialNum',
    'tags',
    'quantity',
    'unit',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryBusinessType': [
    'id',
    'operationType',
    'name',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryLabel': [
    'id',
    'inventory',
    'name',
    'textValue',
    'numberValue',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryOperation': [
    'id',
    'code',
    'operationType',
    'businessType',
    'application',
    'businessDetails',
    'state',
    'approvalState',
    'transfers',
    'warehouse',
    'contractNum',
    'supplier',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryStatTable': [
    'id',
    'name',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomInventoryStatTrigger': [
    'id',
    'name',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomLab': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomLine': [
    'id',
    'shop',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomManufacturingResourcePlan': [
    'id',
    'name',
    'result',
    'planningState',
    'executionState',
    'productionSchedules',
    'workOrders',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMasterProductionSchedule': [
    'id',
    'code',
    'material',
    'tags',
    'quantity',
    'unit',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'scheduleState',
    'executionState',
    'mrp',
    'productionOrders',
    'purchaseOrders',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMasterProductionScheduleItem': [
    'id',
    'productionPlan',
    'material',
    'quantity',
    'unit',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialBreakdown': [
    'id',
    'material',
    'version',
    'quantity',
    'unit',
    'state',
    'parts',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialBreakdownPart': [
    'id',
    'materialBreakdown',
    'orderNum',
    'subMaterial',
    'matchTags',
    'quantity',
    'unit',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialInventoryBalance': [
    'id',
    'material',
    'tags',
    'unit',
    'availableQuantity',
    'allocableQuantity',
    'onOrderQuantity',
    'intransitQuantity',
    'onHandQuantity',
    'reservedQuantity',
    'allocatedQuantity',
    'shippingQuantity',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialInventoryLog': [
    'id',
    'balanceRecord',
    'material',
    'tags',
    'unit',
    'availableQuantity',
    'availableQuantityChange',
    'allocableQuantity',
    'allocableQuantityChange',
    'onOrderQuantity',
    'onOrderQuantityChange',
    'intransitQuantity',
    'intransitQuantityChange',
    'onHandQuantity',
    'onHandQuantityChange',
    'reservedQuantity',
    'reservedQuantityChange',
    'allocatedQuantity',
    'allocatedQuantityChange',
    'shippingQuantity',
    'shippingQuantityChange',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialLotWarehouseInventoryBalance': [
    'id',
    'material',
    'tags',
    'lotNum',
    'warehouse',
    'unit',
    'onHandQuantity',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialLotWarehouseInventoryLog': [
    'id',
    'balanceRecord',
    'material',
    'tags',
    'lotNum',
    'warehouse',
    'unit',
    'onHandQuantity',
    'onHandQuantityChange',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialWarehouseInventoryBalance': [
    'id',
    'material',
    'tags',
    'warehouse',
    'unit',
    'allocableQuantity',
    'onHandQuantity',
    'allocatedQuantity',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomMaterialWarehouseInventoryLog': [
    'id',
    'balanceRecord',
    'material',
    'tags',
    'warehouse',
    'unit',
    'allocableQuantity',
    'allocableQuantityChange',
    'onHandQuantity',
    'onHandQuantityChange',
    'allocatedQuantity',
    'allocatedQuantityChange',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomPackage': [
    'id',
    'code',
    'goods',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomPackageGood': [
    'id',
    'package_id',
    'good',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomPrintTemplate': [
    'id',
    'name',
    'code',
    'content',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomProcess': [
    'id',
    'code',
    'name',
    'category',
    'orderNum',
    'standardCycleTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomProcessCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomRoute': [
    'id',
    'material',
    'version',
    'state',
    'publishState',
    'processes',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomRouteProcess': [
    'id',
    'route',
    'orderNum',
    'process',
    'aliasName',
    'inputs',
    'outputs',
    'standardCycleTime',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomRouteProcessInput': [
    'id',
    'routeProcess',
    'material',
    'quantity',
    'unit',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomRouteProcessOutput': [
    'id',
    'routeProcess',
    'material',
    'quantity',
    'unit',
    'config',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomRouteTemplate': [
    'id',
    'name',
    'processes',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomRouteTemplateProcess': [
    'id',
    'routeTemplate',
    'process',
    'standardCycleTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomShift': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomShop': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomStation': [
    'id',
    'building',
    'location',
    'shop',
    'line',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomWarehouse': [
    'id',
    'building',
    'location',
    'code',
    'name',
    'orderNum',
    'state',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomWorkOrder': [
    'id',
    'code',
    'mrp',
    'material',
    'tags',
    'route',
    'quantity',
    'unit',
    'assignmentState',
    'executionState',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'productionTasks',
    'workReports',
    'inspectionSheets',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomWorkReport': [
    'id',
    'code',
    'workOrder',
    'workTrack',
    'workTask',
    'route',
    'routeProcess',
    'quantity',
    'qualifiedQuantity',
    'unqualifiedQuantity',
    'scrapQuantity',
    'unit',
    'equipment',
    'operators',
    'extra',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomWorkTask': [
    'id',
    'code',
    'workOrder',
    'workTrack',
    'material',
    'route',
    'routeProcess',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'quantity',
    'unit',
    'equipment',
    'assignees',
    'deadline',
    'assigner',
    'assignedAt',
    'acceptedAt',
    'assignmentState',
    'executionState',
    'workReports',
    'inspectionSheets',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomWorkTeam': [
    'id',
    'shop',
    'code',
    'name',
    'orderNum',
    'leader',
    'members',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'MomWorkTrack': [
    'id',
    'code',
    'workOrder',
    'assignmentState',
    'executionState',
    'material',
    'route',
    'quantity',
    'unit',
    'scheduledStartDate',
    'scheduledFinishDate',
    'actualStartDate',
    'actualFinishDate',
    'productionTasks',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'OcDepartment': [
    'id',
    'parent',
    'code',
    'name',
    'orderNum',
    'users',
    'externalCode',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'OcRole': [
    'id',
    'name',
    'description',
    'orderNum',
    'state',
    'users',
    'actions',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'OcUser': [
    'id',
    'name',
    'login',
    'password',
    'hidden',
    'state',
    'email',
    'department',
    'roles',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorApp': [
    'id',
    'code',
    'name',
    'description',
    'icon',
    'version',
    'permissions',
    'content',
    'publishedAt',
    'publishedBy',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorAppStep': [
    'id',
    'app',
    'code',
    'name',
    'kind',
    'orderNum',
    'triggers',
    'schema',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorAppVersion': [
    'id',
    'app',
    'version',
    'description',
    'content',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorDisplayDevice': [
    'id',
    'code',
    'name',
    'description',
    'stations',
    'deleted',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'ShopfloorStation': [
    'id',
    'code',
    'name',
    'description',
    'apps',
    'deleted',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SvcPrintTask': [
    'id',
    'printer',
    'name',
    'type',
    'data',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SvcPrinter': [
    'id',
    'code',
    'description',
    'networkState',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SysAction': [
    'id',
    'group',
    'code',
    'name',
    'description',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'SysActionGroup': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'Webhook': [
    'id',
    'name',
    'url',
    'secret',
    'namespace',
    'modelSingularCode',
    'events',
    'enabled',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmMilestone': [
    'id',
    'project',
    'phase',
    'name',
    'description',
    'deadline',
    'state',
    'completedAt',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmPhase': [
    'id',
    'project',
    'name',
    'description',
    'startDate',
    'endDate',
    'state',
    'actualStartedAt',
    'actualCompletedAt',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProject': [
    'id',
    'code',
    'name',
    'description',
    'category',
    'workItemCodePrefix',
    'customer',
    'stage',
    'state',
    'owner',
    'salesman',
    'projectManager',
    'distributor',
    'phases',
    'milestones',
    'orders',
    'workItemTypes',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectBudget': [
    'id',
    'project',
    'orderNum',
    'type',
    'title',
    'subject',
    'cost',
    'price',
    'quantity',
    'unit',
    'taxRate',
    'businessCategory',
    'expenseCategory',
    'scheduledPaymentDate',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectCategory': [
    'id',
    'code',
    'name',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectCostBudget': [
    'id',
    'project',
    'title',
    'amount',
    'costCategory',
    'paymentTime',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectCostCategory': [
    'id',
    'code',
    'name',
    'description',
    'orderNum',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectEvent': [
    'id',
    'project',
    'title',
    'content',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectRole': [
    'id',
    'project',
    'name',
    'description',
    'orderNum',
    'config',
    'users',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectWorkItemStepRole': [
    'id',
    'project',
    'workItemType',
    'workItemTypeStep',
    'projectRole',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmProjectWorkItemType': [
    'id',
    'project',
    'workItemType',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmWorkItem': [
    'id',
    'workItemType',
    'project',
    'milestone',
    'code',
    'title',
    'description',
    'parent',
    'subItems',
    'assignee',
    'assigner',
    'scheduledStartTime',
    'scheduledCompleteTime',
    'actualStartTime',
    'actualCompleteTime',
    'currentStep',
    'currentStepAssignee',
    'steps',
    'estimate',
    'progress',
    'progressCoefficient',
    'state',
    'resolution',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmWorkItemResolution': [
    'id',
    'name',
    'description',
    'orderNum',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmWorkItemStep': [
    'id',
    'workItem',
    'workItemTypeStep',
    'assignee',
    'assigner',
    'scheduledStartTime',
    'scheduledCompleteTime',
    'actualStartTime',
    'actualCompleteTime',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmWorkItemType': [
    'id',
    'code',
    'name',
    'description',
    'orderNum',
    'config',
    'state',
    'projects',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
  'PmWorkItemTypeStep': [
    'id',
    'workItemType',
    'name',
    'description',
    'orderNum',
    'config',
    'state',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ],
} as const;
export type TEntityFieldCodes = typeof entityFieldCodes;
export type TEntityCodes = keyof TEntityFieldCodes;
