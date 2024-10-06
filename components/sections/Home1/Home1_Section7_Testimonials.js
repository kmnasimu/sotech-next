import React from 'react';
import Link from 'next/link';
import TestimonialsSliderOne from '../../slider/TestimonialsSliderOne';

export default function Home1_Section7() {
    return (
        <>

        {/* <!-- Testimonial Section --> */}
        <section className="testimonial-section-five">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Client’s Testimonials</span>
                    <h2>Here are some clients <br />feedbacks</h2>
                </div>

                <div className="outer-box">
                    <TestimonialsSliderOne/>
                </div>
            </div>
        </section>
        {/* <!-- End Testimonial Section --> */}

        </>
    )
}
