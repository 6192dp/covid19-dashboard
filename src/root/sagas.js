import { fork, all } from "redux-saga/effects";
import allCovidDataSagas from "../shells/sagas";

const sagas = [...allCovidDataSagas];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
