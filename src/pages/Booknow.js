import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import AgencyService from '../components/AgencyService';
import { Link } from 'react-router-dom';

const Booknow = () => {
    useEffect(() => {
        let scripts = [
            { src: "js/jquery-3.2.1.min.js" },
            { src: "vendors/wow/wow.min.js" },
            { src: "vendors/owl-carousel/js/owl.carousel.min.js" },
            { src: "js/main.js" }
        ]
        //Append the script element on each iteration
        // eslint-disable-next-line array-callback-return
        scripts.map(item => {
            const script = document.createElement("script");
            script.src = item.src;
            script.async = true;
            document.body.appendChild(script);
        })
    }, [])
    return (
        <div>
            <div className="body_wrapper">
                <Header />
                <Breadcrumb breadcrumb="Book Now"
                tagOne="HECOD is available at one click."
                tagTwo="Make payments through our website to get access to HECOD EHR and Practice management Software to make your medical practice easy and comfortable at an affordable price."
                 />
                <AgencyService />
                <section className="payment_action_area">
                    <div className="clients_bg_shape_bottom" />
                    <div className="container">
                        <div className="payment_action_content text-center wow fadeInUp" data-wow-delay="0.2s">
                            <div className="pay_icon">
                                <div className="icon_shape" />
                                <img className="icon_img" src={require('../assets/img/home9/icon2.png')} alt="payment icon" />
                            </div>
                            <h2 className="f_p t_color f_700">Join 200 million users worldwide.</h2>
                            <p>All you need is an email address or mobile phone number to transfer money.</p>
                            <a href="#" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Pay With Stripe</a>
                            <Link></Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default Booknow;