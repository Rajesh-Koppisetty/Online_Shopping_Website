import React, { useEffect, useState } from "react";
import nothing from  "./assets/NewGoods/nothing.png";
import { Link } from "react-router-dom";


function NewGoods() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/NewGoods")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <section className="py-5 mx-5">
            <div className="row d-flex">
                <div className="d-flex justify-content-between
">
                <h1 className="mb-4">New Goods</h1>
                <div>
                <button className="rounded-5 border border-1 border-primary py-1 ">More Products</button>
                </div>
                </div>
                
                <div className="col-md-3 bg-dark d-flex align-center new-good-side-parent me-3">
                    <img src={nothing} alt="" height={350} width={350} className="py-4 pt-5 p-3"/>
                    <div className="new-good-child text-center">
                        <p>AT A GOOD PRRICE</p>
                        <h5>Nothing Phone 1</h5>
                        
                        
                         <button type="button" class="btn btn-primary">Buy Now</button>
                        
                    </div>
                </div>
                
                {products.map((item)=>{
                    return(
                        <>
                        
                        <div className="col-md-2 card me-3 mt-5">
                            <div className="p-5 bg-teal-dark">
                                <img src={item.images} alt="" height={100} width={100}/>
                            </div>
                            
                            <h5>{item.title}</h5>
                            <p>{item.subtitle}</p>
                            <p className="text-primary">Rs {item.price}</p>
                            <Link to={`/newgood/${item.id}`}>
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
export default NewGoods