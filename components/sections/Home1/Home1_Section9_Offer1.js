import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

export default function Home1_Section9() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {/* <!-- Offer Section --> */}
            <section className="offer-section-five">
                <div className="auto-container">
                    <div className="row">
                        {/* <!-- Content Column --> */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/image-4.jpg" alt="Image" priority /></figure>
                                    <div className="caption-box">
                                        <div className="icon-box">
                                            <a onClick={() => setOpen(true)} className="play-now lightbox-image" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a>
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                                        </div>
                                        <div className="title-box">
                                            <h5 className="title">Professional IT Services you Can trust</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">WHY CHOOSE US</span>
                                    <h2>Our mission is provide Widespread access.</h2>
                                    <div className="text">Our passionate professionals craft tailored, high-quality systems to meet your unique needs and deliver effective solutions.</div>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-business-036-idea" />
                                    <h4 className="title">For Your Specific Industry We Have Smart Idea For Business goal.</h4>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="fa fa-check-circle" /> Mounting System for Ground Installation</li>
                                    <li><i className="fa fa-check-circle" /> Making this the first true generator on the Internet</li>
                                    <li><i className="fa fa-check-circle" /> Various versions have evolved over the years</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Offer Section --> */}

        </>
    )
}
