import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <img id='contact-background-image' alt='contact us background' src='https://cdn.pixabay.com/photo/2017/10/26/18/27/smoking-2891974_960_720.jpg' />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Get in touch</h1>
                        <p className="lead">We are based in Pensacola, Florida and ship products nationwide.</p>
                        {/* <img id='contact-jumbotron-image' alt='contact us logo' src='https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762_960_720.png' /> */}
                    </div>
                </div>

                <div id='card-div'>
                    {/* <div id="map"></div> */}
                    <a target='_blank' id='contact-instagram-a-tag' href='https://www.instagram.com/inkedergonomics/'>
                        <div className="card contact-card">
                            <div className="card-body">
                                <img alt='instagram link' id='contact-instagram-logo' src='https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg' />
                                <h6 className="card-title">Follow us on instagram for the latest updates</h6>
                                <p className="card-text">@inkedergonomics</p>
                            </div>
                        </div>
                    </a>
                    <div className="card contact-card">
                        <div className="card-body">
                            <img alt='phone card link' id='contact-phone-logo' src='https://image.flaticon.com/icons/png/512/33/33447.png' />
                            <h6 className="card-title">Jordan Signorelli</h6>
                            <h6 className="card-title">CEO</h6>
                            <p className="mb-0 card-title">(516)-776-2106</p>
                        </div>
                    </div>
                    <div className="card contact-card">
                        <div className="card-body">
                            <img alt='email card' id='contact-email-logo' src='http://cdn.onlinewebfonts.com/svg/img_416847.png' />
                            <h6 className="card-title">inkedergonomics@gmail.com</h6>
                            <p className="card-text">We respond the same business day.</p>
                        </div>
                    </div>
                </div>

                <div id='contact-banner'>
                    <div className='workshop-area'>
                        <h6 className='workshops-section-title'>Serving the ink community since 2017</h6>
                        <div className='workshop-header-div'>
                        <img className="contact-image" src='https://live.staticflickr.com/65535/48434795747_906245bb81_z.jpg' alt='tattoo artist' />
                        <img className="contact-image" src='https://live.staticflickr.com/65535/48434796157_45eb22f410_z.jpg' alt='tattoo artist' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;


