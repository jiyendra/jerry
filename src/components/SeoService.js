import React from 'react';

const SeoService = () => {
    return (
        <>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <div className="seo_sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.3s">
                        <h2>Why HECOD?</h2>
                        <p>HECOD gives medical practitioners freedom to customize our solution according to their needs and works like their virtual strategic consultants to help them grow their business using our secure Practice Management sotware and Electronic Health Record solution.</p>
                    </div>
                    <div className="row seo_service_info">
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={require('../assets/img/seo/icon1.png')} alt="icon1" />
                                <a href="#">
                                    <h4>Analysis</h4>
                                </a>
                                <p>We analyze your business requirements and customize the product accordingly.</p>
                                <a href="#"><i className="arrow_right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={require('../assets/img/seo/icon2.png')} alt="icon2" />
                                <a href="#">
                                    <h4>Strategy</h4>
                                </a>
                                <p>HECOD works like consultants to manage your needs to help you expand your business.</p>
                                <a href="#"><i className="arrow_right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={require('../assets/img/seo/icon3.png')} alt="icon3" />
                                <a href="#">
                                    <h4>Data Security</h4>
                                </a>
                                <p>Healthcare Data is sensitive and HECOD has it covered. Patient owns the data. </p>
                                <a href="#"><i className="arrow_right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center mt_40">
                            <a href="#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default SeoService;
