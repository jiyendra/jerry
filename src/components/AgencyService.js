import React from 'react';

const AgencyService = () => {
    return (
        <>
            <section className="agency_service_area bg_color">
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">What HECOD?</h2>
                    <div className="row mb_30">
                        <div className="col-lg-4 col-sm-6">
                            <div className="p_service_item agency_service_item pr_70 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src={require('../assets/img/home4/icon_shape1.png')} alt="shape" />
                                    <i className="ti-stats-up" />
                                </div>
                                <h5 className="f_600 f_p t_color3">Analysis</h5>
                                <p>We analyze your business requirements and customize the product accordingly.</p>
                                <p className="mb-0"><a href="read">Read More</a><i className="ti-arrow-right" /></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="p_service_item agency_service_item pl_20 pr_70 wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="icon">
                                    <img src={require('../assets/img/home4/icon_shape2.png')} alt="shape" />
                                    <i className="ti-layout-grid2" />
                                </div>
                                <h5 className="f_600 f_p t_color3">Strategy</h5>
                                <p>HECOD works like consultants to manage your needs to help you expand your business.</p>
                                <p className="mb-0"><a href="read">Read More</a><i className="ti-arrow-right" /></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="p_service_item agency_service_item pl_20 pr_70 wow fadeInLeft" data-wow-delay="0.4s">
                                <div className="icon">
                                    <img src={require('../assets/img/home4/icon_shape3.png')} alt="shape" />
                                    <i className="ti-gallery" />
                                </div>
                                <h5 className="f_600 f_p t_color3">Data Security</h5>
                                <p>Healthcare Data is sensitive and HECOD has it covered. Patient owns the data.</p>
                                <p className="mb-0"><a href="read">Read More</a><i className="ti-arrow-right" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AgencyService;
