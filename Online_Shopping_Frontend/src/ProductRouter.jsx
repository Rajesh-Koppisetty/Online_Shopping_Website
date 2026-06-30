import { useParams } from "react-router-dom";
import data from "/db.json";

function ProductRouter() {
  const { id } = useParams();

  const allProducts = [
    ...data.products,
    ...data.BestOffers,
    ...data.NewGoods,
    ...data.AppleShoppingEvent,
    ...data.HomeApplication
  ];

  const product = allProducts.find((item) => item.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
   <>
   <div className="row m-5">

    <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt=""
            height={400}
            width={400}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>{product.title}</h1>
            <h4 className="text-primary">Rs {product.price}</h4>
            <p>{product.description}</p>

            
            </div>
            </div>
   </div>
   </>
  );
}

export default ProductRouter;