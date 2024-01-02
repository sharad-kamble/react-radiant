// src/components/Header.js
import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Socalbar.css';


const Socialbar = () => {
  return (
    <div  className='header '>
      <header className="d-flex justify-content-end p-3 container ">
        <FaFacebook size={25} className="mx-2 facebook-icon" />
        <FaWhatsapp size={25} className="mx-2 whatsapp-icon" />
        <FaLinkedin size={25} className="mx-2 linkedin-icon" />
        <FaInstagram size={25} className="mx-2 mr-3 instagram-icon" />
        
      </header>
    </div>
  );
};

export default Socialbar;