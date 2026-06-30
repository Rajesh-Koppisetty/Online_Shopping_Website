import React from "react";
import camera from "./assets/camera.jpg"
function Camera(){
    return(
        <>
        <div className="row py-5">
            <div className="col-md-6">
                <img src={camera} alt="" />

            </div>
            <div className="col-md-6 p-5">
                <h1>Canon EOS R50 Mirrorless Camera</h1>
                <p>Canon</p>
                <h4>Rs 35,999</h4>
                <p> A compact and versatile mirrorless camera with a 24.2MP APS-C sensor, DIGIC X processor, and fast Dual Pixel autofocus. Ideal for vloggers and photographers alike, it delivers sharp images and smooth 4K video, with intuitive controls and built-in Wi-Fi/Bluetooth for easy sharing.</p>
                <button type="button" class="btn btn-primary">Add To Cart</button>

            </div>

        </div>

        </>
    )
}
export default Camera