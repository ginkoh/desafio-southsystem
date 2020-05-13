// React.
import React from "react";

// FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Constants.
import { menus } from "../constants/sidebar";
import { Link, useLocation } from "react-router-dom";

// Styled components.
import styled from "styled-components";
import { entityServiceInfo } from "../constants/services";

// background: #2f4050;
export const SidebarComponent = styled.nav`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  height: 100%;
  font-size: 13px;
  background: rgb(2, 0, 36);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    145deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(97, 9, 121, 1) 0%,
    rgba(18, 2, 65, 1) 36%
  );
  color: #919eff;
  transition: 0.5s;
  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    height: auto;
  }
`;

export const CollapsableSidebar = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  width: 98%;
`;

export const GroupName = styled.span`
  text-transform: uppercase;
  margin-left: 10px;
`;

export const MenuGroupsContainer = styled.div``;

export const MenusList = styled.ul`
  margin-top: 10px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #7f4ba2;
  margin-bottom: 10px;
`;

export const MenuUnordered = styled.ul`
  padding-inline-start: 20px;
  background: #200838;
`;

export const MenuItem = styled.li`
  & span {
    font-weight: bold;
  }
  ${(props) => {
    if (!props.active) return null;
    if (props.active && props.isParent)
      return `border-left: 2px solid #8f6bff; transition: border 0.2s ease-in;`;
  }}
`;

export const MenuContentContainer = styled.div``;

export const MenuIndicatorsContainer = styled.div``;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  color: ${(props) => (props.isActive ? "#fff !important" : "#a7b1c2")};
  outline: none;
  text-decoration: none !important;
  &:hover {
    color: #fff !important;
    ${(props) => (props.parent ? "background: #200838;" : null)}
  }
  ${(props) => (props.isActive && props.parent ? "background: #200838;" : null)}
`;

export function checkIsActive(menuItem, menuParent, activeMenu) {
  // In case of it's not the active menu (because if it is the active the item should be closed),
  // and it has no parent (is not the main item).
  if (!activeMenu.name === menuItem.name && !Object.keys(menuParent).length) {
    return false;
  }

  // In case of the current menu is active.
  if (menuItem.name === activeMenu.name) {
    return true;
  }

  // In case of it's the main parent and he is active.
  // I do use "arr.some" here because "arr.includes" and "arr.indexOf" does not work when
  // comparing property values of objects.
  if (
    !Object.keys(menuParent).length &&
    menuItem.submenus.some((v) => v.name === activeMenu.name)
  ) {
    return true;
  }

  // If it's none of the cases above, just return false.
  return false;
}

/**
 * Receives a list of menu groups and renders them.
 */
function MenuGroups({
  /**
   * Props.
   */
  menus,

  /**
   * Redux state.
   */
  activeMenu,

  /**
   * Actions.
   */
  setActiveMenu,

  /**
   * Reusable props.
   */
  children,
  ...rest
}) {
  return menus.map((itemGroup, index) => {
    return (
      <MenuGroupsContainer key={index} {...rest}>
        <GroupName>{itemGroup.group_name}</GroupName>
        <MenusList>
          {itemGroup.items.map((item, itemIndex) => {
            return (
              <SubMenus
                menuItem={item}
                menuParent={{}}
                key={itemIndex}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            );
          })}
        </MenusList>
      </MenuGroupsContainer>
    );
  });
}

/**
 * Receives a menu item, render him and his children if they exist.
 */
