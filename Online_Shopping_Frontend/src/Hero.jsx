import React from "react";
import hero1 from "./assets/hero1.jpg"
import hero12 from "./assets/hero12.jpg"
import hero123 from "./assets/hero123.jpg"
import hero2 from "./assets/hero2.jpg"
import hero33 from "./assets/hero33.jpg"
import hero4 from "./assets/hero4.jpg"
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <section>
                <div className="mt-3 mx-5">
                    <div className="row">
                        <div className="col-md-6  hero1-img py-3 mt-1">


                            <div id="carouselExampleCaptions" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={hero1} className="d-block w-100" alt="banner" />

                                        <div className="carousel-caption caption1-top text-start text-center">
                                            <h1>Apple Shopping Event</h1>
                                            <p>Shop great deals on MacBook, iPad, iPhone and more.</p>
                                            <Link to="/applebutton">
                                             <button type="button" class="btn btn-primary">Shop Now</button>
                                        </Link>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <img src={hero12} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption caption2-top d-none d-md-block">
                                            <h2>The New Google Pixel 7</h2>
                                            <p>Shop great deals on MacBook,iPad,iPhone and more.</p>
                                            <button type="button" class="btn btn-primary">Pre-Order Now</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={hero123} class="d-block w-100" alt="..." />
                                        <div class="carousel-caption caption3-top d-none d-md-block">
                                            <h2>Discount on all Smart appliances up to 25%</h2>
                                            <p>Shop great deals on MacBook, iPad,iPhone and more.</p>
                                            <button type="button" class="btn btn-primary">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>


                        </div>
                        <div className="col-md-6 py-4 parent">
                            <img src={hero2} alt="" className="" width={700} height={250} />
                            <div className="child">
                                <h1>Aurora Headset</h1>
                                <Link to="/headset">
                                            <button className="rounded p-2 mx-2">
                                                View Details
                                            </button>
                                        </Link>
                            </div>

                            <div className="row my-4 ">
                                <div className="col-md-6 parent">
                                    <img src={hero33} alt="" width={350} />
                                    <div className="child">
                                        <h5>New Dual Sense</h5>
                                        <p>For PlayStation</p>
                                        

                                        <Link to="/gaming">
                                            <button className="rounded p-2 mx-2">
                                                View Details
                                            </button>
                                        </Link>


                                    </div>

                                </div>
                                <div className="col-md-6 parent">
                                    <img src={hero4} alt="" width={350} />
                                    <div className="child">
                                        <h5>Instant Cameras</h5>
                                        <p>Get photo paper as a gift</p>
                                        <Link to="/camera">
                                            <button className="rounded p-2 mx-2">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero