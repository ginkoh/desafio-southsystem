// Utils.
import makeActionCreator from "../../utils/makeActionCreator";
import { STORE_PREFIX } from "../../constants";
import APIService from "../../services/api";

const PREFIX = STORE_PREFIX + "/content";

export const actionTypes = {
  FETCH_REQUEST: `${PREFIX}/FETCH_REQUEST`,
  FETCH_SUCCESS: `${PREFIX}/FETCH_SUCCESS`,
  FETCH_ERROR: `${PREFIX}/FETCH_ERROR`,
};

const initialState = {
  entity: null,
  entities: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        entity: action.payload.entity,
        entities: action.payload.entities,
        loading: false,
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const fetchRequest = makeActionCreator(actionTypes.FETCH_REQUEST);

export const fetchSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload,
  };
};

export const fetchError = makeActionCreator(actionTypes.FETCH_ERROR);

/**
 * @function fetchAPIData
 *
 * @param {*} entityId
 * @param {*} method - Single or multiple fetch.
 */
export const fetchAPIData = (entityId) => {
  return async (dispatch) => {
    // Dispatch the fetch request event into the redux store.
    dispatch(fetchRequest());

    // Get the response from the api, receiving either one or multiple entities.
    const response = entityId
      ? await APIService.getEntity(entityId)
      : await APIService.getAllEntities();

    if (response && response.status === 200) {
      dispatch(
        fetchSuccess({
          entity: entityId ? response.data : null,
          entities: !entityId ? response.data : [],
        })
      );
    } else {
      dispatch(fetchError());
    }
  };
};
