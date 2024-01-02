import React from 'react';
import bgmission from '../../assets/images/bgmission.png';
import boy from '../../assets/images/boy.png';
import './Mission.css'
const Mission = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="boyimg" style={{ background: `url(${bgmission})` }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={boy} alt="image" className="img1 " style={{ height: '550px' }} />

                        </div>
                        <div className="col-md-6">
                            <p className="mt-5">
                                <strong>About Us</strong>
                            </p>
                            <h2 className="mt-4">
                                Our mission is to empower<br />
                                individuals to acquire new skills.
                            </h2>
                            <p className='mt-4'>
                                In Radiant, we believe in the transformative power of education.<br/> Our mission is to empower individuals to acquire new skills, <br/>empower their knowledge.
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-4">

                                    <ul>
                                        <li>Quality Teachers</li>
                                        <li>Online Class</li>
                                        <li>Lifetime Access</li>
                                    </ul>
                                </div>
                                <div className=" col-md-8">
                                    <ul>
                                        <li>Get Certified</li>
                                        <li>Skill Developed</li>
                                    </ul>
                                </div>
                                <div className="">
                                    <button type="submit" className="readmore mt-3">
                                        READ MORE
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </div>
        
    );
};

export default Mission;
