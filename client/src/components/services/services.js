import React, { Component } from 'react';
import './services.css'

class Services extends Component {
    render() {
        return (
            <div>
                <img id='services-background-image' src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Mitsukuni_defying_the_skeleton_spectre_invoked_by_princess_Takiyasha.jpg' alt='background image' />
                <div className='services-jump-to-div'>
                    <a href='#massage-area-div' className='jump-to-card-a-tag'>
                        <div className="jump-to-card card">
                            <img id='jump-to-card-image-1' src="https://images.pexels.com/photos/1552112/pexels-photo-1552112.jpeg?cs=srgb&dl=masaje-y-acupuntura-en-playa-del-carmen-1552112.jpg&fm=jpg" className="jump-to-card-image card-img-top" alt="..." />
                            <div className="jump-to-card-body card-body">
                                <h4 className="jump-to-card-title card-title">Injury Prevention and Recovery</h4>
                                <p className='jump-to-card-text card-text'>One-on-one, manual, and percussive therapy.</p>
                                <p className='jump-to-card-text card-text'>Myofacial massage and kinesio taping.</p>
                            </div>
                        </div>
                    </a>
                    <a href='#workshop-area' className='jump-to-card-a-tag'>
                        <div className="jump-to-card card">
                            <img id='jump-to-card-image-2' src="https://upload.wikimedia.org/wikipedia/commons/5/59/Neutral_body_posture_diagram.gif" className="jump-to-card-image card-img-top" alt="..." />
                            <div className="jump-to-card-body card-body">
                                <h4 className="jump-to-card-title card-title">Work Shops</h4>
                                <p className="jump-to-card-text card-text">Self stretching and visual strain prevention techniques.</p>
                                <p className="jump-to-card-text card-text">Personalized on-site station modification.</p>
                                <p className="jump-to-card-text card-text">Large and small groups.</p>
                            </div>
                        </div>
                    </a>
                    <a href='/shop' className='jump-to-card-a-tag'>
                        <div className="jump-to-card card">
                            <img id='jump-to-card-image-3' src="https://images.pexels.com/photos/1695507/pexels-photo-1695507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="jump-to-card-image card-img-top" alt="..." />
                            <div className="jump-to-card-body card-body">
                                <h4 className="jump-to-card-title card-title">CBD and Equipment Sales</h4>
                                <p className="jump-to-card-text card-text">Oils and concentrates</p>
                                <p className="jump-to-card-text card-text">Posture-correcting station chairs and equipment.</p>
                                <p className="jump-to-card-text card-text">And more!</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div id='massage-area-div'>
                    <div className='workshop-area'>
                        <h2 className='workshops-section-title'>Injury Prevention and Recovery</h2>
                        <div className='workshop-header-div'>
                            <h5 className='workshops-section-subtext'>We focus on pain management and injury recovery for repetitive strain injuries.</h5>
                            <h5 className='workshops-section-subtext'>We also teach individualized exercise programs and manual therapy with use of
                            <span id='services-span'> myofacial release techniques, trigger point release, kinesio taping,
                                electrotherapy, ultrasound and cold laser therapy.</span>
                                <h5 className='text-dark mt-5 workshop-h6-header'>For more information and to schedule a seminar, visit our <span><a className='workshop-contact-link' href='/contact'>contact page.</a></span></h5>
                            </h5>

                            {/* <img className="workshop-area-image" src='https://yogahero.co.uk/wp-content/uploads/2017/04/Ayurvedic-Yoga-Massage-Shoulder-Neck-Head-Face-1-724x480.png' alt='massage' /> */}
                            <img className="workshop-area-image" src='https://www.maxpixel.net/static/photo/1x/Bodywork-Massage-Therapist-Massage-Therapy-Massage-2333203.jpg' alt='tattoo artist' />
                            <img className="workshop-area-image" src='https://live.staticflickr.com/8282/7713393104_1e69a9a67d_b.jpg' alt='tattoo artist' />
                        </div>
                    </div>
                </div>

                <div id='workshop-area'>
                    <h2 className='workshops-section-title'>Workshops</h2>
                    <div className='workshop-header-div'>
                        <h5 className='workshops-section-subtext'>Our workshops help you learn how to prevent injury with preventative and recovery stretching, station modification and pain relief supplements available in our <span><a className='text-light' href='/shop'>shop </a></span>tab.</h5>
                        <img className="workshop-area-image" src='https://cdn.shopify.com/s/files/1/1096/0120/products/SCM0042_Sullen_X_Virus_PostureCorrect_CompressionTop_black_D1_2000x.jpg?v=1542392728' alt='tattoo artist' />
                        <img className="workshop-area-image" src='https://c.pxhere.com/photos/f7/9a/blackandwhite_selfportrait_man_male_yoga_self_pose_exercise-501048.jpg!d' alt='tattoo artist' />
                        <div id='workshop-info-wrapper'>
                            <h6 className='workshop-h6-header'>Our <span className='font-italic'>How To Prevent Injuries and Grow with a Growing Industry</span> seminar includes the following learning objectives: </h6>
                            <ul className='workshop-ul'>
                                <li>Common conditions affecting tattoo artists</li>
                                <li>Why these conditions are increasingly affecting tattoo artists</li>
                                <li>How to avoid and alleviate these conditions</li>
                                <li>Importance of proper body mechanics, ergonomics, positioning aids</li>
                                <li>Routine stretching and muscle activation before and during tattooing.</li>
                            </ul>

                            <h6 className='workshop-h6-header'>Our seminars are typically formatted as such: </h6>
                            <ul className='workshop-ul'>
                                <li>Introduction to Inked Ergonomics</li>
                                <li>Quick anatomy rundown</li>
                                <li>Supporting recent study and dental industry research</li>
                                <li>Ergonomics, body positioning and aids</li>
                                <li>Avoiding injury: daily stretches, warm-up stretches prior to tattooing, mid-tattoo stretches</li>
                                <li>Massage technique for when you are already injured</li>
                                <li>Q &amp; A</li>
                            </ul>

                            <h6 className='workshop-h6-header'>For more information and to schedule a seminar, visit our <span><a className='workshop-contact-link' href='/contact'>contact page.</a></span></h6>
                        </div>
                    </div>


                    {/* <div id='ergonomic-diagram-wrapper'>
                        <div id='ergonomic-diagrams-div'>
                            <div id='ergonomic-diagrams-inner-div'>
                                <h3 id="ergonomic-diagrams-div-title">Learn Ergonomic Preventative and Treatment Stretches</h3>
                                <div className="ergonomic-diagram-card card">
                                    <img src="https://i.pinimg.com/originals/80/76/88/8076888324aff81ad2824354ac538560.gif" className="ergonomic-diagram-image card-img-top" alt="..." />
                                </div>
                        
                                <div className="ergonomic-diagram-card card">
                                    <img src="https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Forward_Stretch.gif" className="ergonomic-diagram-image card-img-top" alt="..." />
                                </div>
                                <div className="ergonomic-diagram-card card">
                                    <img src="https://i.pinimg.com/originals/7c/9e/fa/7c9efaa9d66463f207b7947a7c28c152.gif" className="ergonomic-diagram-image card-img-top" alt="..." />
                                </div>
                                <div className="ergonomic-diagram-card card">
                                    <img src="https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Neck_Stretch.gif" className="ergonomic-diagram-image card-img-top" alt="..." />
                                </div>
                                <div />
                            </div>
                            <iframe width="480" height="250" src="https://www.youtube.com/embed/uPO-zST-7EE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe width="480" height="250" src="https://www.youtube.com/embed/WzoEjkJHQ54?start=50" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div> */}
                </div>
                <div id='contact-area-div'>
                    <div className='workshop-area'>
                        <h2 className='workshops-section-title'>For more info...</h2>
                        <div className='workshop-header-div'>
                            <h4 className='workshops-section-subtext'>Make sure to visit our <span><a className='link-to-contact' href='/contact'>contact page</a></span> to schedule a consultation.</h4>
                            <img className="workshop-area-image" src='https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/40677367_2072537643011178_6636023427813605376_n.jpg?_nc_cat=103&_nc_oc=AQlO3zd1XNDPupSAuaoFF-_UVfVT9FRhOD7SW5BD9Q2M1Mdg1Sef3c8-7rj05ORe8PIAT-k55GlhNhkdmJhOZtP7&_nc_ht=scontent.fsan1-1.fna&oh=b873e2f705fee296999213bff2e8a4f0&oe=5DE139DC' alt='tattoo artist' />
                            <img className="workshop-area-image" src='https://media.defense.gov/2017/Jul/03/2001772376/780/780/0/170622-F-LR947-0530.JPG' alt='tattoo artist' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;