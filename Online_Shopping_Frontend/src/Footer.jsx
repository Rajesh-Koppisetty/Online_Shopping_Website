import React, { useEffect, useState } from "react";
function Footer(){
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/Footer")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <>
        <section className="mx-5">
            <div className="row">
                {products.map((item)=>{
                    return(
                        <>
                        <div className="col-md-3">
                            <h1>{item.maintitle}</h1>
                            <p>{item.subtitle}</p>
                            <h4>{item.title1}</h4>
                            <p>{item.address}</p>
                            <p>{item.phone}</p>
                            <p>{item.email}</p>
                            <h4>{item.title}</h4>
                            {/* <img src={item.image11} alt="" height={100} width={50}/>
                            <img src={item.image12} alt="" height={100} width={50}/>
                            <img src={item.image13} alt="" height={100} width={50}/>
                            <img src={item.image14} alt="" height={100} width={50}/> */}
                            
                            <p>{item.subtitle1}</p>
                            <p>{item.subtitle2}</p>
                            <p>{item.subtitle3}</p>
                            <p>{item.subtitle4}</p>
                            <p>{item.subtitle5}</p>
                            <p>{item.subtitle6}</p>

                        </div>
                        </>
                    )
                })}

            </div>
        </section>
        </>
    )
}
export default Footer