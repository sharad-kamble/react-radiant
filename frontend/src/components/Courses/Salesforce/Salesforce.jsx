import React from 'react'
import './Salesforce.css';
import Ellipse from '../../../assets/images/Ellipse.png';
import { MdPhone } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa6";
import CourseFeature from "../../../assets/images/CourseFeature.png";
import CourseDurationSales from "../../../assets/images/CourseDurationSales.png";
// import StudentReview from "../../.././assets/images/StudentReview.png";
import VaishnaviGangawane from "../../../assets/images/VaishnaviGangawane.png"
import RahulDhepe from "../../../assets/images/RahulDhepe.png"
import ShraddhaAntad from "../../../assets/images/ShraddhaAntad.png"


const Salesforce = () => {
  return (
    <div>
      <div className='container-fluid fullstkCon'>
        <div className='container py-5'>
          <h1 className='abouth3 text-center pb-2'><strong>SALESFORCE</strong></h1>
          <p className='text-center fullstkPara'>
            Become a Salesforce expert in our 6-month course that covers both administration and <br />

            development aspects. From understanding the fundamentals of Salesforce to mastering Apex<br />

            programming, this course is designed to prepare you for the challenges of efficiently utilizing<br />

            the Salesforce platform for business solutions. Hands-on projects and preparation for <br />

            Salesforce certifications are integral components.

          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 py-4'>
            <h3 className='abouth3 courseCnt'><strong>COURSE CONTENT</strong></h3>
          </div>
          <div className='col-md-6 text-end TextEnd py-4'>
            <img className='circleImg' src={Ellipse} alt='Circle Image' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="plus-sign "> + </span> Salesforce Admin
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Salesforce Data Model</li>
                      <li>Lightning Pages</li>
                      <li>Relationship of Standard & Custom Objects</li>
                      <li>Custom Object Formation</li>
                      <li>Salesforce Automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* secound */}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <span className="plus-sign "> + </span> Salesforce Developer
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Apex</li>
                      <li>Trigger</li>
                      <li>SOQL & SOSL</li>
                      <li>Handler Class</li>
                      <li>VF Page Component</li>
                      <li>Aura Component</li>
                      <li>LwC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Third  */}

            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <span className="plus-sign "> + </span> JavaScript
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>DOM Manipulation</li>
                      <li>Event Handling</li>
                      <li>Ajax Requests</li>
                      <li>ES6+ Features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Four */}

            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <span className="plus-sign "> + </span> Bootstrap
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Grid System</li>
                      <li>Typography</li>
                      <li>Forms</li>
                      <li>Components</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Five */}

            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <span className="plus-sign "> + </span> WordPress
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Six */}

            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <span className="plus-sign "> + </span> Angular
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Seven */}
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <span className="plus-sign "> + </span> Core Java
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Eight */}
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingEight">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                    <span className="plus-sign "> + </span> Advanced Java
                  </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Nine */}
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingNine">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                    <span className="plus-sign "> + </span> Spring (Frame Work)
                  </button>
                </h2>
                <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Ten */}
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingTen">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                    <span className="plus-sign "> + </span> Hibernate (Framework)
                  </button>
                </h2>
                <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Eleven */}
            {/*  *<div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingEleven">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                    <span className="plus-sign "> + </span> Node. JS
                  </button>
                </h2>
                <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>/}

            {/* Twelve */}
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingTwelve">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                    <span className="plus-sign "> + </span> React
                  </button>
                </h2>
                <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Thirteen */}
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingThirteen">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                    <span className="plus-sign "> + </span> Mongo DB
                  </button>
                </h2>
                <div id="flush-collapseThirteen" className="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Themes</li>
                      <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className='col-md-6'>

            {/* <div className="card">
                            <div className="card-body px-5">
                                <div>
                                    <h2 className=' mx-4 mt-4'>Contact Us</h2>
                                </div>
                                <div className="d-flex align-items-center py-2 mx-auto">
                                    <div className="bg-danger text-light rounded-circle  mx-4">
                                        <MdPhone size={20} className="phone-icon" />
                                    </div>
                                    <span className="phone-text">+91-9766861473</span>
                                    <div className="vr mx-2"></div>
                                    <div className="">+91-9766861473</div>
                                </div>
                            </div>
                        </div> */}
            <div className='fullStackRight'>


              <div className='FullstackCard p-4 py-4'>
                <div>
                  <h2 className='text-light mx-4 mt-4'>Contact Us</h2>
                </div>
                <div className="d-flex align-items-center  py-2">
                  <div className="bg-danger text-light rounded-circle  mx-4">
                    <MdPhone size={20} className="phone-icon" />
                  </div>
                  <span className="mx-4 phone-text text-white">+91-9766861473</span>
                  <div className="custom-vr mx-2"></div>
                  <div className="mx-4 text-light">+91-9766861473</div>
                </div>
                <div className="d-flex align-items-center  py-2">
                  <div className="bg-success text-light rounded-circle  mx-4">
                    <FaWhatsapp size={20} className="phone-icon" />
                  </div>
                  <span className="mx-4 phone-text text-white">+91-9766861473</span>
                  <div className="custom-vr mx-2"></div>
                  <div className="mx-4 text-light">+91-9766861473</div>
                </div>
              </div>

              <div className='FullstackCard2 h-100 p-4 mt-4 py-4 '>
                <div>
                  <h2 className='text-light text-center mx-4 py-5'>
                    BENEFITS OF THE <br />
                    COURSE
                  </h2>
                </div>
                <div>
                  <ul>
                    <li>Salesforce Platform Expertise</li>
                    <li>Certification Preparation Hands-On</li>
                    <li>Hands-On Projects </li>
                    <li>Career Advancement </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}

      <div className='container-fluid fullstackCourseDetail'>
        <div className='container fullstackCrsDetail mt-5'>
          <div className='row m-4'>
            <h2 className='courseDetailText text-center py-2'>COURSE DETAILS</h2>
            <p className='text-center fs-5 py-2'>
              A Salesforce course offers comprehensive training on utilizing the Salesforce
              platform for customer relationship management (CRM). It covers various aspects,
              including understanding Salesforce basics, customization, data management,
              automation, and building applications on the platform. Students learn to navigate
              Salesforce's interface, create and manage customer data, automate processes,
              and utilize Salesforce tools to optimize sales, marketing, and customer service
              functions.
            </p>

          </div>
        </div>

        {/* section 4 */}
        <div className='container mt-5'>
          <h2 className='text-center mb-5 courseDetailText'>KEY FEATURE</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'> 96 hours of high-quality course contents</h6>
              </div>

              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'> Live Project</h6>
              </div>
              <div className="d-flex align-items-center my-2 mx-5 ">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'>Experienced Faculty</h6>
              </div>

            </div>
            <div className="col-md-6">

              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'>Placement Support | Post training support</h6>
              </div>

              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'> Best Quality Training</h6>
              </div>
              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'>In-depth Course Contents</h6>
              </div>
            </div>
          </div>
        </div>


        {/* Section 5 */}

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={CourseDurationSales} alt="Course Duration Img" className="img-fluid mr-2" />
            </div>
            <div className='col-md-6'>
              <h2 className='courseDetailText mt-5 '>COURSE DURATION</h2>
              <p className='fs-5 py-2 mt-5'>
                6 Months: Become proficient in
                leveraging the power of Sales
                force with our 6-month course,
                covering both administration
                and development aspects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}

      <div className='container-fluid py-5 courseReview'>
        <div className='container'>
          <h2 className='ReviewText text-center mb-5 text-light'>REVIEWS</h2>
          <div className='row'>
            {/* Card 1 */}
            <div className='col-md-4 col-sm-12'>
              <div className="ReviewCard card h-100">
                <div className="row">
                  <div className='std col-md-6 text-end'>
                    <img
                      src={VaishnaviGangawane}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Vaishnavi
                        Gangawane</h5>
                      <div className='ReviewRating'>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    Just completed the Salesforce Training at
                    Radiant IT Services. Instructors were
                    knowledgeable and made complex concepts
                    easy to grasp. The hands-on exercises were
                    valuable, and the support was excellent.
                    Highly recommend!
                  </p>
                </div>
              </div>
            </div>
            {/* Card 1 */}
            <div className='col-md-4 col-sm-12'>
              <div className="ReviewCard card h-100">
                <div className="row">
                  <div className='std col-md-6 text-end'>
                    <img
                      src={ShraddhaAntad}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Shraddha Antad</h5>
                      <div className='ReviewRating'>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    Radiant IT Services' Salesforce Training
                    exceeded my expectations.
                    Comprehensive content, practical exercises,
                    and fantastic support. Feel well-prepared
                    to use Salesforce professionally.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 1 */}
            <div className='col-md-4 col-sm-12'>
              <div className="ReviewCard card h-100">
                <div className="row">
                  <div className='std col-md-6 text-end'>
                    <img
                      src={RahulDhepe}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Rahul Dhepe</h5>
                      <div className='ReviewRating'>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    Great course! Instructors were experts,
                    the content was up-to-date, and the
                    flexibility suited my schedule. The hands
                    -on experience was a highlight. Highly
                    recommended for anyone diving into
                    Salesforce.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Salesforce