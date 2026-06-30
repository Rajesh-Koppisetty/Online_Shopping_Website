import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PopularCategoriesDetails() {

  const { id } = useParams();

  // ✅ should be object
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);

  /* ---------- FETCH PRODUCT ---------- */
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  /* ---------- SMART ADD TO CART ---------- */
  const addToCart = async () => {
    if (count === 0) {
      alert("Please select quantity");
      return;
    }

    try {
      // 🔍 check existing cart item
      const res = await fetch("http://localhost:5000/cart");
      const cartData = await res.json();

      const existingItem = cartData.find(
        item => item.id === product.id
      );

      if (existingItem) {
        // ✅ update quantity
        await fetch(`http://localhost:5000/cart/${existingItem.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            quantity: existingItem.quantity + count
          })
        });

        alert("Cart quantity updated");
      } else {
        // ✅ add new item
        const cartItem = {
          ...product,
          quantity: count
        };

        await fetch("http://localhost:5000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(cartItem)
        });

        alert("Added to cart");
      }

      setAdded(true);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="row m-5">

        {/* IMAGE */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt=""
            height={400}
            width={400}
            className="img-fluid"
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>{product.title}</h1>
            <h4 className="text-primary">Rs {product.price}</h4>
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

export default PopularCategoriesDetails;