function SubMenus({
  /**
   * Props.
   */
  menuItem,
  itemKey,
  menuParent,

  /**
   * Redux state.
   */
  activeMenu,

  /**
   * Actions.
   */
  setActiveMenu,

  /**
   * Reusable props.
   */
  children,
  ...rest
}) {
  const location = useLocation();
  const baseMenuItemHeight = 80;

  // Check if the menu item has any subitems.
  const hasChildren = menuItem.submenus && menuItem.submenus.length;

  // Counts how much submenus this submenu has.
  const childrenCount = hasChildren ? menuItem.submenus.length : 0;

  // Function to check if the current menu is active
  const isActive = checkIsActive(menuItem, menuParent, activeMenu);

  // Make the submenu height calculation.
  const maxHeight = isActive
    ? `${childrenCount * baseMenuItemHeight + baseMenuItemHeight}px`
    : 0;

  // Choose which transition will be used for the submenu animation.
  const transition = isActive
    ? "max-height 0.5s ease-in"
    : "max-height .2s ease-out";

  // Render the menus and submenus recursively, no matter what is the deepness.
  return (
    <MenuItem
      key={itemKey}
      active={isActive}
      isParent={menuItem.isParent}
      style={{
        paddingTop: 0,
        paddingBottom: 0,
        ...rest.style,
      }}
    >
      {/* TODO: Change href links to <Link> component from react router. */}
      {/* TODO: Add badge support */}
      <MenuLink
        parent={menuItem.isParent}
        isActive={isActive}
        onClick={(e) => {
          e.preventDefault();

          // If the menu has no submenus set the most parent as the active menu.
          if (
            !menuItem.submenus ||
            (menuItem.submenus && !menuItem.submenus.length)
          ) {
            setActiveMenu(menuItem);
          }

          // If the menu has any submenus and is active set the current menu to empty.
          else if (menuItem.submenus && menuItem.submenus.length && isActive) {
            setActiveMenu({});
          }

          // If the menu is not active, set him as the active one.
          else if (menuItem.name !== activeMenu.name) {
            setActiveMenu(menuItem);
          }
          // In any other case, if the menu has a parent (is submenu) set the parent as the active,
          // therefore set the current menu as empty.
          else {
            setActiveMenu(menuParent || {});
          }
        }}
      >
        <MenuContentContainer style={{ width: "100%" }}>
          <FontAwesomeIcon
            icon={menuItem.icon}
            style={{ marginRight: "6px" }}
          />
          <Link
            style={{
              color: isActive ? "#fff" : "#a7b1c2",
              outline: "none",
              textDecoration: "none",
              width: "85%",
              display: "inline-flex",
              flexDirection: "row",
              flex: 1,
            }}
            to={menuItem.path ? menuItem.path : location.pathname}
          >
            <span>{menuItem.name}</span>
          </Link>
        </MenuContentContainer>
        <MenuIndicatorsContainer>
          {hasChildren ? (
            <FontAwesomeIcon
              style={{ fontSize: "10px", transition: "0.2s" }}
              icon={isActive ? "chevron-down" : "chevron-left"}
            ></FontAwesomeIcon>
          ) : null}
        </MenuIndicatorsContainer>
      </MenuLink>
      {hasChildren ? (
        <MenuUnordered parent={menuItem.isParent}>
          {menuItem.submenus.map((v, i) => {
            // The max-height is set based on the sum of each menu item's height,
            // to be able to do the animation, since this kind of animation doesn't
            // work with non-fixed height values.
            return (
              <SubMenus
                menuItem={v}
                menuParent={menuItem || {}}
                key={i}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                style={{
                  maxHeight,
                  transition,
                  overflow: "hidden",
                }}
              ></SubMenus>
            );
          })}
        </MenuUnordered>
      ) : null}
    </MenuItem>
  );
}

/**
 * Sidebar component.
 */
function Sidebar({
  /**
   * Redux state.
   */
  activeMenu,

  /**
   * Actions.
   */
  setActiveMenu,

  /**
   * Reusable props.
   */
  children,
  ...rest
}) {
  return (
    <SidebarComponent {...rest}>
      <SidebarHeader>FRONT {entityServiceInfo.prefix.toUpperCase()}</SidebarHeader>
      <CollapsableSidebar>
        <MenuGroups
          menus={menus}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        ></MenuGroups>
      </CollapsableSidebar>
    </SidebarComponent>
  );
}

export default Sidebar;
