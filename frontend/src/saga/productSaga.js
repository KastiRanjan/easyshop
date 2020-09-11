///saga effect
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./Api";

function* fetchProduct() {
  // yield will wait for Promise to resolve
  try {
    const data = yield Api.getProductFromApi();
    yield put({ type: "FETCH_SUCCESSED", receivedProduct: data });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export function* watchFetchProduct() {
  yield takeLatest("FETCH_PRODUCT", fetchProduct);
}
