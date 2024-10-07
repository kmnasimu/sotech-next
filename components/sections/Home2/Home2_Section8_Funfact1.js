import React from 'react';
import Funfact from '../../elements/Funfact';

export default function Home2_Section8() {
    return (
        <>

            {/* <!-- Fun Fact Section --> */}
            <section className="fun-fact-section-three style-two" style={{backgroundImage: 'url(images/icons/shape-tm-5.png)'}}>
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <Funfact/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Fun Fact Section --> */}


        </>
    )
}
