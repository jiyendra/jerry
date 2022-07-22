import React from 'react';

const Breadcrumb = (props) => {
    return (
        <>
            <div>
                <section className="breadcrumb_area">
                    <img className="breadcrumb_shap" src={require('../assets/img/breadcrumb/banner_bg.png')} alt="banner_bg" />
                    <div className="container">
                        <div className="breadcrumb_content text-center">
                            <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">{props.breadcrumb}</h1>
                            <p className="f_400 w_color f_size_16 l_height26">{props.tagOne}</p>
                            <p className="f_400 w_color f_size_16 l_height26">{props.tagTwo}</p>
                        </div>
                    </div>
                </section>                
            </div>

        </>
    );
}

export default Breadcrumb;
