const dictionaryCodes = [
  'ActiveInactiveState',
  'ApprovalState',
  'BaseLocationType',
  'BusinessActivityKind',
  'BusinessActivityState',
  'BusinessApplicationState',
  'BusinessTaskState',
  'CbsContractKind',
  'CbsContractState',
  'CbsOrderKind',
  'CbsOrderState',
  'ConfirmationState',
  'DataDictionaryValueType',
  'DocumentType',
  'EmployeeState',
  'EnabledDisabledState',
  'FinTransactionType',
  'FormFieldType',
  'InspectionDetermineType',
  'InspectionResult',
  'MaterialSourceType',
  'DataDictionaryLevel',
  'PropertyType',
  'RouteHttpMethod',
  'RouteType',
  'MomEquipmentPowerState',
  'MomEquipmentProductionState',
  'MomGoodState',
  'MomInspectionSheetState',
  'MomInventoryOperationState',
  'MomInventoryOperationType',
  'MomMpsExecutionState',
  'MomMpsScheduleState',
  'MomMrpExecutionState',
  'MomMrpPlanningState',
  'MomPackageGoodState',
  'MomWorkOrderAssignmentState',
  'MomWorkOrderExecutionState',
  'MomWorkTaskAssignmentState',
  'MomWorkTaskExecutionState',
  'MomWorkTrackAssignmentState',
  'MomWorkTrackExecutionState',
  'PmBudgetType',
  'PmMilestoneState',
  'PmPhaseState',
  'PmProjectStage',
  'PmProjectState',
  'PmWorkItemState',
  'PmWorkItemStepState',
  'PrinterNetworkState',
  'PrintTaskState',
  'PublishState',
  'QualificationState',
  'QuantityType',
  'UndeletedDeletedState',
  'UnitType',
  'UserSecretLevel',
] as const;
export type TDictionaryCodes = typeof dictionaryCodes[number];
