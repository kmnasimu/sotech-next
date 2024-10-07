import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

export default function Home2_Section7() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {/* <!-- Offer Section Two --> */}
            <section className="offer-section-two">
                <div className="auto-container">
                    <div className="row">
                        {/* <!-- Content Column --> */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Welcome to tech</span>
                                    <h2>Your Success with the Best IT Solutions</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <div className="text">We continuously endeavour to deliver our utmost best to customers in our City.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <div className="text">We continuously endeavour to deliver our utmost best to customers in our City.</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/image-6.jpg" alt="" /></figure>
                                    <div className="video-box wow fadeIn">
                                        <h4 className="title">Watch our video</h4>
                                        <img className="arrow-icon" src="images/icons/icon-arrow.png" alt="" />
                                        <a onClick={() => setOpen(true)} className="play-now lightbox-image" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a>
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Offer Section --> */}

        </>
    )
}
