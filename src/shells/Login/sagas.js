import { takeLatest, put, call } from "redux-saga/effects";
import api from "../api.js";

function* updateLoginAPIResp() {
  const action = Object.assign({});
  action.handler = "V3_COVID19_ALL";
  const response = yield call(api, action);
  if (response.status === 200) {
    yield put({
      type: "UPDATE_ALL_COVID_DATA",
      allCovidData: response.data
    });
  }
}

function* handleLoginAPI() {
  yield takeLatest("HANDLE_LOGIN_API", updateLoginAPIResp);
}

/* ---------------------------------------------------------------------- */

export default [handleLoginAPI];
