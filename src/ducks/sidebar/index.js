// Utils.
import { menus } from "../../constants/sidebar";
import { STORE_PREFIX } from "../../constants";

const PREFIX = STORE_PREFIX + "/sidebar";

export const actionTypes = {
  SET_ACTIVE_MENU: `${PREFIX}/SET_ACTIVE_MENU`,
};

const initialState = {
  activeMenu: menus[0].items[0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: action.payload,
      };
    default:
      return state;
  }
};

export function setActiveMenu(menuItem) {
  return {
    type: actionTypes.SET_ACTIVE_MENU,
    payload: menuItem,
  };
}
