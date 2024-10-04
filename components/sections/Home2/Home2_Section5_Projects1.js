import React from 'react';
import ProjectsSliderTwo from '../../slider/ProjectsSliderTwo';

export default function Home1_Section6() {
    return (
        <>

        {/* <!-- Project Section Three--> */}
        <section className="project-section-three">
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <span className="sub-title">recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Company Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">We provide a diverse array of systems, each tailored to stream line your operations and enhance productivity. Whether you require assistance with data process automation.</div>
                        </div>
                    </div>
                </div>

                <div className="carousel-outer">
                    <ProjectsSliderTwo/>
                </div>
            </div>
        </section>
        {/* <!--End Project Section Three--> */}

        </>
    )
}
