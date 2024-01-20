import React from 'react';
import radiantLogo from '../../assets/images/logo.png';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
// import { MdEmail, MdPhone } from 'react-icons/md';
import Gmail from '../../assets/images/Gmail.png'
import Phone from '../../assets/images/Phone.png'

import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-4' style={{margin:"15px"}}>
                        <img src={radiantLogo} style={{ maxHeight: "80px", width: "200px" }} />
                        <header className="d-flex justify-content-start  py-4 container">
                            <FaFacebook size={25} className="mx-2 facebook-icon" />
                            <FaWhatsapp size={25} className="mx-2 whatsapp-icon" />
                            <FaLinkedin size={25} className="mx-2 linkedin-icon" />
                            <FaInstagram size={25} className="mx-2 mr-3 instagram-icon" />

                        </header>
                        <h5>Address</h5>
                        <p className='my-2'>City Vista, Kolte Patil Downtown, Office No. 13/14,
                            6th Floor, "B" Building, Fountain Road,
                            opp. Victorious Kids School, Kharadi,
                            Pune, Maharashtra 411014
                        </p>
                        <div className="">
                            <div className='text-start text-dark'>
                                {/* Email Section */}
                                <Link to="mailto:info@radiantitservices.in">
                                    <img src={Gmail} alt="Email Icon" className="email-icon" />
                                    <span className="email-text"> info@radiantitservices.in</span>
                                </Link>
                            </div>
                            <div className='text-start text-dark'>
                                <img src={Phone} alt="phone Icon" className="phone-icon" />
                                <Link to="tel:+919766861473">
                                    <span className="phone-text"> +91 9766861473</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 mt-3 moreFooter text-start'>
                        <h3>Courses</h3>
                        <div className='footerCourses textCourse text-start' >
                            <p><Link to="/courses/full-stack-development-course">Full Stack Java Development</Link></p>
                            <p><Link to="/courses/web-development-course">Web Development</Link></p>
                            <p><Link to="/courses/salesforce-course">Salesforce</Link></p>
                            <p><Link to="/courses/digital-marketing-course">Digital Marketing</Link></p>
                            <p><Link to="/courses/powerbi-course">Power BI</Link></p>
                            <p><Link to="/courses/ui-ux-design-course">UI/ UX Design</Link></p>
                            <p><Link to="/courses/data-science-course">Data Science</Link></p>
                          
                           

                        </div>
                    </div>
                    <div className='col-md-2 mt-3 moreFooter text-start'>
                        <h3>Services</h3>
                        <div className=' footerCourses text-start' >
                            <p><Link to="/">Digital Marketing</Link></p>
                            <p><Link to="/">Lead Generation</Link></p>
                            <p><Link to="/">Google Ads</Link></p>
                            <p><Link to="/contact">Wev Development</Link></p>
                            <p><Link to="/contact">Web Application</Link></p>
                            <p><Link to="/contact">Billing Software</Link></p>
                            <p><Link to="/contact">Graphic Design</Link></p>
                        </div>
                    </div>

                    <div className='col-md-2 mt-3 moreFooter text-start'>
                        <h3>Quick Links</h3>
                        <div className='footerCourses text-start'>
                            <p><Link to="/">Home</Link></p>
                            <p><Link to="/about">About Us</Link></p>
                            <p><Link to="/services">Our Services</Link></p>
                            <p><Link to="/courses/full-stck-development-course">Courses</Link></p>
                            <p><Link to="/enroll">Enroll Now</Link></p>
                            <p><Link to="/placement">Placements</Link></p>
                            <p><Link to="/project">Candidates Projects</Link></p>
                            
                        </div>
                    </div>
                   

                   
                </div>
            </div>
        </div>
    )
}

export default Footer
