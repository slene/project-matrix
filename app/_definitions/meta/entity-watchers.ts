import type { EntityWatcherType as TEntityWatcherType } from '@ruiapp/rapid-core';
import cbs$CbsOrderItemWatchers from '../models/entity-watchers/cbs/CbsOrderItemWatchers';
import cbs$CbsOrderWatchers from '../models/entity-watchers/cbs/CbsOrderWatchers';
import mom$MomGoodTransfer from '../models/entity-watchers/mom/MomGoodTransfer';
import mom$MomInspectionMeasurement from '../models/entity-watchers/mom/MomInspectionMeasurement';
import mom$MomInspectionSheet from '../models/entity-watchers/mom/MomInspectionSheet';
import mom$MomInventoryOperation from '../models/entity-watchers/mom/MomInventoryOperation';
import mom$MomMaterialLot from '../models/entity-watchers/mom/MomMaterialLot';
import mom$MomWorkOrder from '../models/entity-watchers/mom/MomWorkOrder';
import mom$MomWorkReport from '../models/entity-watchers/mom/MomWorkReport';
import mom$MomWorkTask from '../models/entity-watchers/mom/MomWorkTask';

export default [
  ...cbs$CbsOrderItemWatchers,
  ...cbs$CbsOrderWatchers,
  ...mom$MomGoodTransfer,
  ...mom$MomInspectionMeasurement,
  ...mom$MomInspectionSheet,
  ...mom$MomInventoryOperation,
  ...mom$MomMaterialLot,
  ...mom$MomWorkOrder,
  ...mom$MomWorkReport,
  ...mom$MomWorkTask,
] as TEntityWatcherType[];
