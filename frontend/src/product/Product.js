import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction, fetchSuccessAction, fetchFailedAction } from "./state/ProductActions";

const Product = () => {
  const [state, setstate] = useState();
  const products = useSelector((state) => state.product);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAction());
  }, []);

  return (
    <div>
      {products.map((product) => (
        <span>{product.name}</span>
      ))}
    </div>
  );
};
export default Product;
