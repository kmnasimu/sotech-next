import React from 'react';
import Funfact from '../../elements/Funfact';

export default function Home1_Section8() {
    return (
        <>

            {/* <!-- Fun Fact Section --> */}
            <section className="fun-fact-section-three" style={{ backgroundImage: 'url(images/background/7.jpg)' }}>
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <Funfact />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Fun Fact Section --> */}

        </>
    )
}
