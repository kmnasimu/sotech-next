import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

export default function Home1_Section9() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {/* <!-- Offer Section --> */}
            <section class="offer-section-five">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- Content Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="image-box">
                                    <figure class="image"><img src="images/resource/image-4.jpg" alt="" /></figure>
                                    <div class="caption-box">
                                        <div class="icon-box">
                                            <a onClick={() => setOpen(true)} className="play-now lightbox-image" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a>
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                                        </div>
                                        <div class="title-box">
                                            <h5 class="title">Professional IT Services you Can trust</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Column --> */}
                        <div class="content-column col-lg-6 col-md-12">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <span class="sub-title">WHY CHOOSE US</span>
                                    <h2>Our mission is provide Widespread access.</h2>
                                    <div class="text">Our passionate professionals craft tailored, high-quality systems to meet your unique needs and deliver effective solutions.</div>
                                </div>
                                <div class="info-box">
                                    <i class="icon flaticon-business-036-idea" />
                                    <h4 class="title">For Your Specific Industry We Have Smart Idea For Business goal.</h4>
                                </div>
                                <ul class="list-style-two">
                                    <li><i class="fa fa-check-circle" /> Mounting System for Ground Installation</li>
                                    <li><i class="fa fa-check-circle" /> Making this the first true generator on the Internet</li>
                                    <li><i class="fa fa-check-circle" /> Various versions have evolved over the years</li>
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
