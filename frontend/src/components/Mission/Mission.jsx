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
                            <p className="abtstyl mt-5" style={{ color: "#025978", display: "flex", alignItems: "center" }}>
                                <strong style={{ margin: "0 0.5em" }}>About Us</strong>
                                <span style={{ width: "40px", borderBottom: "2px solid #025978", marginLeft: "0.2em", position: "relative" }}>
                                    <span className="bullet " style={{ position: "absolute", paddingBottom: "0.1em", top: "40%",   left: "100%", transform: "translate(-50%, -50%)", display: "inline-block ", fontSize: "2.9em" }}>&#8226;</span>
                                </span>
                            </p>



                            <h2 className="mt-4">
                                Our mission is to empower<br />
                                individuals to acquire new skills.
                            </h2>
                            <p className='mt-4'>
                                In Radiant, we believe in the transformative power of education.<br /> Our mission is to empower individuals to acquire new skills, <br />empower their knowledge.
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
                                        <strong>READ MORE</strong>
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
