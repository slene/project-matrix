import { EventEmitter, Framework, IStore, Page, PageCommand, PageConfig, RockConfig, StoreConfigBase, StoreMeta } from "@ruiapp/move-style";
import type { LinkshopAppRockConfig } from "../linkshop-types";
import { cloneDeep, find, map } from "lodash";
import { DesignStage } from "../designer-types";
import { UpdateEntityByIdOptions } from "@ruiapp/rapid-core";
import rapidApi from "~/rapidApi";
import { EntityStoreConfig } from "@ruiapp/rapid-extension";
import { genRandomComponentId } from "../utilities/DesignerUtility";

export interface LinkshopAppStoreConfig extends StoreConfigBase {
  appId?: string;
  appConfig?: LinkshopAppRockConfig;
  stores?: EntityStoreConfig[];
}

export class LinkshopAppDesignerStore implements IStore<LinkshopAppStoreConfig> {
  #emitter: EventEmitter;
  #name: string;
  appId?: string;
  appConfig?: LinkshopAppRockConfig;
  #framework: Framework;
  #page: Page;
  #stage?: DesignStage;
  #selectedComponentTreeNodeId?: string;
  #selectedComponentId?: string;
  #selectedSlotPropName?: string;
  #snippets: RockConfig[];
  id: string;

