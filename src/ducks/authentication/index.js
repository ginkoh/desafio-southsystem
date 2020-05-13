// Utils.
import makeActionCreator from "../../utils/makeActionCreator";
import { STORE_PREFIX } from "../../constants";

const PREFIX = STORE_PREFIX + "/authentication";

export const actionTypes = {
  SET_AUTHENTICATED: `${PREFIX}/SET_AUTHENTICATED`,
  SET_UNAUTHENTICATED: `${PREFIX}/SET_UNAUTHENTICATED`,
};

const initialState = {
  authenticated: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case actionTypes.SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
}

export const setAuthenticated = makeActionCreator(
  actionTypes.SET_AUTHENTICATED,
);

export const setUnauthenticated = makeActionCreator(
  actionTypes.SET_UNAUTHENTICATED,
);
