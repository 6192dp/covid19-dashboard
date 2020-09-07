export function vaccineData(state = {}, action) {
  switch (action.type) {
    case "UPDATE_VACCINE_DATA": {
      const { vaccineData } = action;
      return Object.assign({}, state, { vaccineData });
    }
    default:
      return state;
  }
}
