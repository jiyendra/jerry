import React from 'react';
import {Link} from 'react-router-dom';

const Slider = () => {
    return (
        <>
            <section className="slider_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <div className="slider_content">
                                <h2 className="f_p f_700 f_size_40 l_height60">Connecting Healthcare.</h2>
                                <p className="f_400 l_height28 mt_30">HECOD is one stop solution for all your healthcare needs.<br/> We are on a mission to digitize healthcare to make it more efficient for people across the globe!</p>
                                {/* <a href="get" className="slider_btn btn_hover mt_30">Get Started</a> */}
                                <Link to="/about" className="slider_btn btn_hover mt_30">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="mobile_img">
                                <div className="img"><img className="women_img leaf wow fadeInDown" data-wow-delay="0.4s" src={require('../assets/img/home2/women.png')} alt="women" /></div>
                                <img className="mobile wow fadeInRight" data-wow-delay="0.1s" src={require('../assets/img/home2/mobile.png')} alt="mobile" />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="leaf l_left" src={require('../assets/img/home2/shape_02.png')} alt="shape" />
                <img className="leaf l_right" src={require('../assets/img/home2/shape_03.png')} alt="shape" />
                <img className="middle_shape" src={require('../assets/img/home2/shape_01.png')} alt="shape" />
                <img className="bottom_shoape" src={require('../assets/img/home2/shape.png')} alt="shape" />
            </section>

        </>
    );
}

export default Slider;
