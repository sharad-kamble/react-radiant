import React from 'react';
import './About.css';
import aboutUs from "../../assets/images/aboutus.png";
import Whyus from '../../assets/images/Whyus.png';
import aboutUs6 from '../../assets/images/aboutus6.png';
import aboutUs4 from '../../assets/images/powerbi.png';
import aboutUs5 from '../../assets/images/salesforce.png';

const About = () => {
  return (
    <div>
      {/* section 1 */}
      <div className='container-fluid AboutUs'>
        <div className='container py-5 aboutText'>
          <p>
            Radiant IT Services Pvt Ltd is an IT company. We provide both IT services and software training programs. We offer a diverse range of business solutions, like Web Development, ERP Development, Billing Software Development, CRM Software Development, and Digital Marketing services.  We understand that mastering technology is no longer optional, it's essential. That’s why,
            We have various training programs, including Web Development, Full Stack Development, Salesforce, Python, Power BI, and Digital Marketing.
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className='container mt-5'>
        <div className='row aboutimg1'>
          <img src={aboutUs} />
        </div>
        <div className='row '>
          <h1 className='text-center my-4 abouth3'><strong>ABOUT US</strong></h1>
          <p className='text-center aboutPara'>

            At Radiant IT Services, we understand Proficiency in technology has evolved from being a choice to becoming a necessity in today's context.
            Thus, we have developed a unique way to teach, train, and engage with technology. Our training blends hands-on practice with practical projects.

          </p>

          <p className='text-center aboutPara'>
            What makes us different is that we have established strategic partnerships with various IT companies in Pune and beyond, allowing our candidates to work on real-world projects and acquire the practical knowledge and skills the market seeks. We offer courses with a placement guarantee. One can attend both online classes and offline classes.
          </p>

          <p className='text-center aboutPara'>

            Our comprehensive range of IT services extends beyond education. Our services are Web Development, ERP and billing Software Development, CRM Software Development, Android App Development, and Digital Marketing services such as PPC (Pay-Per-Click), Content Marketing, Search Engine Optimization, and Social Media Marketing (SMM).
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className='container-fluid mt-5 AboutUs'>
        <div className='container '>
          <div className='row py-5'>
            <div className='col-md-6 aboutImg text-center'>
              <img src={Whyus} alt="About Us Image" className='rounded-3 img-fluid mx-auto d-block' />
            </div>
            <div className='col-md-6'>
              <h6 className='text-center abouth6' style={{ fontSize: "37px" }}>Why us?</h6>
              <p className='abouth4 mt-3'>
                You need to upgrade your skill
                set to land a high-paying job.
                Radiant IT Services training
                curriculum helps you acquire
                a competitive skill and technique
                to stay ahead in the job market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className='container'>
        <div className='row'>
          <h3 className='text-center py-5 abouth3'>
            <strong>
              HOW WE DO IT
            </strong>
          </h3>
          <div className='col-md-6'>
            <p className='abouth4 m-5'>
              Develop a Critical-Thinking skill with our training program. We train you on live projects, conduct hackathons, and organize
              events like Radiant's Shark Tank program.

            </p>
          </div>
          <div className='col-md-6 aboutImg text-center'>
            <img src={aboutUs} className='img-fluid mx-auto d-block' style={{ height: "300px", width: "500px" }} />
            <h4 className='py-3'><strong>ADD VIDEO</strong></h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 aboutImg text-center'>
            <img src={aboutUs4} className='img-fluid mx-auto d-block' style={{ height: "300px", width: "500px" }} />
            <h4 className='py-3'><strong>ADD IMAGE</strong></h4>
            <img src={aboutUs5} className='img-fluid mx-auto mt-5 d-block' style={{ height: "300px", width: "500px" }} />
            <h4 className='py-3'><strong>ADD IMAGE</strong></h4>
          </div>

          <div className='col-md-6 aboutImg text-center'>
            <img src={aboutUs6} className='img-fluid mx-auto mt-5 d-block' style={{ height: "600px" }} />
            <h4 className='py-3'><strong>ADD IMAGE</strong></h4>
          </div>
        </div>
      </div>

      {/* section 5 */}


      {/* section 6 */}
      <div className="abtdiff container-fluid">
        <div className='container'>
          <div className='row py-5'>
            <div className='col-md-6'>
              <h2 className='abouth2 text-white'><strong>Why We're Different</strong></h2>
              <p className='pt-4 text-white'>
                “Joining Radiant IT Services Pvt Ltd comes with a bunch
                of great perks! Get a guaranteed placement, work on
                real projects, develop awesome problem-solving skills
                and choose between online and offline classes. Plus,
                we've got your back with complete interview preparation
                - mock rounds till you are prepared. We have the best
                post-training support. It's your ticket to a successful
                and invoking journey into the world of IT. Come learn
                and grow with us!"
              </p>

              <div className="text-center">
                <button type="submit" className="joinUsBtn mt-5 mb-5">
                  <strong>JOIN US</strong>
                </button>
              </div>
            </div>
            <div className='col-md-6 aboutImg text-center'>
              <img src={Whyus} alt="About Us Image" className='img-fluid mx-auto py-4 d-block' style={{ height: "300px", width: "400px" }} />
              <h4 className='text-white'><strong>ADD VIDEO</strong></h4>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
