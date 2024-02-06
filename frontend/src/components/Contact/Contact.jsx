import React from 'react';
import "./Contact.css";
import { MdEmail, MdPhone } from 'react-icons/md';
import Gmail from '../../assets/images/Gmail.png'
import Phone from '../../assets/images/Phone.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const Contact = () => {


  return (
    <div className="container mt-5">
      <Helmet>
        <title>Contact Us </title>
        <meta name="description" content="Radiant IT Services Pvt Ltd | Best IT training company in Kharadi, Pune | With 100% Job Guarantee we provide the best IT courses in Pune." />
        <meta name="keywords" content="online it certification programs, front-end web development course, Best IT Training Institute, best software training institutes in pune, software training institutes" />
      </Helmet>
      <h2 className="text-left getInTouch">GET IN TOUCH</h2>
      <div className="row justify-content-center mt-4">

        <div className="col-12 col-md-6 pb-5">
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Full Name -</label>
              <input
                type="text"
                className="form-control mt-2 custom-input"
                id="formGroupExampleInput"

              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="formGroupExampleInput2">Mobile No. -</label>
              <input
                type="number"
                className="form-control mt-2 custom-input"
                id="formGroupExampleInput2"

              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="formGroupExampleInput2">Email Id. -</label>
              <input
                type="email"
                className="form-control mt-2 custom-input"
                id="formGroupExampleInput2"

              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="formGroupExampleInput2">Message. -</label>
              <textarea
                className="form-control mt-2 custom-input"
                id="formGroupExampleInput2"

              ></textarea>
            </div>
            <div className='text-center'>
              <button type="button" className="sendMsgBtn mt-5">
                Send Message
              </button>
            </div>
          </form>

        </div>
        {/* Map Column */}
        <div className="col-12 col-md-6 pb-5">
          <div className=" map map-height-two rounded map-gray border-0">
            <div className="card-body p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60519.95789158308!2d73.86964102469364!3d18.551602471963854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3f64d159451%3A0xb66f315b2d5e1990!2sRadiant%20IT%20Services%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1658775467808!5m2!1sen!2sin"
                allowFullScreen
                className="rounded"
                style={{ border: '0', width: '100%', height: '350px' }}
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className='row ' o>
        <h3 className='text-center getInTouch'><strong>Pune, Maharashtra</strong></h3>
        <p className='text-center text-dark'>
          City Vista, Kolte Patil Downtown, Office No. 13/14, 6th Floor, "B" Building,<br />
          Fountain Road, opp. Victorious Kids School, Kharadi,<br />
          Pune, Maharashtra 411014
        </p>
        <div className='text-center text-dark'>
          {/* Email Section */}
          <Link to="mailto:info@radiantitservices.in">
            <img src={Gmail} alt="Email Icon" className="email-icon" />
            <span className="email-text"> info@radiantitservices.in</span>
          </Link>
        </div>
        <div className='text-center text-dark'>
          <img src={Phone} alt="phone Icon" className="phone-icon" />
          <Link to="tel:+91 9766861473">
            <span className="phone-text"> +91 7077070030</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
