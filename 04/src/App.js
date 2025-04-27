import React from "react";
import Product from "./Product/Product.js";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <Product name="DELL" image="./img/01_dell.jpg" price={240}></Product>
      <Product name="HP" image="./img/02_hp.jpg" price={450}></Product>
      <Product name="MAC" image="./img/03_mac.jpg" price={300}></Product>
    </div>
  );
}
