import React, { useEffect, useState } from "react";
import sideimage from "./assets/AppleShoppingEvent/applelist.png";
import { Link } from "react-router-dom";

function AppleButton() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/AppleShoppingEvent")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <section className="apple-section py-5 mx-5">
        {/* TOP SECTION */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={sideimage} alt="Apple Event" className="img-fluid" />
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1>Apple Shopping Event</h1>
              <h5 className="text-muted">
                Hurry and get discounts on all Apple devices up to 20%
              </h5>
              <button className="btn btn-primary mt-2">
                Go Shopping
              </button>
            </div>
          </div>
        </div>

       
        <div className="row justify-content-center">
          {products.map((item) => (
            <div className="col-md-2 mb-3" key={item.id}>
              <Link
                to={`/applebutton/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card d-flex flex-row align-items-center p-2 py-3">
                    <div className="p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    height={80}
                    width={80}
                    
                  />
                  </div>
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <h6 className="text-primary">₹{item.price}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AppleButton;
