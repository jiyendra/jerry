import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    
                    <div className="contact_form">
                        <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mt_100 mb_40">Leave a Message</h2>
                        <form action="contact_process.php" className="contact_form_box" method="post" id="contactForm" noValidate="novalidate">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" id="name" name="name" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <input type="text" id="subject" name="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter Your Message . . ." defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn_three">Send Message</button>
                        </form>
                        <div id="success">Your message succesfully sent!</div>
                        <div id="error">Opps! There is something wrong. Please try again</div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ContactInfo;
