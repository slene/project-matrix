import type { RapidEntity as TRapidEntity } from '@ruiapp/rapid-extension';
import { autoConfigureRapidEntity } from '@ruiapp/rapid-extension';
import AppClient from '../models/entities/AppClient';
import AppNavItem from '../models/entities/AppNavItem';
import BaseBuilding from '../models/entities/BaseBuilding';
import BaseEmployee from '../models/entities/BaseEmployee';
import BaseFormField from '../models/entities/BaseFormField';
import BaseGate from '../models/entities/BaseGate';
import BaseLocation from '../models/entities/BaseLocation';
import BaseLot from '../models/entities/BaseLot';
import BaseMaterial from '../models/entities/BaseMaterial';
import BaseMaterialCategory from '../models/entities/BaseMaterialCategory';
import BaseMaterialDocument from '../models/entities/BaseMaterialDocument';
import BaseMaterialType from '../models/entities/BaseMaterialType';
import BaseOffice from '../models/entities/BaseOffice';
import BasePartner from '../models/entities/BasePartner';
import BasePartnerCategory from '../models/entities/BasePartnerCategory';
import BaseUnit from '../models/entities/BaseUnit';
import BaseUnitCategory from '../models/entities/BaseUnitCategory';
import CbsContract from '../models/entities/CbsContract';
import CbsContractFile from '../models/entities/CbsContractFile';
import CbsContractFundingBudget from '../models/entities/CbsContractFundingBudget';
import CbsContractRelation from '../models/entities/CbsContractRelation';
import CbsContractRelationKind from '../models/entities/CbsContractRelationKind';
import CbsOrder from '../models/entities/CbsOrder';
import CbsOrderItem from '../models/entities/CbsOrderItem';
import EcmDocument from '../models/entities/EcmDocument';
import EcmRevision from '../models/entities/EcmRevision';
import EcmStorageObject from '../models/entities/EcmStorageObject';
import FinAccount from '../models/entities/FinAccount';
import FinBusinessCategory from '../models/entities/FinBusinessCategory';
import FinExpenseCategory from '../models/entities/FinExpenseCategory';
import FinTransaction from '../models/entities/FinTransaction';
import KisConfig from '../models/entities/KisConfig';
import MetaDataDictionary from '../models/entities/MetaDataDictionary';
import MetaDataDictionaryEntry from '../models/entities/MetaDataDictionaryEntry';
import MetaModel from '../models/entities/MetaModel';
import MetaProperty from '../models/entities/MetaProperty';
import MetaRoute from '../models/entities/MetaRoute';
import MomAssemblyMain from '../models/entities/MomAssemblyMain';
import MomAssemblyPart from '../models/entities/MomAssemblyPart';
import MomEquipment from '../models/entities/MomEquipment';
import MomEquipmentCategory from '../models/entities/MomEquipmentCategory';
import MomGood from '../models/entities/MomGood';
import MomGoodLabel from '../models/entities/MomGoodLabel';
import MomGoodLocation from '../models/entities/MomGoodLocation';
import MomGoodTransfer from '../models/entities/MomGoodTransfer';
import MomInspectionCategory from '../models/entities/MomInspectionCategory';
import MomInspectionCharacteristic from '../models/entities/MomInspectionCharacteristic';
import MomInspectionCharacteristicCategory from '../models/entities/MomInspectionCharacteristicCategory';
import MomInspectionDefect from '../models/entities/MomInspectionDefect';
import MomInspectionDefectCategory from '../models/entities/MomInspectionDefectCategory';
import MomInspectionDefectStat from '../models/entities/MomInspectionDefectStat';
import MomInspectionInstrument from '../models/entities/MomInspectionInstrument';
import MomInspectionInstrumentCategory from '../models/entities/MomInspectionInstrumentCategory';
import MomInspectionMeasurement from '../models/entities/MomInspectionMeasurement';
import MomInspectionMethod from '../models/entities/MomInspectionMethod';
import MomInspectionRule from '../models/entities/MomInspectionRule';
import MomInspectionSheet from '../models/entities/MomInspectionSheet';
import MomInventory from '../models/entities/MomInventory';
import MomInventoryApplication from '../models/entities/MomInventoryApplication';
import MomInventoryApplicationItem from '../models/entities/MomInventoryApplicationItem';
import MomInventoryBusinessType from '../models/entities/MomInventoryBusinessType';
import MomInventoryLabel from '../models/entities/MomInventoryLabel';
import MomInventoryOperation from '../models/entities/MomInventoryOperation';
import MomInventoryStatTable from '../models/entities/MomInventoryStatTable';
import MomInventoryStatTrigger from '../models/entities/MomInventoryStatTrigger';
import MomLab from '../models/entities/MomLab';
import MomLine from '../models/entities/MomLine';
import MomManufacturingResourcePlan from '../models/entities/MomManufacturingResourcePlan';
import MomMasterProductionSchedule from '../models/entities/MomMasterProductionSchedule';
import MomMasterProductionScheduleItem from '../models/entities/MomMasterProductionScheduleItem';
import MomMaterialBreakdown from '../models/entities/MomMaterialBreakdown';
import MomMaterialBreakdownPart from '../models/entities/MomMaterialBreakdownPart';
import MomMaterialInventoryBalance from '../models/entities/MomMaterialInventoryBalance';
import MomMaterialInventoryLog from '../models/entities/MomMaterialInventoryLog';
import MomMaterialLotWarehouseInventoryBalance from '../models/entities/MomMaterialLotWarehouseInventoryBalance';
import MomMaterialLotWarehouseInventoryLog from '../models/entities/MomMaterialLotWarehouseInventoryLog';
import MomMaterialWarehouseInventoryBalance from '../models/entities/MomMaterialWarehouseInventoryBalance';
import MomMaterialWarehouseInventoryLog from '../models/entities/MomMaterialWarehouseInventoryLog';
import MomPackage from '../models/entities/MomPackage';
import MomPackageGood from '../models/entities/MomPackageGood';
import MomPrintTemplate from '../models/entities/MomPrintTemplate';
import MomProcess from '../models/entities/MomProcess';
import MomProcessCategory from '../models/entities/MomProcessCategory';
import MomRoute from '../models/entities/MomRoute';
import MomRouteProcess from '../models/entities/MomRouteProcess';
import MomRouteProcessInput from '../models/entities/MomRouteProcessInput';
import MomRouteProcessOutput from '../models/entities/MomRouteProcessOutput';
import MomRouteTemplate from '../models/entities/MomRouteTemplate';
import MomRouteTemplateProcess from '../models/entities/MomRouteTemplateProcess';
import MomShift from '../models/entities/MomShift';
import MomShop from '../models/entities/MomShop';
import MomStation from '../models/entities/MomStation';
import MomWarehouse from '../models/entities/MomWarehouse';
import MomWarehouseStrategy from '../models/entities/MomWarehouseStrategy';
import MomWorkOrder from '../models/entities/MomWorkOrder';
import MomWorkReport from '../models/entities/MomWorkReport';
import MomWorkTask from '../models/entities/MomWorkTask';
import MomWorkTeam from '../models/entities/MomWorkTeam';
import MomWorkTrack from '../models/entities/MomWorkTrack';
import OcDepartment from '../models/entities/OcDepartment';
import OcRole from '../models/entities/OcRole';
import OcUser from '../models/entities/OcUser';
import ShopfloorApp from '../models/entities/ShopfloorApp';
import ShopfloorAppStep from '../models/entities/ShopfloorAppStep';
import ShopfloorAppVersion from '../models/entities/ShopfloorAppVersion';
import ShopfloorDisplayDevice from '../models/entities/ShopfloorDisplayDevice';
import ShopfloorStation from '../models/entities/ShopfloorStation';
import SvcPrintTask from '../models/entities/SvcPrintTask';
import SvcPrinter from '../models/entities/SvcPrinter';
import SysAction from '../models/entities/SysAction';
import SysActionGroup from '../models/entities/SysActionGroup';
import SysWebhook from '../models/entities/SysWebhook';
import bpm$BpmActivity from '../models/entities/bpm/BpmActivity';
import bpm$BpmInstance from '../models/entities/bpm/BpmInstance';
import bpm$BpmProcess from '../models/entities/bpm/BpmProcess';
import bpm$BpmProcessCategory from '../models/entities/bpm/BpmProcessCategory';
import bpm$BpmProcessRevision from '../models/entities/bpm/BpmProcessRevision';
import bpm$BpmTask from '../models/entities/bpm/BpmTask';
import pm$PmMilestone from '../models/entities/pm/PmMilestone';
import pm$PmPhase from '../models/entities/pm/PmPhase';
import pm$PmProject from '../models/entities/pm/PmProject';
import pm$PmProjectBudget from '../models/entities/pm/PmProjectBudget';
import pm$PmProjectCategory from '../models/entities/pm/PmProjectCategory';
import pm$PmProjectCost from '../models/entities/pm/PmProjectCost';
import pm$PmProjectCostCategory from '../models/entities/pm/PmProjectCostCategory';
import pm$PmProjectEvent from '../models/entities/pm/PmProjectEvent';
import pm$PmProjectRole from '../models/entities/pm/PmProjectRole';
import pm$PmProjectWorkItemStepRole from '../models/entities/pm/PmProjectWorkItemStepRole';
import pm$PmProjectWorkItemType from '../models/entities/pm/PmProjectWorkItemType';
import pm$PmWorkItem from '../models/entities/pm/PmWorkItem';
import pm$PmWorkItemResolution from '../models/entities/pm/PmWorkItemResolution';
import pm$PmWorkItemStep from '../models/entities/pm/PmWorkItemStep';
import pm$PmWorkItemType from '../models/entities/pm/PmWorkItemType';
import pm$PmWorkItemTypeStep from '../models/entities/pm/PmWorkItemTypeStep';

