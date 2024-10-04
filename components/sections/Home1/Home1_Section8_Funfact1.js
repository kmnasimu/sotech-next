import React from 'react';
import Funfact from '../../elements/Funfact';

export default function Home1_Section8() {
    return (
        <>

            {/* <!-- Fun Fact Section --> */}
            <section class="fun-fact-section-three" style={{ backgroundImage: 'url(images/background/7.jpg)' }}>
                <div class="auto-container">
                    <div class="fact-counter">
                        <div class="row">
                            <Funfact />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Fun Fact Section --> */}

        </>
    )
}
