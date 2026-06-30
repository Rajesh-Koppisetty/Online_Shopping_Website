import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function HomeApplianceDetails() {

  const { id } = useParams();

  // ✅ product should be object not array
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);

  /* ---------- FETCH PRODUCT ---------- */
  useEffect(() => {
    fetch(`http://localhost:5000/HomeApplication/${id}`)
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
      cartId: Date.now()
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
      <div className="row p-5 mx-5">

        {/* IMAGE */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt=""
            className="img-fluid"
            height={400}
            width={400}
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>{product.title}</h1>
            <h4>{product.subtitle}</h4>
            <h4 className="text-primary">Rs {product.price}</h4>
            <p>⭐ {product.rating} / 5</p>
            <p>{product.description}</p>

            {/* ✅ QUANTITY */}
            <div className="mb-3">
              <button onClick={() => setCount(c => Math.max(c - 1, 0))}>-</button>
              <span className="mx-3">{count}</span>
              <button onClick={() => setCount(c => c + 1)}>+</button>
            </div>

            {/* ✅ ADD TO CART */}
            <button
              className={`btn ${added ? "btn-dark" : "btn-primary"}`}
              onClick={addToCart}
              disabled={added}
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            {/* ✅ GO TO CART */}
            <Link to="/cart">
              <button type="button" className="btn btn-primary ms-3">
                Go To Cart
              </button>
            </Link>

          </div>
        </div>

      </div>
    </>
  );
}

export default HomeApplianceDetails;