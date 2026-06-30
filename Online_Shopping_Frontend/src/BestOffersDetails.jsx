import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BestOffersDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);

  /* ---------- FETCH PRODUCT ---------- */
  useEffect(() => {
    fetch(`http://localhost:5000/BestOffers/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  /* ---------- ADD TO CART ---------- */
  const addToCart = () => {
    if (count === 0) {
      alert("Please select quantity");
      return;
    }

    const cartItem = {
      ...product,
      quantity: count,
      cartId: Date.now()   // ✅ UNIQUE ID (IMPORTANT)
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then(() => {
        alert("Added to cart");
        setAdded(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <div className="row p-5">

        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt=""
            className="img-fluid"
            height={300}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4>{product.subtitle}</h4>
          <h3 className="text-primary">Rs {product.price}</h3>
          <p>{product.description}</p>

          {/* QUANTITY */}
          <div className="mb-3">
            <button onClick={() => setCount(c => Math.max(c - 1, 0))}>-</button>
            <span className="mx-3">{count}</span>
            <button onClick={() => setCount(c => c + 1)}>+</button>
            
          </div>

          {/* ADD TO CART */}
          <button
            className={`btn ${added ? "btn-dark" : "btn-primary"}`}
            onClick={addToCart}
            disabled={added}
          >
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
          <Link to="/cart">
          <button type="button" class="btn btn-primary ms-3">Go To Cart</button>
          </Link>

          <br /><br />
          
        </div>

      </div>
    </>
  );
}

export default BestOffersDetails;
