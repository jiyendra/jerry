import React from 'react';

const AgencyFeatured = () => {
    return (
        <>
            <section className="agency_featured_area agency_featured_area_two  bg_color">
                <div className="container">
                <div className="seo_sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.3s">
                        <h2>What We Do?</h2>
                        <p>HECOD is working to build highly customizable software for medical practitioners across the globe.<br/>We build software that help your practice smoother with analytics, strategic planning that comes packed with high security in the HECOD Practice Management softwares and HECOD Electronic Health Record Software.</p>
                    </div><div className="features_info feature_info_two">
                        <img className="dot_img" src={require('../assets/img/home8/dot.png')} alt="dot" />
                        <div className="row agency_featured_item flex-row-reverse">
                            <div className="col-lg-6">
                                <div className="agency_featured_img text-right wow fadeInRight" data-wow-delay="0.2s">
                                    <img src={require('../assets/img/home4/work1.png')} alt="work" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="agency_featured_content pr_70 pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="dot"><span className="dot1" /><span className="dot2" /></div>
                                    <img className="number" src={require('../assets/img/home4/icon01.png')} alt="icon" />
                                    <h3>Bringing IT to Healthcare</h3>
                                    <p>Globally healthcare organizations have failed to keep up with IT advancements for decades now. They have to pay more to get little work done thus getting overall costs up.</p>
                                    <p>HECOD plans to bridge this gap between conventional Healthcare practices and modern IT support but bringing in easy to use – personalized Record management Systems for doctors across the globe.!</p>
                                    <a href="icon" className="icon mt_30"><i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row agency_featured_item agency_featured_item_two">
                            <div className="col-lg-6">
                                <div className="agency_featured_img text-right wow fadeInLeft" data-wow-delay="0.2s">
                                    <img src={require('../assets/img/home8/service_item_03.png')} alt="service-item" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="agency_featured_content pl_100 wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="dot"><span className="dot1" /><span className="dot2" /></div>
                                    <img className="number" src={require('../assets/img/home4/icon02.png')} alt="icon" />
                                    <h3>Modernizing your practice</h3>
                                    <p>HECOD enables doctors to have access to modern technologies with an easy to use practice management software integrated with technologies like Artificial Intelligence and Blockchain to keep the data secure..!</p>
                                    <a href="icon" className="icon mt_30"><i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="dot middle_dot"><span className="dot1" /><span className="dot2" /></div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AgencyFeatured;
