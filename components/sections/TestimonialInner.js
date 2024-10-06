import React from 'react';
const data = [
    {
        img : "testi1-1.jpg",
        reason : "Great Service",
        text : "Build and implement innovative, profitable and sustainable products and services that help",
        title : "Mark Wooden",
        desig : "Admin",
    },
    {
        img : "testi1-2.jpg",
        reason : "Great Service",
        text : "Build and implement innovative, profitable and sustainable products and services that help",
        title : "Mark Wooden",
        desig : "CEO, Sotech",
    },
    {
        img : "testi1-3.jpg",
        reason : "Great Service",
        text : "Build and implement innovative, profitable and sustainable products and services that help",
        title : "Ronal Bryan",
        desig : "CEO, Sotech",
    }
]

const TestimonialGrid = () => {
    return (
        <>
              <section className="testimonial-section pb-90">
		        <div className="bg bg-image" style={{backgroundImage: `url(images/background/5.jpg)`}} />
                <div className="auto-container">
                    <div className="row">
                        {/* Testimonial Column */}
                        {data.map((item, testimonialInner) => (
                        <div key={testimonialInner} className="col-lg-4 col-sm-6">
                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <figure className="thumb"><img src={`images/resource/${item.img}`} alt="" priority /></figure>
                                    <h5 className="reason">{item.reason}</h5>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="text">{item.text}</div>
                                    <div className="info-box">
                                        <h6 className="name">{item.title}</h6>
                                        <span className="designation">{item.desig}</span>
                                    </div>
                                    <div className="icon-quote-2" />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialGrid;