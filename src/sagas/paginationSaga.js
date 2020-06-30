import { takeEvery, put, call } from "redux-saga/effects";
import { getTableData } from "../api/paginationApi";
import { delay } from "redux-saga";
import {
  GET_TABLE_DATA_PENDING,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_FAIL,
} from "../actions/actionTypes";

function* getTableDataAsync(action) {
  try {
    const response = yield getTableData(action.payload);
    yield put({ type: GET_TABLE_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: GET_TABLE_DATA_FAIL, payload: error });
  }
}

export function* watchGetTodo() {
  yield takeEvery(GET_TABLE_DATA_PENDING, getTableDataAsync);
}
