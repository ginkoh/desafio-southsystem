/**
 * A shorthand to create action creators.
 *
 * @param {String} type - The type of the action.
 * @param {Object} payloadItems - The payload of the action.
 *
 * @returns {Object}
 */
export default function makeActionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

/**
 * Creates an action creator function and attaches the action value to the
 * action name itself.
 *
 * @function makeChangeAction
 *
 * @param {String} actionType - the value of the action type property
 * @param {String} actionKey - the key of the action value
 *
 * @returns {Function}
 */
export const makeChangeAction = (actionType, actionKey) => (actionValue) => ({
  type: actionType,
  ...(typeof actionKey === "string" ? { [actionKey]: actionValue } : {}),
});