const entityDefinitions = [
  AppClient,
  AppNavItem,
  BaseBuilding,
  BaseEmployee,
  BaseFormField,
  BaseGate,
  BaseLocation,
  BaseLot,
  BaseMaterial,
  BaseMaterialCategory,
  BaseMaterialDocument,
  BaseMaterialType,
  BaseOffice,
  BasePartner,
  BasePartnerCategory,
  BaseUnit,
  BaseUnitCategory,
  CbsContract,
  CbsContractFile,
  CbsContractFundingBudget,
  CbsContractRelation,
  CbsContractRelationKind,
  CbsOrder,
  CbsOrderItem,
  EcmDocument,
  EcmRevision,
  EcmStorageObject,
  FinAccount,
  FinBusinessCategory,
  FinExpenseCategory,
  FinTransaction,
  KisConfig,
  MetaDataDictionary,
  MetaDataDictionaryEntry,
  MetaModel,
  MetaProperty,
  MetaRoute,
  MomAssemblyMain,
  MomAssemblyPart,
  MomEquipment,
  MomEquipmentCategory,
  MomGood,
  MomGoodLabel,
  MomGoodLocation,
  MomGoodTransfer,
  MomInspectionCategory,
  MomInspectionCharacteristic,
  MomInspectionCharacteristicCategory,
  MomInspectionDefect,
  MomInspectionDefectCategory,
  MomInspectionDefectStat,
  MomInspectionInstrument,
  MomInspectionInstrumentCategory,
  MomInspectionMeasurement,
  MomInspectionMethod,
  MomInspectionRule,
  MomInspectionSheet,
  MomInventory,
  MomInventoryApplication,
  MomInventoryApplicationItem,
  MomInventoryBusinessType,
  MomInventoryLabel,
  MomInventoryOperation,
  MomInventoryStatTable,
  MomInventoryStatTrigger,
  MomLab,
  MomLine,
  MomManufacturingResourcePlan,
  MomMasterProductionSchedule,
  MomMasterProductionScheduleItem,
  MomMaterialBreakdown,
  MomMaterialBreakdownPart,
  MomMaterialInventoryBalance,
  MomMaterialInventoryLog,
  MomMaterialLotWarehouseInventoryBalance,
  MomMaterialLotWarehouseInventoryLog,
  MomMaterialWarehouseInventoryBalance,
  MomMaterialWarehouseInventoryLog,
  MomPackage,
  MomPackageGood,
  MomPrintTemplate,
  MomProcess,
  MomProcessCategory,
  MomRoute,
  MomRouteProcess,
  MomRouteProcessInput,
  MomRouteProcessOutput,
  MomRouteTemplate,
  MomRouteTemplateProcess,
  MomShift,
  MomShop,
  MomStation,
  MomWarehouse,
  MomWarehouseStrategy,
  MomWorkOrder,
  MomWorkReport,
  MomWorkTask,
  MomWorkTeam,
  MomWorkTrack,
  OcDepartment,
  OcRole,
  OcUser,
  ShopfloorApp,
  ShopfloorAppStep,
  ShopfloorAppVersion,
  ShopfloorDisplayDevice,
  ShopfloorStation,
  SvcPrintTask,
  SvcPrinter,
  SysAction,
  SysActionGroup,
  SysWebhook,
  bpm$BpmActivity,
  bpm$BpmInstance,
  bpm$BpmProcess,
  bpm$BpmProcessCategory,
  bpm$BpmProcessRevision,
  bpm$BpmTask,
  pm$PmMilestone,
  pm$PmPhase,
  pm$PmProject,
  pm$PmProjectBudget,
  pm$PmProjectCategory,
  pm$PmProjectCost,
  pm$PmProjectCostCategory,
  pm$PmProjectEvent,
  pm$PmProjectRole,
  pm$PmProjectWorkItemStepRole,
  pm$PmProjectWorkItemType,
  pm$PmWorkItem,
  pm$PmWorkItemResolution,
  pm$PmWorkItemStep,
  pm$PmWorkItemType,
  pm$PmWorkItemTypeStep,
];
const configuredEntities:TRapidEntity[] = [
  autoConfigureRapidEntity(AppClient, entityDefinitions),
  autoConfigureRapidEntity(AppNavItem, entityDefinitions),
  autoConfigureRapidEntity(BaseBuilding, entityDefinitions),
  autoConfigureRapidEntity(BaseEmployee, entityDefinitions),
  autoConfigureRapidEntity(BaseFormField, entityDefinitions),
  autoConfigureRapidEntity(BaseGate, entityDefinitions),
  autoConfigureRapidEntity(BaseLocation, entityDefinitions),
  autoConfigureRapidEntity(BaseLot, entityDefinitions),
  autoConfigureRapidEntity(BaseMaterial, entityDefinitions),
  autoConfigureRapidEntity(BaseMaterialCategory, entityDefinitions),
  autoConfigureRapidEntity(BaseMaterialDocument, entityDefinitions),
  autoConfigureRapidEntity(BaseMaterialType, entityDefinitions),
  autoConfigureRapidEntity(BaseOffice, entityDefinitions),
  autoConfigureRapidEntity(BasePartner, entityDefinitions),
  autoConfigureRapidEntity(BasePartnerCategory, entityDefinitions),
  autoConfigureRapidEntity(BaseUnit, entityDefinitions),
  autoConfigureRapidEntity(BaseUnitCategory, entityDefinitions),
  autoConfigureRapidEntity(CbsContract, entityDefinitions),
  autoConfigureRapidEntity(CbsContractFile, entityDefinitions),
  autoConfigureRapidEntity(CbsContractFundingBudget, entityDefinitions),
  autoConfigureRapidEntity(CbsContractRelation, entityDefinitions),
  autoConfigureRapidEntity(CbsContractRelationKind, entityDefinitions),
  autoConfigureRapidEntity(CbsOrder, entityDefinitions),
  autoConfigureRapidEntity(CbsOrderItem, entityDefinitions),
  autoConfigureRapidEntity(EcmDocument, entityDefinitions),
  autoConfigureRapidEntity(EcmRevision, entityDefinitions),
  autoConfigureRapidEntity(EcmStorageObject, entityDefinitions),
  autoConfigureRapidEntity(FinAccount, entityDefinitions),
  autoConfigureRapidEntity(FinBusinessCategory, entityDefinitions),
  autoConfigureRapidEntity(FinExpenseCategory, entityDefinitions),
  autoConfigureRapidEntity(FinTransaction, entityDefinitions),
  autoConfigureRapidEntity(KisConfig, entityDefinitions),
  autoConfigureRapidEntity(MetaDataDictionary, entityDefinitions),
  autoConfigureRapidEntity(MetaDataDictionaryEntry, entityDefinitions),
  autoConfigureRapidEntity(MetaModel, entityDefinitions),
  autoConfigureRapidEntity(MetaProperty, entityDefinitions),
  autoConfigureRapidEntity(MetaRoute, entityDefinitions),
  autoConfigureRapidEntity(MomAssemblyMain, entityDefinitions),
  autoConfigureRapidEntity(MomAssemblyPart, entityDefinitions),
  autoConfigureRapidEntity(MomEquipment, entityDefinitions),
  autoConfigureRapidEntity(MomEquipmentCategory, entityDefinitions),
  autoConfigureRapidEntity(MomGood, entityDefinitions),
  autoConfigureRapidEntity(MomGoodLabel, entityDefinitions),
  autoConfigureRapidEntity(MomGoodLocation, entityDefinitions),
  autoConfigureRapidEntity(MomGoodTransfer, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionCategory, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionCharacteristic, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionCharacteristicCategory, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionDefect, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionDefectCategory, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionDefectStat, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionInstrument, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionInstrumentCategory, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionMeasurement, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionMethod, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionRule, entityDefinitions),
  autoConfigureRapidEntity(MomInspectionSheet, entityDefinitions),
  autoConfigureRapidEntity(MomInventory, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryApplication, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryApplicationItem, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryBusinessType, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryLabel, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryOperation, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryStatTable, entityDefinitions),
  autoConfigureRapidEntity(MomInventoryStatTrigger, entityDefinitions),
  autoConfigureRapidEntity(MomLab, entityDefinitions),
  autoConfigureRapidEntity(MomLine, entityDefinitions),
  autoConfigureRapidEntity(MomManufacturingResourcePlan, entityDefinitions),
  autoConfigureRapidEntity(MomMasterProductionSchedule, entityDefinitions),
  autoConfigureRapidEntity(MomMasterProductionScheduleItem, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialBreakdown, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialBreakdownPart, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialInventoryBalance, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialInventoryLog, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialLotWarehouseInventoryBalance, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialLotWarehouseInventoryLog, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialWarehouseInventoryBalance, entityDefinitions),
  autoConfigureRapidEntity(MomMaterialWarehouseInventoryLog, entityDefinitions),
  autoConfigureRapidEntity(MomPackage, entityDefinitions),
  autoConfigureRapidEntity(MomPackageGood, entityDefinitions),
  autoConfigureRapidEntity(MomPrintTemplate, entityDefinitions),
  autoConfigureRapidEntity(MomProcess, entityDefinitions),
  autoConfigureRapidEntity(MomProcessCategory, entityDefinitions),
  autoConfigureRapidEntity(MomRoute, entityDefinitions),
  autoConfigureRapidEntity(MomRouteProcess, entityDefinitions),
  autoConfigureRapidEntity(MomRouteProcessInput, entityDefinitions),
  autoConfigureRapidEntity(MomRouteProcessOutput, entityDefinitions),
  autoConfigureRapidEntity(MomRouteTemplate, entityDefinitions),
  autoConfigureRapidEntity(MomRouteTemplateProcess, entityDefinitions),
  autoConfigureRapidEntity(MomShift, entityDefinitions),
  autoConfigureRapidEntity(MomShop, entityDefinitions),
  autoConfigureRapidEntity(MomStation, entityDefinitions),
  autoConfigureRapidEntity(MomWarehouse, entityDefinitions),
  autoConfigureRapidEntity(MomWarehouseStrategy, entityDefinitions),
  autoConfigureRapidEntity(MomWorkOrder, entityDefinitions),
  autoConfigureRapidEntity(MomWorkReport, entityDefinitions),
  autoConfigureRapidEntity(MomWorkTask, entityDefinitions),
  autoConfigureRapidEntity(MomWorkTeam, entityDefinitions),
  autoConfigureRapidEntity(MomWorkTrack, entityDefinitions),
  autoConfigureRapidEntity(OcDepartment, entityDefinitions),
  autoConfigureRapidEntity(OcRole, entityDefinitions),
  autoConfigureRapidEntity(OcUser, entityDefinitions),
  autoConfigureRapidEntity(ShopfloorApp, entityDefinitions),
  autoConfigureRapidEntity(ShopfloorAppStep, entityDefinitions),
  autoConfigureRapidEntity(ShopfloorAppVersion, entityDefinitions),
  autoConfigureRapidEntity(ShopfloorDisplayDevice, entityDefinitions),
  autoConfigureRapidEntity(ShopfloorStation, entityDefinitions),
  autoConfigureRapidEntity(SvcPrintTask, entityDefinitions),
  autoConfigureRapidEntity(SvcPrinter, entityDefinitions),
  autoConfigureRapidEntity(SysAction, entityDefinitions),
  autoConfigureRapidEntity(SysActionGroup, entityDefinitions),
  autoConfigureRapidEntity(SysWebhook, entityDefinitions),
  autoConfigureRapidEntity(bpm$BpmActivity, entityDefinitions),
  autoConfigureRapidEntity(bpm$BpmInstance, entityDefinitions),
  autoConfigureRapidEntity(bpm$BpmProcess, entityDefinitions),
  autoConfigureRapidEntity(bpm$BpmProcessCategory, entityDefinitions),
  autoConfigureRapidEntity(bpm$BpmProcessRevision, entityDefinitions),
  autoConfigureRapidEntity(bpm$BpmTask, entityDefinitions),
  autoConfigureRapidEntity(pm$PmMilestone, entityDefinitions),
  autoConfigureRapidEntity(pm$PmPhase, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProject, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectBudget, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectCategory, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectCost, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectCostCategory, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectEvent, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectRole, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectWorkItemStepRole, entityDefinitions),
  autoConfigureRapidEntity(pm$PmProjectWorkItemType, entityDefinitions),
  autoConfigureRapidEntity(pm$PmWorkItem, entityDefinitions),
  autoConfigureRapidEntity(pm$PmWorkItemResolution, entityDefinitions),
  autoConfigureRapidEntity(pm$PmWorkItemStep, entityDefinitions),
  autoConfigureRapidEntity(pm$PmWorkItemType, entityDefinitions),
  autoConfigureRapidEntity(pm$PmWorkItemTypeStep, entityDefinitions),
];
export default configuredEntities;
