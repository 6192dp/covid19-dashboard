import { fork, all } from "redux-saga/effects";
import allCovidDataSagas from "../shells/sagas";
import loginSagas from "../shells/Login/sagas";
import vaccineSagas from "../shells/Vaccine/sagas";

const sagas = [...allCovidDataSagas, ...loginSagas, ...vaccineSagas];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
