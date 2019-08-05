import React, { Component } from 'react';
import './landingpage.css'

class LandingPage extends Component {
    render() {
        return (
            <div id='home-page-background'>
                <img id="background-photo-side" src='https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?cs=srgb&dl=adult-art-artistic-955938.jpg&fm=jpg' alt='EUGENIO MARONGIU​ / GETTY IMAGES ' />
                <div className="jumbotron">
                    <h1 className="jumbo-text display-6">Theraputic services for those who (th)ink.</h1>
                    <p className="jumbo-text lead home-jumbo-subtext">Providing injury prevention & recovery consultation to tattoo artists.</p>
                    <a className="jumbo-text btn jumbotron-button btn-sm" href="/about" role="button">Learn more</a>
                </div>
                <div id='background-photo-container'>
                    <div id="skeleton-div">
                        <img id='background-photo' src='https://www.inkedergonomics.com/wp-content/uploads/2018/08/fp-logo3.jpg' alt='inked ergonomics logo' />
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;