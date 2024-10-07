import React from 'react';
import ProjectsSliderThree from '../../slider/ProjectsSliderThree';

export default function Home3_Section3() {
    return (
        <>
            	
            <section className="project-section-four" style={{backgroundImage: 'url(images/icons/shape-tm-2.jpg)'}}>
                <div className="auto-container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="sub-title">RECENTLY COMPLATED WORK</span>
                                <h2>Improve & Enhance the <br/>Company Projects</h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="text">We provide a diverse array of systems, each tailored to stream line your operations and enhance productivity. Whether you require assistance with data process automation.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    <ProjectsSliderThree/>
                </div>
            </section>

        </>
    )
}
