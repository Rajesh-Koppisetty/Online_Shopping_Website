import React from "react";
import headset from "./assets/headset.jpg"
function Headset(){
    return(
        <>
        <div className="row py-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center py-5">
                <img src={headset} alt="" className="img-fluid" width={400} height={400}/>


            </div>
            <div className="col-md-6 py-5">
                <h1>Logitech</h1>
                <p>HeadSet</p>
                <h4>Rs 9,999</h4>
                <p>The Logitech G435 is an ultra-lightweight wireless gaming headset designed for long gaming sessions and everyday use. Weighing just 165 grams, it delivers exceptional comfort with breathable fabric earcups that stay cool even during extended play. The headset supports dual connectivity through LIGHTSPEED wireless for ultra-low latency gaming and Bluetooth, allowing seamless switching between PC, PlayStation, mobile devices, and tablets.</p>
                <button type="button" class="btn btn-primary">Add To Cart</button>

            </div>

        </div>
        
        </>
    )
}
export default Headset