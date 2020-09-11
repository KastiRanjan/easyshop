import axios from "axios";
const url = "http://localhost:8000/product/";

function* getProductFromApi() {
  const response = yield fetch(url);
  // Again yield will wait for Promise to resolve
  const data = yield response.json();
  return data;
}

export const Api = {
  getProductFromApi,
};
