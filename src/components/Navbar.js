import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav menu w_menu">
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" activeClassName="active" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/team" activeClassName="active" className="nav-link">Team</NavLink>
                    </li>
                    <li  className="nav-item">
                        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact Us</NavLink>
                    </li>
                    <li  className="nav-item">
                        <NavLink to="/booknow" activeClassName="active" className="nav-link">Book Now</NavLink>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Navbar;
