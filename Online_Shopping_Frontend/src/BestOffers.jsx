import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BestOffers() {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/BestOffers")
            .then(res => res.json())
            .then(data => setItem(data))


    }, [])
    return (
        <>
            <div className="mt-5 mx-5">
                <div className="d-flex justify-content-between">
                    <h1 className="mb-3">The Best Offers</h1>
                    <div>
                        <button className="rounded-5 border border-1 border-primary py-1 ">More Products</button>
                    </div> 
                </div>

                <div className="d-flex justify-content-center">
                    {item.map((products) => {
                        return (
                            <>
                                <div className="card p-3 me-5  py-4 text-start">
                                    
                                        <div className="p-4">
                                            <img src={products.image} alt="" height={100} width={150} />
                                        </div>

                                        <h6>{products.title}</h6>
                                        <p>{products.subtitle}</p>
                                        <p className="text-primary">Rs {products.price}</p>
                                        
                                        <Link to={`/bestoffers/${products.id}`}>
                                        <div>
                                            <button type="button" class="btn btn-primary">{products.button}</button>
                                        </div>
                                        

                                    </Link>
                                </div>

                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
export default BestOffers