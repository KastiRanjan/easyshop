import { call, all } from "redux-saga/effects";
import { watchFetchProduct } from "./productSaga";

export default function* rootSaga() {
  yield call(watchFetchProduct);
}
