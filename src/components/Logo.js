import React from 'react';

const Logo = () => {
    return (
        <>
            <a className="navbar-brand sticky_logo" href="index">
                <img src={require('../assets/img/logo.png')} srcSet="img/logo2x-2.png 2x" alt="logo" />
                <img src={require('../assets/img/logo.png')} srcSet="img/logo2x.png 2x" alt="logo" />
            </a>
        </>
    );
}

export default Logo;
