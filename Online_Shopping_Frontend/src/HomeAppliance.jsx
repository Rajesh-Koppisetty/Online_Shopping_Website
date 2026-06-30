import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HomeAppliance() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/HomeApplication")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <>
            <section className=" py-5 mx-5">
                <div className="row d-flex justify-content-center">
                    <h1 className="mb-4">Home Appliance</h1>
                    {products.map((item) => {
                        return (
                            <>
                                <div className="col-md-2 card p-3 me-5 py-5">
                                    <img src={item.image} alt="" height={200} width={200} className="p-3"/>
                                    <h6>{item.title}</h6>
                                    <p>{item.subtitle}</p>
                                    <p className="text-primary">Rs {item.price}</p>
                                    <Link to={`/homeappliance/${item.id}`}>
                                    <button type="button" class="btn btn-primary">{item.button}</button>
</Link>
                                </div>

                            </>
                        )
                    })}

                </div>
            </section>
        </>
    )
}
export default HomeAppliance