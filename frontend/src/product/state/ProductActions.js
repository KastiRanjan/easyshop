export const fetchProductAction = () => {
  return {
    type: "FETCH_PRODUCT",
  };
};

//Action send by redux saga
export const fetchSuccessAction = (receivedProduct) => {
  return {
    type: "FETCH_SUCCESSED",
    receivedProduct,
  };
};
export const fetchFailedAction = (error) => {
  return {
    type: "FETCH_FAILED",
    error,
  };
};
