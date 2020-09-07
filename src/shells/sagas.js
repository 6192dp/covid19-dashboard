import { takeLatest, put, call } from "redux-saga/effects";
import api from "../api.js";
import history from "../root/history";

function* updateAllCovidData() {
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

function* fetchAllCovidData() {
  yield takeLatest("GET_ALL_COVID_DATA", updateAllCovidData);
}

/* ---------------------------------------------------------------------- */

function* updateAllCountriesData() {
  const action = Object.assign({});
  action.handler = "V3_COVID19_ALL_COUNTRIES_DATA";
  const response = yield call(api, action);
  if (response.status === 200) {
    yield put({
      type: "UPDATE_ALL_COUNTRIES_DATA",
      allCountriesData: response.data
    });
  }
}

function* fetchAllCountriesData() {
  yield takeLatest("GET_ALL_COVID_DATA", updateAllCountriesData);
}

/* ---------------------------------------------------------------------- */

// function* updateCountryData() {
//   // const { country_code } = action || {};
//   // const { countryCode } = country_code;
//   const action_1 = Object.assign({});
//   action_1.handler = "V3_COVID19_GET_INDIA_DATA";
//   const response = yield call(api, action_1);
//   if (response.status === 200) {
//     yield put({
//       type: "UPDATE_COUNTRY_DATA",
//       countryData: response.data
//     });
//   }
// }

// function* fetchACountryData() {
//   yield takeLatest("GET_COUNTRY_DATA", updateCountryData);
// }

/* ---------------------------------------------------------------------- */

function Navigation(action) {
  history.push(action.path);
}

function* NavigationHandler() {
  yield takeLatest("NAVIGATE", Navigation);
}

export default [
  fetchAllCovidData,
  fetchAllCountriesData,
  //fetchACountryData,
  NavigationHandler
];
