import React from 'react';
import Link from 'next/link';
import TestimonialsSliderOne from '../../slider/TestimonialsSliderOne';

export default function Home1_Section7() {
    return (
        <>

        {/* <!-- Testimonial Section --> */}
        <section class="testimonial-section-five">
            <div class="auto-container">
                <div class="sec-title text-center">
                    <span class="sub-title">Client’s Testimonials</span>
                    <h2>Here are some clients <br />feedbacks</h2>
                </div>

                <div class="outer-box">
                    <TestimonialsSliderOne/>
                </div>
            </div>
        </section>
        {/* <!-- End Testimonial Section --> */}

        </>
    )
}
