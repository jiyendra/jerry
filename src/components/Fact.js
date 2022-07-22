import React from 'react';

const Fact = () => {
    return (
        <>
            <section className="seo_fact_area sec_pad">
                <div className="home_bubble">
                    <div className="bubble b_one" />
                    <div className="bubble b_three" />
                    <div className="bubble b_four" />
                    <div className="bubble b_six" />
                    <div className="triangle b_eight" data-parallax="{&quot;x&quot;: 120, &quot;y&quot;: -10}"><img src="img/seo/triangle_one.png" alt /></div>
                </div>
                <div className="container">
                    <div className="seo_sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.3s">
                        <h2>Most Populer <br /> Technology We Are Using.</h2>
                    </div>
                    <div className="seo_fact_info">
                        <div className="seo_fact_item">
                            <div className="text">
                                <div className="counter one"><i class="fab fa-node"></i></div>
                                <p>Node JS</p>
                            </div>
                        </div>
                        <div className="seo_fact_item">
                            <div className="text">
                                <div className="counter two"><i class="fab fa-react"></i></div>
                                <p>React Js</p>
                            </div>
                        </div>
                        <div className="seo_fact_item">
                            <div className="text">
                                <div className="counter three"><i class="fas fa-dice-d6"></i></div>
                                <p>Blockchain</p>
                            </div>
                        </div>
                        <div className="seo_fact_item last">
                            <div className="text">
                                <div className="counter four"><i class="fas fa-robot"></i></div>
                                <p>Artificial Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Fact;
