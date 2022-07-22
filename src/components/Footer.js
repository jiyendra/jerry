import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer_area footer_area_four f_bg">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="f_widget company_widget pr_20">
                                    <a href="index.html" className="f-logo"><img src={require('../assets/img/logo.png')} srcSet="img/logo2x.png 2x" alt="logo" /></a>
                                    <p className="f_400 f_p f_size_20 l_height28 mt_30 mb_40">Power your practice with digitization.</p>
                                    <img src={require('../assets/img/home2/overview.png')} alt="overview" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_600 t_color2 f_size_18 mb_40">Company</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="/jobs">Jobs</Link></li>
                                        <li><Link to="/news">News</Link></li>
                                        <li><Link to="/term-condition">Term Condition</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget">
                                    <h3 className="f-title f_600 t_color2 f_size_18 mb_40">Solutions</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="project-menegment">Electronic Health Records</Link></li>
                                        <li><Link to="agile">Practice Management Software</Link></li>
                                        <li><Link to="task-management">Consumer Health App</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social_widget">
                                    <h3 className="f-title f_600 t_color2 f_size_18 mb_40">Follow Us</h3>
                                    <div className="f_social_icon">
                                        <a href="h"><i className="ti-facebook" /></a>
                                        <a href="h"><i className="ti-twitter-alt" /></a>
                                        <a href="h"><i className="ti-vimeo-alt" /></a>
                                        <a href="h"><i className="ti-pinterest" /></a>
                                    </div>
                                    <div className="widget-wrap">
                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Email:</span> <a href="mailto:info@hecod.com" className="f_400">info@hecod.com</a></p>
                                        <p className="f_400 f_p f_size_15 mb-0 l_height34"><span>Phone:</span> <a href="tel:9818086212" className="f_400">+91-9818086212</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400">Copyright © 2020 <a href="hecod">Hecod</a></p>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6">
                                <div className="f_social_icon_two text-center">
                                    <a href="h"><i className="ti-facebook" /></a>
                                    <a href="h"><i className="ti-twitter-alt" /></a>
                                    <a href="h"><i className="ti-vimeo-alt" /></a>
                                    <a href="h"><i className="ti-pinterest" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <ul className="list-unstyled f_menu text-right">
                                    <li><Link to="/term-condition">Terms & Conditions</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/stripe">Stripe</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
