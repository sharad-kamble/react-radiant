import React from 'react';
import './testimonial.css';
// import Line from "../../assets/images/Line.png";
import student from "../../../assets/images/student.png"
// import Placement from '../Placementnews/Placement';


const Testimonial = () => {
    return (
        <div className='container-fluid tetsmocontainer mt-5'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 mt-5'>
                        <h6 class="testminfo">T E S T I M O N I A l S</h6>
                        {/* <img src={Line} className='tstimg' /> <span className='tstspan'>TESTIMONIAL</span> */}
                        <h2 className='mt-3 tstmoHead'>What do they say?</h2>
                        <p className=' tstmopara'>
                            "Radiant IT Services proudly announces partnerships with over 150 leading IT companies, facilitating exceptional opportunities for students, resulting in over 300 successful placements— a testament to our commitment to fostering promising careers in the IT industry."
                        </p>
                        <h5 className='tsth6'>
                            Please give your assesment
                        </h5>
                        <button className='tstmoBtn'>GIVE YOUR FEEDBACK</button>
                    </div>



                    <div className="col-md-6  tstmoCarousel">
                        <div id="carouselExample" className="testimonial-carousel carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner" >
                                <div className="testcarousel carousel-item active">
                                    <img src={student} className="testmocaro d-block mx-auto  w-50 " style={{ borderRadius: '35px' }} alt="First slide" />

                                    <div className="testimonialscaro carousel-content carouselContent">

                                        <p className='px-4 pt-2'>Hi, I am Shital kharade. Completed my Full Stack Java
                                            Development course from Radiant It services. I got early
                                            calls and placed in MNC-Capgemini for 4.5LPA package.
                                            The team and trainers are very supportive. Their soft skill
                                            training helped me to crack the interview.
                                            Thank you team Radiant.
                                        </p>
                                        <h5 className='px-4'>Shital Kharade</h5>
                                        <p className='px-4 pb-2'>-Full Stack Java Developer</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={student} className="d-block mx-auto  w-50" alt="Second slide" style={{ borderRadius: '35px' }} />

                                    <div className="carousel-content carouselContent">
                                        <p className='px-4 pt-2'>Hi, I am Shubham Vijay. Completed my Full Stack Java
                                            Development course from Radiant It services. I got early
                                            calls and placed in MNC-Capgemini for 4.5LPA package.
                                            The team and trainers are very supportive. Their soft skill
                                            training helped me to crack the interview.
                                            Thank you team Radiant.
                                        </p>
                                        <h5 className='px-4'>Shubham Vijay</h5>
                                        <p className='px-4 pb-2'>-Full Stack MERN Developer</p>
                                    </div>
                                </div>

                                {/* 2nd image */}
                            </div>
                            {/* <button className="testmoprev carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="testmoprevicon carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button> */}
                            <button className="testmonext carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="testmonexticon carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>


                <div className='row mt-5 '>
                    <h2 className='text-center placementNews mb-4'>Placement News</h2>
                    <div className="col-md-6 mx-auto ">
                        <div id="carouselExampleDark" className="plmntCrousel carousel  carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <div className="carousel-content">
                                            <h5 className='text-center'>Shubham Vijay</h5>
                                            <h6>Software Engineer</h6>
                                            <p className='text-center'>FIS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <div className="carousel-content">
                                            <h5 className='text-center'>Shubham Vijay</h5>
                                            <h6>Java Fullstack Developer</h6>
                                            <p className='text-center'>Infosys</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <div className="carousel-content">
                                            <h5 className='text-center'>Shital Kharade</h5>
                                            <h6>Java Fullstack Developer</h6>
                                            <p className='text-center'>Infosys</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row mt-5 justify-content-center subscribeCard'>
                    <div className='subscribe'>
                        <h3 className='text-center'>Subscribe to Get Updates
                            <br />
                            For Every New Course
                        </h3>
                        <p className='text-center'>
                            Subscribe for new courses.
                        </p>
                        <form>
                            <div className="input-group inputGrp  mx-auto">
                                <input type="email" className="form-control subcribeInp" placeholder='Enter your email' required />
                                <div className="input-group-append">
                                    <button className='subscribeBtn' type="button">Subscribe</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Testimonial
