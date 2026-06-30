import React from "react";
import mainImg from "./assets/stores/main.webp"
import img1 from "./assets/stores/img1.webp"
import img2 from "./assets/stores/img2.webp"
import img3 from "./assets/stores/img3.webp"
import img4 from "./assets/stores/img4.webp"
function Stores(){
    return(
        <>
        <section className="bg-light">
        <section className="bg-primary text-white p-4 m-5 rounded-3">
            
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h1>Visit Our Stores</h1>
                    <p>You can receive an order from us, find many products with unique discounts, and also, if necessary, contact the service center.</p>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="border border-2 border-white rounded-3 p-3">
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            <h6>Convenient Store</h6>

                            </div>
                            

                        </div>
                        <div className="col-md-4 ">
                             <div className="border border-2 border-white rounded-3 p-3">
                                <div>
                                    <i class="fa-solid fa-shop"></i>
                            <h6>Delivery Point</h6>

                                </div>
                            
                            </div>

                        </div>
                        <div className="col-md-4">
                             <div className="border border-2 border-white rounded-3 p-3">
                            <i class="fa-solid fa-gear"></i>
                            <h6>Service Center</h6>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={mainImg} alt="" />

                </div>

            </div>
        </section>

        <section className="m-5 bg-white rounded-3 p-3">
            <div className="p-3">
                <h3>Online Store of Household Appliances and Electronics</h3>
                <p>The online store of equipment and electronics is one of the leading online stores. The band was released in 25 volumes. During this time, our team sent 228 cypemapkets and managed to create a powerful, fast-working online store. The range of online supply points is huge and covers all company categories available for convenience stores.</p>
                <p>In 2019, we presented a new border policy strategy that covers all aspects of the company’s activities – corporate style, delivery, and consultant work.</p>

            </div>
            <div className="row p-3">
                <div className="col-md-3 parent-stores">
                    <img src={img1} alt="" className="rounded-3"/>
                    <div className="child-stores">
                        <h2>Broadway Store</h2>
                        <button type="button" class="btn btn-primary">View Store</button>
                    </div>

                </div>
                <div className="col-md-3 parent-stores">
                    <img src={img2} alt="" className="rounded-3"/>
                    <div className="child-stores">
                        <h2>Valencia Store</h2>
                        <button type="button" class="btn btn-primary">View Store</button>
                    </div>

                </div>
                <div className="col-md-3 parent-stores">
                    <img src={img3} alt="" className="rounded-3" />
                    <div className="child-stores">
                        <h2>Emeryville Store</h2>
                        <button type="button" class="btn btn-primary">View Store</button>
                    </div>

                </div>
                <div className="col-md-3 parent-stores">
                    <img src={img4} alt="" className="rounded-3"/>
                    <div className="child-stores">
                        <h2>Alameda Store</h2>
                        <button type="button" class="btn btn-primary">View Store</button>
                    </div>

                </div>

            </div>
            <div className="p-3">
                <h5>A wonderful serenity has taken possession of my entire soul</h5>
                <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
                <h5>When, while the lovely valley teems with vapour around me</h5>
                <p>little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!</p>
                <h5>Online shopping that really is convenient</h5>
                <p>The car parts and everything you may need for repairs and regular maintenance of your vehicle are listed in a convenient and comprehensive catalogue. The innovative search – by name, item ID or OEM number will help you to find automotive parts easily.</p>
                <p>You can choose whichever payment method is most convenient for you from among the various options. Have any questions? Our support service specialists are always on hand to help. Picking and buying car parts with us is an enjoyable experience!</p>

            </div>
        </section>
        <section className="m-5 bg-white p-3 rounded-3 ">
            <div className="p-3 ">
                <h3>Online store of household appliances and electronics</h3>
                <p>Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.</p>
                <p>A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.</p>
            </div>

        </section>
        </section>

        </>
    )
}
export default Stores