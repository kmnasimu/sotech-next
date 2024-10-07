import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

export default function Home2_Section7() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {/* <!-- Offer Section Two --> */}
            <section class="offer-section-two">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- Content Column --> */}
                        <div class="content-column col-lg-6 col-md-12">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <span class="sub-title">Welcome to tech</span>
                                    <h2>Your Success with the Best IT Solutions</h2>
                                </div>
                                <div class="info-box">
                                    <span class="count">01</span>
                                    <div class="text">We continuously endeavour to deliver our utmost best to customers in our City.</div>
                                </div>
                                <div class="info-box">
                                    <span class="count">02</span>
                                    <div class="text">We continuously endeavour to deliver our utmost best to customers in our City.</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="image-box">
                                    <figure class="image"><img src="images/resource/image-6.jpg" alt="" /></figure>
                                    <div class="video-box wow fadeIn">
                                        <h4 class="title">Watch our video</h4>
                                        <img class="arrow-icon" src="images/icons/icon-arrow.png" alt="" />
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
