export const actionTypes = {
  TOGGLE_INITIAL: "initial/TOGGLE_INITIAL",
};

const initialState = {
  isInitial: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_INITIAL:
      return {
        ...state,
        isInitial: action.payload.isInitial,
      };
    default:
      return state;
  }
}

export function initialize() {
  return {
    type: actionTypes.TOGGLE_INITIAL,
    payload: {
      isInitial: true,
    },
  };
}
