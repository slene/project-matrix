import { Link } from "@remix-run/react";
import { Menu } from "antd";
import * as antdIcons from "@ant-design/icons";
import type { ItemType, MenuItemGroupType } from "antd/lib/menu/hooks/useItems";
import { useMemo } from "react";
import { arrayToTree } from "~/utils/array-utils";
import { filter } from "lodash";

export interface AppNavItem {
  code: string;
  name: string;
  icon?: string;
  pageCode: string;
  state: string;
  orderNum: number;
  parent?: AppNavItem;
  children?: AppNavItem[];
}

function getMenuItemFromNavItem(navItem: AppNavItem, appCode?: string): ItemType {
  const IconComponent = navItem.icon ? (antdIcons as any)[navItem.icon] : null;
  const menuItem: ItemType = {
    key: navItem.code,
    icon: IconComponent ? <IconComponent /> : null,
    label: navItem.pageCode ? <Link to={`/${appCode || "pages"}/${navItem.pageCode}`}>{navItem.name}</Link> : <span>{navItem.name}</span>,
  };
  if (navItem.children && navItem.children.length) {
    (menuItem as MenuItemGroupType).children = navItem.children.map((navItem) => getMenuItemFromNavItem(navItem, appCode));
  }

  if (!navItem.pageCode && !(menuItem as MenuItemGroupType).children) {
    return null;
  }

  return menuItem;
}

function getMenuItems(navItems: AppNavItem[], appCode?: string) {
  const navItemsTree = arrayToTree(navItems, null, {
    parentField: "parent.id",
  });
  const menuItems: ItemType[] = navItemsTree.map((navItem) => getMenuItemFromNavItem(navItem, appCode));

  return menuItems;
}

export interface IProps {
  navItems: AppNavItem[];
  appCode?: string;
}

export default function LeftNav(props: IProps) {
  const { navItems, appCode } = props;
  const menuItems = useMemo(() => {
    return getMenuItems(navItems, appCode);
  }, [navItems]);

  return <Menu className="rui-left-nav-menu" theme="dark" mode="inline" items={menuItems} />;
}
