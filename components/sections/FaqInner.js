import React from 'react';
import Accordion from '../elements/Accordion';
import Accordion2 from '../elements/Accordion2';

const Faqs = () => {
    return (
        <>

            {/* FAQ Section */}
            <section className="faqs-section-home1 mt-0 pt-120 pb-60 pb-md-20" style={{backgroundImage: `url(images/background/5.jpg)`}}>
                <div className="auto-container">
                    <div className="row">
                    {/* FAQ Column */}
                    <div className="faq-column col-lg-6">
                        <div className="inner-column">
                            <Accordion />
                        </div>
                    </div>
			        {/* FAQ Column */}
			        <div className="faq-column col-lg-6">
                        <div className="inner-column mb-md-50">
                            <Accordion2 />
                        </div>
			        </div>
                </div>
            </div>
        </section>
        {/* End FAQ Section */}
        </>
    );
};

export default Faqs;