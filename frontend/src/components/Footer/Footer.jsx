import React from 'react';
import radiantLogo from '../../assets/images/logo.png';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={radiantLogo} style={{ maxHeight: "80px", width: "200px" }}/>
                        <header className="d-flex justify-content-start  py-5 container">
                            <FaFacebook size={25} className="mx-2 facebook-icon" />
                            <FaWhatsapp size={25} className="mx-2 whatsapp-icon" />
                            <FaLinkedin size={25} className="mx-2 linkedin-icon" />
                            <FaInstagram size={25} className="mx-2 mr-3 instagram-icon" />

                        </header>
                        <p className='my-2'>Embark on a journey of continuous learning with
                            Radiant, where knowledge meets opportunity.
                            Dive into a world of skill building courses curated
                            for success in the digital age. Elevate your
                            expertise, advance your career and embrace a
                            future filled with endless possibilities.
                        </p>
                    </div>

                    <div className='col-md-3 mt-3 moreFooter'>
                        <h3>Courses</h3>
                        <div className='footerCourses textCourse'>
                            <p><Link to="/">Data Science</Link></p>
                            <p><Link to="/">Full Stack Java Development</Link></p>
                            <p><Link to="/">Web Development</Link></p>
                            <p><Link to="/">Power BI</Link></p>
                            <p><Link to="/">UI/ UX Design</Link></p>
                            <p><Link to="/">Salesforce</Link></p>
                            <p><Link to="/">Digital Marketing</Link></p>
                        </div>
                    </div>

                    <div className='col-md-3 mt-3 moreFooter'>
                        <h3>Quick Links</h3>
                        <div className='footerCourses '>
                            <p><Link to="/">Home</Link></p>
                            <p><Link to="/about">About Us</Link></p>
                            <p><Link to="/services">Services</Link></p>
                            <p><Link to="/course">Courses</Link></p>
                            <p><Link to="/enroll">Enroll</Link></p>
                            <p><Link to="/placement">Placements</Link></p>
                            <p><Link to="/project">Projects</Link></p>
                            <p><Link to="/contact">Contact</Link></p>
                            <p><Link to="/blogs">Blogs</Link></p>
                        </div>
                    </div>

                    <div className='col-md-3 mt-3 moreFooter'>
                        <h3>More</h3>
                        <div className=' footerCourses'>
                            <p><Link to="/">Terms</Link></p>
                            <p><Link to="/">Privacy</Link></p>
                            <p><Link to="/">Help</Link></p>
                            <p><Link to="/">Contact</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
