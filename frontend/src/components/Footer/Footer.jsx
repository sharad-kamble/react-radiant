import React from 'react';
import radiantLogo from '../../assets/images/logo.png';
import { FaFacebook, FaLinkedin,FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Gmail from '../../assets/images/Gmail.png'

import Phone from '../../assets/images/Phone.png'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    
    const youtubeUrl = 'https://www.youtube.com/@radiantitservices';
    const facebookUrl = 'https://www.facebook.com/RadiantITServices';
    const whatsappUrl = 'https://api.whatsapp.com/message/BDLTDHOLEF4MB1?autoload=1&app_absent=0';
    const linkedinUrl = 'https://www.linkedin.com/company/radiant-it-services/';
    const instagramUrl = 'https://www.instagram.com/radiant_it_services/';
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (

        <div>
            <div className='container mt-5'>
                <div className='row my-5'>
                    <div className='col-md-5'>
                        <img src={radiantLogo} style={{ maxHeight: "80px", width: "200px" }} />
                        <header className="d-flex justify-content-start container my-3">
                            <Link to={facebookUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
                                {/* <img src={Facebook} style={{height:"35px"}}  alt="" className="facebook-icon" /> */}
                                <FaFacebook size={25} className="facebook-icon" />
                            </Link>
                            <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
                                {/* <img src={Whatsapp} style={{height:"35px"}} alt="" className="whatsapp-icon" /> */}
                                <IoLogoWhatsapp size={27} className="whatsapp-icon" />
                            </Link>

                            {/* Link the LinkedIn icon to the LinkedIn URL */}
                            <Link to={linkedinUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
                                {/* <img src={Linkedin} style={{height:"35px"}} alt="" className="linkedin-icon" /> */}
                                <FaLinkedin size={25} className="linkedin-icon" />
                            </Link>

                            {/* Link the Instagram icon to the Instagram URL */}
                            <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
                                {/* <img src={Instagram} style={{height:"35px"}} alt="" className="instagram-icon" /> */}
                                <FaInstagramSquare size={25} className="instagram-icon" />
                            </Link>
                            <Link to={youtubeUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
                                {/* <img src={YouTubeIcon} alt="YouTube" className="youtube-icon" /> */}
                                <FaYoutube size={30} className="Youtube-icon" />
                            </Link>

                        </header>
                        <h4>Address</h4>
                        <p className='text-start text-dark'>
                            City Vista, Kolte Patil Downtown, Office No. 13/14, 6th Floor,<br /> "B" Building,
                            Fountain Road, opp. Victorious Kids School, <br /> Kharadi,
                            Pune, Maharashtra 411014
                        </p>
                        <div className='text-start text-dark'>
                            {/* Email Section */}
                            <Link to="mailto:info@radiantitservices.in">
                                <img src={Gmail} alt="Email Icon" className="email-icon" />
                                <span className="email-text"> info@radiantitservices.in</span>
                            </Link>
                        </div>
                        <div className='text-start text-dark'>
                            <img src={Phone} alt="phone Icon" className="phone-icon" />
                            <Link to="tel:+91 7077070030">
                                <span className="phone-text"> +91 7077070030 / +91 8483811160</span>
                            </Link>
                        </div>

                    </div>

                    <div className='col-md-3 mt-3 moreFooter text-start'>
                        <h3>Courses</h3>
                        <div className='footerCourses textCourse text-start' >
                            <p><Link to="/courses/full-stack-development-course" onClick={scrollToTop}>Full Stack Java Development</Link></p>
                            <p><Link to="/courses/web-development-course" onClick={scrollToTop}>Web Development</Link></p>
                            <p><Link to="/courses/salesforce-course" onClick={scrollToTop}>Salesforce</Link></p>
                            <p><Link to="/courses/digital-marketing-course" onClick={scrollToTop}>Digital Marketing</Link></p>
                            <p><Link to="/courses/powerbi-course" onClick={scrollToTop}>Power BI</Link></p>
                            <p><Link to="/courses/ui-ux-design-course" onClick={scrollToTop}>UI/ UX Design</Link></p>
                            <p><Link to="/courses/data-science-course" onClick={scrollToTop}>Data Science</Link></p>



                        </div>
                    </div>
                    <div className='col-md-2 mt-3 moreFooter text-start'>
                        <h3>Services</h3>
                        <div className=' footerCourses text-start' >
                            <p><Link to="/services" onClick={scrollToTop}>Digital Marketing</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Lead Generation</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Google Ads</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Wev Development</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Web Application</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Billing Software</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Graphic Design</Link></p>
                        </div>
                    </div>

                    <div className='col-md-2 mt-3 moreFooter text-start'>
                        <h3>Quick Links</h3>
                        <div className='footerCourses text-start'>
                            <p><Link to="/" onClick={scrollToTop}>Home</Link></p>
                            <p><Link to="/about" onClick={scrollToTop}>About Us</Link></p>
                            <p><Link to="/services" onClick={scrollToTop}>Our Services</Link></p>
                            <p><Link to="/courses/full-stack-development-course" onClick={scrollToTop}>Courses</Link></p>
                            <p><Link to="/enroll-now" onClick={scrollToTop}>Enroll Now</Link></p>
                            <p><Link to="/placement" onClick={scrollToTop}>Placements</Link></p>
                            <p><Link to="/projects" onClick={scrollToTop}>Candidates Projects</Link></p>

                        </div>
                    </div>
                    <div className='container-fluid'>
                        <hr />
                        <div className='container my-4'>
                            <p className='text-center'><strong>Copyrights © 2024 The Radiant IT Services Pvt. Ltd.</strong></p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Footer
