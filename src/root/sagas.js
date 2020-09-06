import { fork, all } from "redux-saga/effects";
import allCovidDataSagas from "../shells/sagas";
import loginSagas from "../shells/Login/sagas";

const sagas = [...allCovidDataSagas, ...loginSagas];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
