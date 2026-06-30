import React, { useEffect, useState } from "react";
import rightside from "./assets/MicroSoft/microimage.webp"
import acer from "./assets/MicroSoft/acer.jpg";
import cpu from "./assets/MicroSoft/cpu.avif";
function MicroSoft() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/MicroSoft")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <section className="py-5 mx-5 card my-5">
                <div className="row">
                    <div className="col-md-12 p-2 ">
                        <div className="row flex-row ">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <img src={rightside} alt="" />

                            </div>
                            <div className="col-md-6 p-3">
                                <h1>Microsoft Accessories</h1>
                                <p>Personalize your Surface Pro with Microsoft branded accessories. In the presence of many colors for every taste.</p>
                                <div className="d-flex">
                                    <button className="me-3 rounded">Keyboards</button>
                                    <button className="me-3  rounded">Surface Pen</button>
                                    <button className="me-3  rounded">Mices</button>
                                    <button className="  rounded">Headphones</button>
                                </div>


                            </div>

                        </div>


                        <div className="row d-flex justify-content-center align-items-center">
                            {products.map((item) => {
                                return (
                                    <>
                                        <div className="col-md-3 me-5 card flex-row mt-5 py-3 px-0 d-flex justify-content-center align-items-center">
                                            <div>
                                                <h6>{item.title}</h6>
                                                <p>{item.subtitle}</p>
                                                
                                                <button type="button" class="btn btn-primary">{item.button}</button>

                                            </div>
                                            <div className="p-3 d-flex justify-content-center align-items-center">
                                                <img src={item.image} alt="" height={100} width={100} />
                                            </div>

                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                    


                </div>
            </section>

        </>
    )
}
export default MicroSoft