  constructor(framework: Framework) {
    this.#name = "";
    this.#emitter = new EventEmitter();

    this.#snippets = [];
    this.id = genRandomComponentId();

    this.#framework = framework;
    this.#page = new Page(framework);
    this.#page.observe(() => {
      this.#emitter.emit("dataChange", null);
    });
  }

  get name(): string {
    return this.#name;
  }

  setConfig(storeConfig: LinkshopAppStoreConfig) {
    console.debug(`[RUI][LinkshopAppDesignerStore][${storeConfig.name}] LinkshopAppDesignerStore.setConfig()`);
    this.#name = storeConfig.name;
    if (storeConfig.appConfig) {
      this.setAppConfig(
        storeConfig.appConfig || {
          $type: "linkshopApp",
          steps: [],
        },
      );
    }

    this.processCommand({
      name: "addStores",
      payload: {
        stores: storeConfig.stores || [],
      },
    });

    this.appId = storeConfig.appId;
  }

  setAppConfig(value: LinkshopAppRockConfig) {
    this.appConfig = value;
    this.#emitter.emit("dataChange", null);
  }

  get selectedSetpId(): string | null {
    if (!this.#stage) {
      return null;
    }

    if (this.#stage.type === "step") {
      return this.#stage.stepId;
    }

    return null;
  }

  #stashCurrentStageToAppConfig() {
    const currentStage = this.#stage;

    if (currentStage) {
      if (currentStage.type === "step") {
        const currentStep = this.currentStep!;
        const stagePageConfig = this.#page.getSerializableConfig();
        if (currentStep) {
          currentStep.children = stagePageConfig.view;
        }
      }
    }
  }

  setDesignStage(stage: DesignStage) {
    this.#stashCurrentStageToAppConfig();

    this.#stage = stage;

    this.#selectedComponentTreeNodeId = undefined;
    this.#selectedComponentId = undefined;
    this.#selectedSlotPropName = undefined;

    this.#emitter.emit("dataChange", null);
  }

  get currentStep() {
    if (!this.appConfig) {
      return null;
    }

    const currentStage = this.#stage;
    if (!currentStage) {
      return null;
    }

    if (currentStage.type === "step") {
      const step = find(this.appConfig.steps, { $id: currentStage.stepId });
      return step;
    }

    return null;
  }

  setPageConfig(value: PageConfig) {
    this.#page.setConfig(value);
    this.#emitter.emit("dataChange", null);
  }

  setPropertyExpression(propName: string, propExpression: string) {}

  async loadData(input?: any): Promise<any> {
    return this.#page.loadData();
  }

  observe(callback: (data: any) => void) {
    this.#emitter.on("dataChange", callback);
  }

  get data() {
    return this.#page.getConfig();
  }

  get pageConfig(): PageConfig {
    return this.#page?.getConfig();
  }

  get page(): Page {
    return this.#page;
  }

  get selectedComponentTreeNodeId(): string | undefined {
    return this.#selectedComponentTreeNodeId;
  }

  get selectedComponentId(): string | undefined {
    return this.#selectedComponentId;
  }

  get selectedSlotPropName(): string | undefined {
    return this.#selectedSlotPropName;
  }

  async saveAppConfig() {
    this.#stashCurrentStageToAppConfig();

    const appContent = {
      steps: this.appConfig?.steps,
      stores: this.page.scope.config.stores || [],
    };

    await rapidApi.patch(`/shopfloor/shopfloor_apps/${this.appId}`, {
      content: appContent,
    });
  }

  getSerializableConfig(): PageConfig {
    return this.#page?.getSerializableConfig();
  }

  setSelectedComponentTreeNode(nodeId?: string, componentId?: string, slotPropName?: string) {
    this.#selectedComponentTreeNodeId = nodeId;
    this.#selectedComponentId = componentId;
    this.#selectedSlotPropName = slotPropName;
    this.#emitter.emit("dataChange", null);
  }

  processCommand(command: PageCommand) {
    if (command.name === "setPageConfig") {
      // 这里的 setPageConfig 是 step 切换引起的
      const { payload } = command;
      this.#page.setConfig(payload.pageConfig);
    } else if (command.name === "setComponentProperty") {
      const { payload } = command;
      this.#page.setComponentProperty(payload.componentId, payload.propName, payload.propValue);
    } else if (command.name === "setComponentProperties") {
      const { payload } = command;
      this.#page.setComponentProperties(payload.componentId, payload.props);
    } else if (command.name === "removeComponentProperty") {
      const { payload } = command;
      this.#page.removeComponentProperty(payload.componentId, payload.propName);
    } else if (command.name === "setComponentPropertyExpression") {
      const { payload } = command;
      this.#page.setComponentPropertyExpression(payload.componentId, payload.propName, payload.propExpression);
    } else if (command.name === "removeComponentPropertyExpression") {
      const { payload } = command;
      this.#page.removeComponentPropertyExpression(payload.componentId, payload.propName);
    } else if (command.name === "addComponent") {
      const { payload } = command;
      const { componentType, parentComponentId, slotPropName, prevSiblingComponentId, defaultProps } = payload;

      if (parentComponentId) {
        const parentComponent = this.#page.getComponent(parentComponentId);
        const parentComponentMeta = this.#framework.getComponent(parentComponent.$type);
        if (parentComponentMeta.voidComponent) {
          return;
        }
      }

      const componentConfig: RockConfig = {
        $type: componentType,
        ...defaultProps,
      };

      // TODO: implement this: Generate id before add to page, so that we can support collaboration design.
      // if (!componentConfig.$id) {
      //   throw new Error("Component id MUST be set before added to page.");
      // }
      this.#page.addComponents([componentConfig], parentComponentId, slotPropName, prevSiblingComponentId);
    } else if (command.name === "removeComponents") {
      this.#page.removeComponents(command.payload.componentIds);
      this.setSelectedComponentTreeNode(undefined, undefined, undefined);
    } else if (command.name === "cutComponents") {
      const componentIds = command.payload.componentIds;
      if (!componentIds || !componentIds.length) {
        return;
      }
      this.#snippets = map(componentIds, (componentId) => this.#page.getComponent(componentId));
      this.#page.removeComponents(componentIds);
      this.setSelectedComponentTreeNode(undefined, undefined, undefined);
    } else if (command.name === "copyComponents") {
      const componentIds = command.payload.componentIds;
      if (!componentIds || !componentIds.length) {
        return;
      }
      this.#snippets = map(componentIds, (componentId) => cloneDeep(this.#page.getComponent(componentId)));
    } else if (command.name === "pasteComponents") {
      if (!this.#snippets || !this.#snippets.length) {
        return;
      }

      const { payload } = command;
      const { parentComponentId, slotPropName, prevSiblingComponentId } = payload;

      this.#page.addComponents(this.#snippets, parentComponentId, slotPropName, prevSiblingComponentId);
    } else if (command.name === "addStores") {
      this.#page.scope.addStores(command.payload?.stores);
    } else if (command.name === "addStore") {
      this.#page.addStore(command.payload?.store);
    } else if (command.name === "modifyStore") {
      this.#page.updateStore(command.payload.store);
    } else if (command.name === "removeStore") {
      this.#page.removeStore(command.payload?.store);
    } else if (command.name === "addStep") {
      const existedSteps = this.appConfig?.steps || [];
      const isExistedStep = existedSteps.some((s) => s.$name === command.payload?.step?.$name);
      if (isExistedStep) {
        return;
      }

      this.setAppConfig({
        ...(this.appConfig || {}),
        steps: [...existedSteps, command.payload?.step],
      } as LinkshopAppRockConfig);
    } else if (command.name === "modifyStep") {
      const existedSteps = this.appConfig?.steps || [];
      this.setAppConfig({
        ...(this.appConfig || {}),
        // TODO: store name editable?
        steps: existedSteps?.map((s) => (s.$id === command.payload?.step?.$id ? { ...s, ...(command.payload.step || {}) } : s)),
      } as LinkshopAppRockConfig);
    } else if (command.name === "removeStep") {
      const existedSteps = this.appConfig?.steps || [];
      this.setAppConfig({
        ...(this.appConfig || {}),
        steps: existedSteps?.filter((s) => s.$id !== command.payload?.step?.$id),
      } as LinkshopAppRockConfig);
    }
  }
}

export default {
  type: "linkshopAppDesignerStore",
  store: LinkshopAppDesignerStore,
} as StoreMeta<LinkshopAppStoreConfig>;
