import React from 'react';
import TeamSliderOne from '../../slider/TeamSliderOne'

export default function Home4_Section10() {
    return (
        <>

            {/* <!-- Team Section --> */}
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">OUR TEAM MATE</span>
                        <h2>Experts Ready to Served</h2>
                    </div>

                    <div className="outer-box">
                        <TeamSliderOne />
                    </div>
                </div>
            </section>
            {/* <!-- End Team Section --> */}

        </>
    )
}
