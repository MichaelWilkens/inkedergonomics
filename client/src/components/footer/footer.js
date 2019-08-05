import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer-div'>
                <nav className="navbar footer-navbar navbar-expand">
                    <a className="navbar-brand footer-navbar-brand">&copy; 2019 All Rights Reserved</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav footer-navbar-nav ml-auto">
                            <li className="nav-item footer-nav-item">
                                <a className="nav-link text-dark phone-number"><img id='phone-logo' src='http://downloadicons.net/sites/default/files/phone-logo-image-icon-63854.png' />(516)-776-2106</a>
                            </li>
                            <li className="nav-item footer-nav-item">
                                <a className="nav-link text-dark email-address"><img id='email-logo' src='https://captivating.org/wp-content/uploads/Email-Logo-1024x731.png' />inkedergonomics@gmail.com</a>
                            </li>
                            <li className="nav-item footer-nav-item">
                                <a className="nav-link text-dark" href="https://www.instagram.com/inkedergonomics/"><img className=' instagram-link'
                                    src='https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png' /></a>
                            </li>
                            <li className="nav-item footer-nav-item">
                                <a className="nav-link text-dark" href="https://www.facebook.com/jordan.signorelli.37?fref=search&__tn__=%2Cd%2CP-R&eid=ARCKJLBLZBAKpcGiH5CEz3RclSXFQewmdKfQBPIAg1QnqMsPib6ouonL8E0aK00nIbZa8PfBMD6l2SIm">
                                    <img className=' facebook-link' src='https://cdn.worldvectorlogo.com/logos/facebook-icon-white.svg' /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
};

export default Footer;