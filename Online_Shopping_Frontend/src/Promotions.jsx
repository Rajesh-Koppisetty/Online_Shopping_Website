import React, { useEffect, useState } from "react";

function Promotions() {
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/promotions")
            .then(res => res.json())
            .then(data => setEvent(data))

    }, [])
    return (
        <>
            <section className="mx-5 py-4">
                <div>
                    <p>CLOTHES THAT YOU LIKE</p>
                    <h3>Promotions</h3>
                    <div className="row">
                        {event.map((item) => {
                            return (
                                <>

                                    <div className="col-md-4 parent-promotion mb-4">
                                        <div>
                                            <img src={item.image} alt="" className=" img-fluid rounded-3" />
                                            <div className="child-promotion">
                                            <h4>{item.date}</h4>
                                            <h4>{item.title}</h4>
                                            </div>

                                        </div>


                                    </div>



                                </>
                            )
                        })}
                    </div>
                    <div className="card p-3 my-3">
                        <h3>Online store of household appliances and electronics</h3>
                        <p>Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.</p>
                        <p>A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse. Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.</p>
                    </div>

                </div>
            </section>



        </>
    )
}
export default Promotions