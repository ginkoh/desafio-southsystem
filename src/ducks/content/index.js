// Utils.
import makeActionCreator from "../../utils/makeActionCreator";
import { STORE_PREFIX } from "../../constants";

const PREFIX = STORE_PREFIX + "/content";

export const actionTypes = {
};

const initialState = {
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
