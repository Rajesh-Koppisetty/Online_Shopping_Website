import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  /* ---------- FETCH CART ---------- */
  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then(res => res.json())
      .then(data => setCartItems(data));
  }, []);

  /* ---------- REMOVE ITEM ---------- */
  const removeItem = (cartId) => {
    fetch(`http://localhost:5000/cart/${cartId}`, {
      method: "DELETE"
    }).then(() => {
      setCartItems(prev =>
        prev.filter(item => item.cartId !== cartId)
      );
    });
  };

  /* ---------- TOTAL COST (FIXED) ---------- */
  const totalCost = cartItems.reduce((sum, item) => {
    const price = Number(item.price?.replace(/,/g, "")) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  return (
    <div className="container mt-5">
      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <h4>Cart is empty</h4>
      ) : (
        <>
          {cartItems.map(item => {
            const itemPrice = Number(item.price.replace(/,/g, ""));
            return (
              <div key={item.cartId} className="row border p-3 mb-3">

                <div className="col-md-3">
                  <img src={item.image} alt="" className="img-fluid" />
                </div>

                <div className="col-md-4">
                  <h5>{item.title}</h5>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: Rs {item.price}</p>
                </div>

                <div className="col-md-3 fw-bold">
                  Rs {itemPrice * item.quantity}
                </div>

                <div className="col-md-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item.cartId)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            );
          })}

          <h3 className="text-end mt-4">
            Total Cost:{" "}
            <span className="text-success">
              Rs {totalCost.toLocaleString("en-IN")}
            </span>
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;
