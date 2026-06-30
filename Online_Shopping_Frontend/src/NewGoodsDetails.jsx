import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function NewGoodsDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);

  // 📦 Fetch product
  useEffect(() => {
    fetch(`http://localhost:5000/NewGoods/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  // 🛒 Add to cart
  const addToCart = () => {
    if (count === 0) {
      alert("Select quantity");
      return;
    }

    fetch("http://localhost:5000/cart")
      .then(res => res.json())
      .then(cart => {
        const item = cart.find(i => i.id === product.id);

        if (item) {
          // update quantity
          fetch(`http://localhost:5000/cart/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              quantity: item.quantity + count
            })
          }).then(() => alert("Quantity updated"));
        } else {
          // add new item
          fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...product,
              quantity: count
            })
          }).then(() => alert("Added to cart"));
        }

        setAdded(true);
      });
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="row p-5 mx-5">
      
      {/* IMAGE */}
      <div className="col-md-6 text-center">
        <img src={product.images} alt="" width="400" />
      </div>

      {/* DETAILS */}
      <div className="col-md-6">
        <h1>{product.title}</h1>
        <h4>{product.subtitle}</h4>
        <h4 className="text-primary">Rs {product.price}</h4>
        <p>⭐ {product.rating} / 5</p>
        <p>{product.description}</p>

        {/* Quantity */}
        <div>
          <button onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}>-</button>
          <span className="mx-3">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        {/* Add to Cart */}
        <button
          className={`btn ${added ? "btn-dark" : "btn-primary"} mt-3`}
          onClick={addToCart}
          disabled={added}
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>

        {/* Go to Cart */}
        <Link to="/cart">
          <button className="btn btn-primary ms-3 mt-3">
            Go To Cart
          </button>
        </Link>

      </div>
    </div>
  );
}

export default NewGoodsDetails;