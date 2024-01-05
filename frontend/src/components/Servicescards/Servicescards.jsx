import React from 'react';
import digital from '../../assets/images/digital.png';
import software from '../../assets/images/software.png'
import website from '../../assets/images/website.png'
import industril from '../../assets/images/industril.png'
import app from '../../assets/images/app.png'
import billing from '../../assets/images/billing.png'
import './Servicescards.css';

const ServicesCards = () => {
    return (

        <div className='container-fluid homepagecard'>
            <div className=" text-center pt-5">
                <h3 className="ourserv"><strong>OUR SERVICES</strong></h3>
                <p>Transforming challenges into IT innovations, effortlessly.</p>
            </div>
            <div className="row justify-content-center mt-4" >

                <div className="card m-4 cardImg" style={{ width: "18rem" }}>
                    < img className="card-img-top card1img" src={industril} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">INDUSTRIAL TRAINING</h5>
                        <p className="card-text">Elevate your career prospects with hands-on training led by industry experts, setting the foundation for a successful and dynamic professional path.</p>

                    </div>
                </div>
                <div className="card m-4 mb-4 cardImg" style={{ width: "18rem" }}>
                    < img className="card-img-top card1img" src={digital} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">DIGITAL MARKETING</h5>
                        <p className="card-text">The Radiant IT Services gives you top online visibility. Our online marketing techniques are very useful togenerate ROI for businesses.</p>

                    </div>
                </div>

                <div className="card m-4 mb-4 cardImg" style={{ width: "18rem" }}>
                    <img className="card-img-top card1img" src={website} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">WEBSITE DEVELOPMENT</h5>
                        <p className="card-text">In today’s technical era, a website is need for every business. The radiant IT Services design and developed website for brand visibility</p>

                    </div>
                </div>

            </div>

            <div className="row justify-content-center mt-4" >
                <div className="card m-4 mb-4 cardImg" style={{ width: "18rem" }}>
                    <img className="card-img-top card1img" src={software} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">SOFTWARE DEVELOPMENT</h5>
                        <p className="card-text">The Radiant IT Services is the best software development company in the industry, which gives more reliable Applications.</p>

                    </div>
                </div>


                <div className="card m-4 cardImg" style={{ width: "18rem" }}>
                    <img className="card-img-top card1img" src={app} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">MOBILE APP DEVELOPMENT</h5>
                        <p className="card-text">The Radiant IT services Pvt. Ltd. has
                            the best teams of android app
                            development & iOS app development
                            in the industry.
                        </p>

                    </div>
                </div>
                <div className="card m-4 cardImg" style={{ width: "18rem" }}>
                    <img className="card-img-top card1img" src={billing} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">CORPORATE TRAINING</h5>
                        <p className="card-text">Empower your workforce with Radiant IT Services Pvt Ltd's cutting-edge Corporate Training and Program solutions.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesCards;
