import { takeLatest, put, call } from "redux-saga/effects";
import api from "../../api.js";

function* updateVaccineStatus() {
  const action = Object.assign({});
  action.handler = "V3_COVID19_VACCINE";
  const response = yield call(api, action);
  if (response.status === 200) {
    yield put({
      type: "UPDATE_VACCINE_DATA",
      vaccineData: response.data
    });
  }
}

function* fetchVaccineStatus() {
  yield takeLatest("GET_VACCINE_STATUS", updateVaccineStatus);
}

/* ---------------------------------------------------------------------- */

export default [fetchVaccineStatus];
