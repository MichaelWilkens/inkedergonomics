import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar top-navbar navbar-expand">
                    <a className="navbar-brand top-navbar-brand" href="/"><img className='navbar-home-logo' src='https://www.inkedergonomics.com/wp-content/uploads/2018/08/logo.png' alt='inked ergonomics home button' /></a>

                    <div className="collapse navbar-collapse top-navbar-div" id="navbarSupportedContent">
                        <ul className="navbar-nav top-navbar-nav ml-auto">
                            <li className="nav-item top-nav-item">
                                <a className="nav-link top-nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item top-nav-item">
                                <a className="nav-link top-nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item top-nav-item">
                                <a className="nav-link top-nav-link" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item top-nav-item">
                                <a className="nav-link top-nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id='wrapper'></div>
            </div>
        )
    }
}

export default Navbar;