import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/product/").then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <span>{product.category}</span>
          <br />
        </div>
      ))}
    </div>
  );
}
