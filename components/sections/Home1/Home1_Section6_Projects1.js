import React from 'react';
import ProjectsSliderOne from '../../slider/ProjectsSliderOne';

export default function Home1_Section6() {
    return (
        <>

        {/* <!-- Project Section --> */}
        <section className="project-section pb-0" id="projects" style={{backgroundImage: 'url(./images/icons/shape-tm-2.jpg)'}}>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title">Recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Business Projects</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">Modern consumers heavily rely on digital platforms to research products before making purchasing decisions. Studies show that 51% of consumers use Google to research brands.</div>
                        </div>
                    </div>
                </div>

                <div className="carousel-outer">
                    <ProjectsSliderOne/>
                </div>
            </div>
        </section>
        {/* <!--End Project Section --> */}

        </>
    )
}
