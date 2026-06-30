import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AppleButtonDetails(){
    const [product, setProduct] = useState(null);

    const[products,setProducts]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/AppleShoppingEvent/${id}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[id])
    if (!product || !product.title) return null;  // 🔥 KEY LOGIC
    return(
        <>
        <div className="row p-5 mx-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={products.image} alt="" height={400} width={400}/>

            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                <h1>{products.title}</h1>
                <h4 className="text-primary">Rs {products.price}</h4>
                <p>⭐ {products.rating} / 5</p>
                <p>{products.description}</p>
                <button type="button" class="btn btn-primary">{products.button}</button>
</div>
            </div>
           

        </div>
        
        </>
    )
}
export default AppleButtonDetails