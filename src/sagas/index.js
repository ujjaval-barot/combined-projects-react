import { all, fork } from "redux-saga/effects";
import * as todoSaga from "./todoSaga";
import * as paginationSaga from "./paginationSaga";

export function* rootSaga() {
  yield all([...Object.values(todoSaga)].map(fork));
  yield all([...Object.values(paginationSaga)].map(fork));
}
