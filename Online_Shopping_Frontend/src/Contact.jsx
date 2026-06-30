import React from "react";
function Contact() {
    return (
        <>
            <section className="bg-light">
                <section>
                    <div  className=" m-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203289158!2d78.24323460264237!3d17.412281017440698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1767512836785!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hyderabad Map"
                            className="rounded-3"
                        ></iframe>

                    </div>
                </section>
                <section className="m-5 ">
                    <div className="row">
                        <div className="col-md-9 bg-white p-3 rounded-3 me-4">
                            <h3>Get in Touch</h3>
                            <form>
                                <div className="d-flex pb-4">
                                    <input type="text" className="form-control" placeholder="Enter Your First Name"/>
                                    <input type="text" className="form-control" placeholder="Enter Your Last Name"/>

                                </div>
                                <div className="pb-4">
                                    <input type="email" placeholder="Enter Your Email" className="form-control"/>
                                </div>
                                <div className="pb-4">
                                    <textarea name="" id="" className="form-control" rows={10}cols={30}>Message</textarea>

                                </div>
                                <button type="button" class="btn btn-primary">Send Message</button>
                               
                            </form>

                        </div>
                        <div className="col-md-2 ">
                            <div className="bg-white p-3 rounded-3">
                            <h4 className="pb-3">Need a Help?</h4>
                            <div className="d-flex pb-2">
                                <i class="fa-solid fa-phone fs-2 me-3"></i>
                                <p>(208) 555-0112</p>
                            </div>
                            <div className="d-flex pb-2">
                                <i class="fa-brands fa-facebook-messenger fs-2 me-3" style={{color:" #0778ceff"}}></i>
                                <p>Messenger</p>
                            </div>
                            <div className="d-flex pb-2">
                                <i class="fa-brands fa-telegram fs-2 me-3" style={{color: " #1f95efff"}} ></i>
                                <p>Telegram</p>
                            </div>
                            <div className="d-flex pb-2">
                                <i class="fa-solid fa-envelope fs-2 me-3" style={{color:" #FFD43B"}}></i>
                                <p>Example@gmail.com</p>
                            </div>
                            <div>
                                <h4>Subscribe us</h4>
                                <div>
                                 <i class="fa-brands fa-facebook fs-2" style={{color:" #2b9cf3"}}></i>
                                    <i class="fa-brands fa-x-twitter  fs-2"></i>
                                    <i class="fa-brands fa-instagram fs-2" style={{color:" #dd0808"}}></i>
                                   <i class="fa-brands fa-youtube fs-2" style={{color:" #fb2718"}}></i>

                                </div>
                            </div>

                        </div>
                        </div>

                    </div>
                </section>
                <section className="m-5">
                    <div className="bg-white p-3 rounded-3">
                        <h3>Online store of household appliances and electronics</h3>
                        <p>Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.</p>
                        <p>A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.</p>

                    </div>
                </section>
            </section>

        </>
    )
}
export default Contact