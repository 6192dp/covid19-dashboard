export function updateEmailErrorText(emailErrorText) {
  return { type: "UPDATE_EMAIL_ERROR_TEXT", emailErrorText };
}

export function updatePasswordErrorText(passwordErrorText) {
  return { type: "UPDATE_PASSWORD_ERROR_TEXT", passwordErrorText };
}

export function clearEmailErrorText() {
  return { type: "CLEAR_EMAIL_ERROR_TEXT" };
}

export function clearPasswordErrorText() {
  return { type: "CLEAR_PASSWORD_ERROR_TEXT" };
}

export function handleLoginApi(payload) {
  return { type: "HANDLE_LOGIN_API", payload };
}

export function handleSignUpApi(payload, history) {
  return { type: "HANDLE_SIGNUP_API", payload, history };
}
