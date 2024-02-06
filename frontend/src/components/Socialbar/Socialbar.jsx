// src/components/Header.js
import React from 'react';
import { FaFacebook, FaWhatsapp, FaSquareInstagram, FaLinkedin, FaEnvelope, FaPhone, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
// import Whatsapp from '../../assets/images/Whatsapp.png'
// import Facebook from '../../assets/images/Facebook.png'
// import Linkedin from '../../assets/images/Linkedin.png'
// import Instagram from '../../assets/images/Instagram.png'
import './Socalbar.css';

const Socialbar = () => {
  const youtubeUrl = 'https://www.youtube.com/@radiantitservices';
  const facebookUrl = 'https://www.facebook.com/RadiantITServices';
  const whatsappUrl = 'https://api.whatsapp.com/message/BDLTDHOLEF4MB1?autoload=1&app_absent=0';
  const linkedinUrl = 'https://www.linkedin.com/company/radiant-it-services/';
  const instagramUrl = 'https://www.instagram.com/radiant_it_services/';
  return (
    <div className='header'>
      <header className="d-flex justify-content-between p-3 container">
        {/* Column for contact and email */}
        <div className="contact-info">
          <div className='text-center text-dark mx-1' >
            {/* Email Section */}
            <MdEmail size={20} className=" email-icon" />
            <span className="email-text">info@radiantitservices.in</span>
          </div>
          <div className='text-center text-dark'>
            <MdPhone size={20} className="phone-icon" />
            <span className="phone-text">+91 7077070030</span>
          </div>
        </div>

        {/* Column for icons */}
        <div className="social-icons">
          <Link to={facebookUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
            {/* <img src={Facebook} style={{height:"35px"}}  alt="" className="facebook-icon" /> */}
            <FaFacebook size={25} className="facebook-icon" />
          </Link>
          <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mx-2">
            {/* <img src={Whatsapp} style={{height:"35px"}} alt="" className="whatsapp-icon" /> */}
            <IoLogoWhatsapp  size={27} className="whatsapp-icon" />
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
        </div>
      </header>
    </div>
  );
};

export default Socialbar;
