import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div id='about-background'>
                <h3 id='about-header'>Being a tattoo artist can be a pain in the neck.</h3>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval='6000'>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='carousel-image-div'>
                                <img src="https://live.staticflickr.com/65535/48434795332_eb2160eb94_z.jpg" className='carousel-image massage-carousel-image' alt="massage with tools" />
                            </div>
                            <div className='about-slide-text-area'>
                                <p className='slide-text'>We provide injury recovery & prevention consultations with state-of-the-art techniques and
                            strategies, helping adjust body mechanics and workshop accessories to maximize efficiency and comfort.</p>
                                <a href='/services' className='slide-link'><h4>View our services</h4></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://storage.needpix.com/rsynced_images/artist-2238780_1280.jpg" className="carousel-image" alt="..." />
                            <div className='about-slide-text-area'>
                                <p className='slide-text'>Learn warm-up techniques, hand stretches & massage techniques to improve muscle endurance
                                and efficiency.</p>
                                <a href='/contact' className='slide-link'><h4>Contact us for more information</h4></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='carousel-image-div'>
                                <img src="https://live.staticflickr.com/65535/48434652131_97888043f3_z.jpg" className="carousel-image third-slide-image" alt="tattoo artist" />
                            </div>
                            <div className='about-slide-text-area'>
                                <p className='slide-text'>Tendinitis, Carpal Tunnel Syndrome and Osteoarthritis can be mitigated through correct posture
                                and allignment, with the help of products we offer.</p>
                                <a href='/shop' className='slide-link'><h4>Shop Our Products</h4></a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <img id='tattoo-artist-background' src='https://images.pexels.com/photos/428108/pexels-photo-428108.jpeg?cs=srgb&dl=tattoo-tattoo-artist-tattoo-machine-428108.jpg&fm=jpg' alt='smokig skulls background' />
            </div >
        )
    }
};

export default About;