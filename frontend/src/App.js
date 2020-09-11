import React from "react";
import "./App.css";
import Navbar from "./common/Header/Navbar";
import "./style/style.scss";
import Product from "./product/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
