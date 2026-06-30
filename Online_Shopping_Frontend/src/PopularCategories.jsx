import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularCategories() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div className="mx-5">
      <h1 className="mb-4">Popular Categories</h1>

      <div className="d-flex gap-4 justify-content-center">
        {item.map((products) => (
          <Link
            to={`/popularcategories/${products.id}`}
            style={{ textDecoration: "none" }}
          >
            <div key={products.id} className="text-center card p-4">
              <img
                src={products.image}
                alt={products.title}
                height={120}
                width={140}
              />
              <h5 className="mt-2">{products.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
