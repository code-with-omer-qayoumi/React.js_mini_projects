import "./Product.css";
function Product() {
  return (
    <div>
      <h2>Product Box</h2>
      <div className="card">
        <img src="./wallpaper/01.png" alt="product_01" />
        <h1>Dell D630</h1>
        <p className="price">500$</p>
        <p>
          It is the best loptop in 2020 It is the best loptop in 2020 It is the
          best loptop in 2020
        </p>
        <p>
          <button>Add to box</button>
        </p>
      </div>
    </div>
  );
}
export default Product;
