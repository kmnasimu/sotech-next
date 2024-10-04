import React from 'react';
import TeamSliderOne from '../../slider/TeamSliderOne'

export default function Home1_Section10() {
    return (
        <>

            {/* <!-- Team Section --> */}
            <section class="team-section">
                <div class="auto-container">
                    <div class="sec-title">
                        <span class="sub-title">OUR TEAM MATE</span>
                        <h2>Experts Ready to Served</h2>
                    </div>

                    <div class="outer-box">
                        <TeamSliderOne />
                    </div>
                </div>
            </section>
            {/* <!-- End Team Section --> */}

        </>
    )
}
