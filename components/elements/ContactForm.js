import React from 'react';

const ContactForm = () => {

    return (
        <>

            <form method="post" action="get" id="contact-form">
                <div class="row gx-3">
                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="full_name" placeholder="Your Name" required />
                    </div>

                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="email" name="Email" placeholder="Email Name" required />
                    </div>

                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" name="website" placeholder="Website" required />
                    </div>

                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea name="message" placeholder="Your Comment" required defaultValue={""} />
                    </div>

                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                        <button class="theme-btn btn-style-one bg-dark" type="submit" name="submit-form"><span class="btn-title">GET SOLUTION</span></button>
                    </div>
                </div>
            </form>

        </>
    );
};

export default ContactForm;