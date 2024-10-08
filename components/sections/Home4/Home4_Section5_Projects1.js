import React from 'react';
import ProjectsSliderFour from '../../slider/ProjectsSliderFour';


export default function Home4_Section4() {
    return (
        <>

        <section className="project-section-five" id="projects">
            <div className="auto-container">
                <div className="sec-title light">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title">recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Tech Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">We provide a diverse array of systems, each tailored to stream line your operations and enhance productivity. Whether you require assistance with data process automation.</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    <ProjectsSliderFour/>   
                </div>
            </div>
        </section>

        </>
    )
}
