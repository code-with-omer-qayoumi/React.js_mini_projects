import React from "react";
import "./Product.css";
export default function Product(props) {
  return (
    <div>
      <h2>Product</h2>
      <div className="card">
        <img src={props.image} alt="loptop" />
        <h1>{props.name}</h1>
        <p className="pc_price">${props.price}</p>
        <p className="pc_desc">
          It is the best loptop in 2020 It is the best loptop in 2020 It is the
          best loptop in 2020
        </p>
        <p>
          <button>Add to card</button>
        </p>
      </div>
    </div>
  );
}
