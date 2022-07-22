import React from 'react';

const FunFactArea = () => {
    return (
        <>
            <section className="fun_fact_area fun_fact_area_two">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-7 col-md-6">
                            <div className="fact_author_img fact_author_img_two text-right">
                                <div className="square_box box_three" />
                                <div className="square_box box_four" />
                                <img className="wow fadeInUp" data-wow-delay="0.3s" src={require('../assets/img/home8/fact.png')} alt="fact" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="fun_fact_content">
                                <h1 className="t_color3 f_p f_700 mb_20">Safe & Secure</h1>
                                <p className="f_400 f_size_15 l_height28 mb_40">We understand the sensitivity of Health Records and that’s why we use state of the art Blockchain technology to keep data safe and secure. Blockchain makes us one of the most secure systems in the world. </p>
                                <div className="d-flex">
                                    <div className="fact_item">
                                        <h1 className="t_color3"><span>7</span>M+</h1>
                                        <p className="mb-0">Users <br />Blockchain Technology</p>
                                    </div>
                                    <div className="fact_item pl_100">
                                        <h1 className="t_color3"><span>100</span>K</h1>
                                        <p className="mb-0">Join <br />every month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FunFactArea;
