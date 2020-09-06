export function login(state = {}, action) {
  switch (action.type) {
    case "UPDATE_EMAIL_ERROR_TEXT": {
      const { emailErrorText } = action;
      return Object.assign({}, state, { emailErrorText });
    }
    case "UPDATE_PASSWORD_ERROR_TEXT": {
      const { passwordErrorText } = action;
      return Object.assign({}, state, { passwordErrorText });
    }
    case "CLEAR_EMAIL_ERROR_TEXT": {
      return Object.assign({}, state, { emailErrorText: null });
    }
    case "CLEAR_PASSWORD_ERROR_TEXT": {
      return Object.assign({}, state, { passwordErrorText: null });
    }
    default:
      return state;
  }
}
