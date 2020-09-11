const initialState = [];
const ProductReducer = (products = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSED":
      return action.receivedProduct;
    case "FETCH_FAILED":
      return [];
    default:
      return products;
  }
};

export default ProductReducer;
