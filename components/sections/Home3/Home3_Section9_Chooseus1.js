import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ProgressBar from '../../elements/ProgressBar';

export default function Home3_Section9() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <section className="why-choose-us-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">ABOUT OUR COMPANY</span>
                                    <h2>Our goal is to ensure IT Business accessibility.</h2>
                                    <div className="text">System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle" />
                                            <h6 className="title">Happy Customers</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle" />
                                            <h6 className="title">IT World Services</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Complete Project</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <ProgressBar percentage={77} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Happy Clients</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <ProgressBar percentage={50} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="image-box wow fadeInRight">
                                <figure className="image overlay-anim">
                                    <img src="images/resource/why-us-3.jpg" alt="" />                                    
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /></a>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}