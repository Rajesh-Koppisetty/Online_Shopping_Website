import data from "/db.json";
import { useNavigate } from "react-router-dom";

function SearchResults({ search }) {
  const navigate = useNavigate();

  const allProducts = [
    ...(data.products || []),
    ...(data.BestOffers || []),
    ...(data.NewGoods || []),
    ...(data.AppleShoppingEvent || []),
    ...(data.HomeApplication || [])
  ];

  const normalizedProducts = allProducts.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description || "",
    price: item.price || "",
    image: item.image || item.images || ""
  }));

  const filteredProducts = normalizedProducts.filter((item) => {
    const text = `${item.title || ""} ${item.description || ""}`.toLowerCase();
    return text.includes((search || "").toLowerCase());
  });

  if (!search) return null;

  return (
    <div className="container mt-4">
      <h4>Search Results for "{search}"</h4>

      {filteredProducts.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="border p-2 mb-2">
            <h5
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.title}
            </h5>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;