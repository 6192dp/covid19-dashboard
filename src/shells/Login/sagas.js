import { takeLatest, put, call } from "redux-saga/effects";
import api from "../../api.js";

function* updateLoginAPIResp(action) {
  const { payload, history } = action || {};
  const history_1 = history.history || {};
  const action_1 = Object.assign({});
  action_1.handler = "V1_USER_LOGIN";
  action_1.payload = payload;
  action_1.isLambdaAPI = true;
  const response = yield call(api, action_1);
  if (response.status === 200) {
    if (response.data.status === 400) {
      yield put({
        type: "UPDATE_EMAIL_ERROR_TEXT",
        emailErrorText: response.data.message
      });
    } else if (response.data.status === 200) {
      history_1.replace("/home");
    }
  } else if (response.status === 400) {
    yield put({
      type: "UPDATE_EMAIL_ERROR_TEXT",
      emailErrorText: response.data.message
    });
  }
}

function* handleLoginAPI() {
  yield takeLatest("HANDLE_LOGIN_API", updateLoginAPIResp);
}

/* ---------------------------------------------------------------------- */

function* updateSignupAPIResp(action) {
  const { payload, history } = action || {};
  const history_1 = history.history || {};
  const action_1 = Object.assign({});
  action_1.handler = "V1_USER_SIGNUP";
  action_1.payload = payload;
  action_1.isLambdaAPI = true;
  const response = yield call(api, action_1);
  if (response.status === 200) {
    if (response.data.status === 400) {
      yield put({
        type: "UPDATE_EMAIL_ERROR_TEXT",
        emailErrorText: response.data.message
      });
    } else if (response.data.status === 200) {
      //yield put({ type: "NAVIGATE", path: "home" });
      //history.push("/home");
      //yield put(push("/home"));
      history_1.replace("/home");
    }
  } else if (response.status === 400) {
    yield put({
      type: "UPDATE_EMAIL_ERROR_TEXT",
      emailErrorText: response.data.message
    });
  }
}

function* handleSignupAPI() {
  yield takeLatest("HANDLE_SIGNUP_API", updateSignupAPIResp);
}

/* ---------------------------------------------------------------------- */

export default [handleLoginAPI, handleSignupAPI];
