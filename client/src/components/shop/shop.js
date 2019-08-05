import React, { Component } from 'react';
import './shop.css';

class Shop extends Component {
    render() {
        return (
            <div>
                <div id='shop-background-image-div'>
                    <img id='shop-background-image' alt='background tattoo image' src='https://cdn.pixabay.com/photo/2014/04/02/16/23/branch-307129_960_720.png' />

                    <div className="jumbotron shop-jumbotron">
                        <h1 className="display-4">Shop our products</h1>
                        <p className="lead">Search by category or scroll down to view all products.</p>
                        <p>All items are in stock and available for purchase unless otherwise noted. For questions, please visit our <span><a className='shop-link-to-contact' href='/contact'>contact page.</a></span></p>
                        {/* <a className="btn shop-jumbotron-button btn-lg" href="#shop-cbd" role="button">CBD Sales</a>
                        <a className="btn shop-jumbotron-button btn-lg ml-2" href="#shop-equipment" role="button">Ergonomic Equipment</a> */}
                    </div>

                    <div id='shop-cbd-infographic-div'>
                        <img id='shop-cbd-infographic-photo' alt='cbd infographic' src='https://live.staticflickr.com/4741/38908085575_cf9222bf46_b.jpg' />
                    </div>


                    <div id='shop-cbd'>
                        <div className='workshop-area'>
                            <h2 className='workshops-section-title'>CBD Products</h2>
                            <div className='workshop-header-div'>
                                <div className="card shop-cbd-card" >
                                    <img src="https://www.sublimecbd.biz/wp-content/uploads/2018/01/Iso-caps-30.png" className="shop-cbd-image card-img-top" alt="..." />
                                    <div className="shop-cbd-card-body card-body">
                                        <h5 className="shop-cbd-card-title card-title">CBD Isolate Infused Capsules</h5>
                                        <p className="shop-cbd-card-text card-text">25, 50, 100, 150, 200 mg of CBD Isolate per capsule options available</p>
                                        <a href="/item?itemNumber=0" className="shop-cbd-card-button btn btn-primary">$29.99 -$139.99</a>
                                    </div>
                                </div>
                                <div className="card shop-cbd-card" >
                                    <img src="https://www.sublimecbd.biz/wp-content/uploads/2018/08/fs-tinc-30.png" className="shop-cbd-image card-img-top" alt="..." />
                                    <div className="shop-cbd-card-body card-body">
                                        <h5 className="shop-cbd-card-title card-title">Full Spectrum Tincture</h5>
                                        <p className="shop-cbd-card-text card-text">500, 1000, and 2000 mg of CBD Isolate options available</p>
                                        <a href="/item?itemNumber=1" className="shop-cbd-card-button btn btn-primary">$19.99 - $59.99</a>
                                    </div>
                                </div>
                                <div className="card shop-cbd-card" >
                                    <img src="https://www.sublimecbd.biz/wp-content/uploads/2019/05/lotion-open-side.png" className="shop-cbd-image card-img-top" alt="..." />
                                    <div className="shop-cbd-card-body card-body">
                                        <h5 className="shop-cbd-card-title card-title">Full Spectrum Body Butter</h5>
                                        <p className="shop-cbd-card-text card-text">250 mg of cannabinoids in 1 ounce container.</p>
                                        <a href="/item?itemNumber=2" className="shop-cbd-card-button btn btn-primary">$29.99</a>
                                    </div>
                                </div>
                                {/* <div className="card shop-cbd-card" >
                                    <img src="https://www.sublimecbd.biz/wp-content/uploads/2018/01/white-pow.png" className="shop-cbd-image card-img-top" alt="..." />
                                    <div className="shop-cbd-card-body card-body">
                                        <h5 className="shop-cbd-card-title card-title">CBD Isolate</h5>
                                        <p className="shop-cbd-card-text card-text">Available in 1, 3.5, 7, 14, and 28 gram containers.</p>
                                        <a href="#" className="shop-cbd-card-button btn btn-primary">$24.99 - $499.99</a>
                                    </div>
                                </div>
                                <div className="card shop-cbd-card" >
                                    <div className='shop-vape-div'>
                                        <img src="https://www.sublimecbd.biz/wp-content/uploads/2018/10/northern-lights-vape-cart.png" className="shop-vape-image shop-cbd-image card-img-top" alt="..." />
                                    </div>
                                    <div className="shop-cbd-card-body card-body">
                                        <h5 className="shop-cbd-card-title card-title">Northern Lights Vape Cartridge</h5>
                                        <p className="shop-cbd-card-text card-text">450 mg CBD cartridge in a 0.5 mL CCELL attachment.</p>
                                        <a href="#" className="shop-cbd-card-button btn btn-primary">$39.99</a>
                                    </div>
                                </div>
                                <div className="card shop-cbd-card" >
                                    <div className='shop-vape-div'>
                                        <img src="https://www.sublimecbd.biz/wp-content/uploads/2018/10/clementine-vape-cart.png" className="shop-vape-image shop-cbd-image card-img-top" alt="..." />
                                    </div>
                                    <div className="shop-cbd-card-body card-body">
                                        <h5 className="shop-cbd-card-title card-title">Clementine Vape Cartridge</h5>
                                        <p className="shop-cbd-card-text card-text">450 mg CBD cartridge in a 0.5 mL CCELL attachment.</p>
                                        <a href="#" className="shop-cbd-card-button btn btn-primary">$39.99</a>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>

                     {/* <div id='shop-equipment'>
                        <div className='workshop-area'>
                            <h2 className='workshops-section-title'>Equpiment</h2>
                            <div className='workshop-header-div'>
                                <div className="card shop-equipment-card" >
                                    <img src="https://cdn.pixabay.com/photo/2017/05/17/04/55/chair-2319866_960_720.png" className="shop-equipment-image card-img-top" alt="..." />
                                    <div className="shop-equipment-card-body card-body">
                                        <h5 className="shop-equipment-card-title card-title">Sweet Chair</h5>
                                        <p className="shop-equipment-card-text card-text">Sick right?</p>
                                        <a href="#" className="shop-equipment-card-button btn btn-primary">A fucking million dollars</a>
                                    </div>
                                </div>
                                <div className="card shop-equipment-card" >
                                    <img src="https://media.defense.gov/2011/Jul/15/2000238047/-1/-1/0/110713-F-SF570-021.JPG" className="shop-equipment-image card-img-top" alt="..." />
                                    <div className="shop-equipment-card-body card-body">
                                        <h5 className="shop-equipment-card-title card-title">Neck brace</h5>
                                        <p className="shop-equipment-card-text card-text">This guy knows what's up.</p>
                                        <a href="#" className="shop-equipment-card-button btn btn-primary">Priceless</a>
                                    </div>
                                </div>
                                <div className="card shop-equipment-card" >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Chairs_vortex_mc.jpg" className="shop-equipment-image card-img-top" alt="..." />
                                    <div className="shop-equipment-card-body card-body">
                                        <h5 className="shop-equipment-card-title card-title">Face hole chair</h5>
                                        <p className="shop-equipment-card-text card-text">Yeeeee</p>
                                        <a href="#" className="shop-equipment-card-button btn btn-primary">Free</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
}

export default Shop;