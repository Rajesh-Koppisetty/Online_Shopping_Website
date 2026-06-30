import React from "react";
import hero3 from "./assets/hero3.jpg"
function Gaming() {
  return (
    <>
    <div className="row p-5">
    <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
      <img src={hero3} alt="" className="img-fluid" height={400} width={400}/>

    </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div>
        <h1>New Dual Sense</h1>
        <p>For PlayStation</p>
        <h4>Rs 6,999</h4>
        <p>Experience next-gen gaming with immersive haptic feedback and adaptive triggers. The DualSense controller delivers precise control, a built-in microphone, and an ergonomic design for long gaming sessions on PlayStation 5.</p>
        <button type="button" class="btn btn-primary">Add To Cart</button>
      </div>
      </div>
      </div>
    </>
  )
}
export default Gaming