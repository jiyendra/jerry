import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg menu_two">
                <div className="container">
                <Logo/>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu_toggle">
                            <span className="hamburger">
                                <span />
                                <span />
                                <span />
                            </span>
                            <span className="hamburger-cross">
                                <span />
                                <span />
                            </span>
                        </span>
                    </button>
                    <Navbar/>
                    <div className="nav_right_btn">
                        <a href="login" className="login_btn">Login</a>
                        <a href="login" className="login_btn active">Sign Up</a>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;
