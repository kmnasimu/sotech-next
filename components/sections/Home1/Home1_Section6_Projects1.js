import React from 'react';
import ProjectsSliderOne from '../../slider/ProjectsSliderOne';

export default function Home1_Section6() {
    return (
        <>

        {/* <!-- Project Section --> */}
        <section class="project-section pb-0" style={{backgroundImage: 'url(./images/icons/shape-tm-2.jpg)'}}>
            <div class="auto-container">
                <div class="sec-title">
                    <div class="row">
                        <div class="col-lg-7">
                            <span class="sub-title">Recently Completed work</span>
                            <h2>Improve & Enhance the <br/>Business Projects</h2>
                        </div>
                        <div class="col-lg-5">
                            <div class="text">Modern consumers heavily rely on digital platforms to research products before making purchasing decisions. Studies show that 51% of consumers use Google to research brands.</div>
                        </div>
                    </div>
                </div>

                <div class="carousel-outer">
                    <ProjectsSliderOne/>
                </div>
            </div>
        </section>
        {/* <!--End Project Section --> */}

        </>
    )
}
