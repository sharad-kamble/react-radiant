import React, { useEffect } from 'react';
import './fullstack.css';
import Ellipse from '../../../assets/images/Ellipse.png';
import { MdPhone } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa6";
import CourseFeature from "../../../assets/images/CourseFeature.png";
import CourseDurationImg from "../../../assets/images/CourseDurationImg.png";
import StudentReview from "../../.././assets/images/StudentReview.png";
import VaishnaviGangawane from "../../../assets/images/VaishnaviGangawane.png"
import RahulDhepe from "../../../assets/images/RahulDhepe.png"
import ShraddhaAntad from "../../../assets/images/ShraddhaAntad.png"
import Contactellips from "../../../assets/images/Contactellips.png"


const Courses = () => {
  return (
    <div>
      <div className='container-fluid fullstkCon'>
        <div className='container py-5'>
          <h1 className='abouth3 text-center pb-2'><strong>FULL STACK JAVA DEVELOPMENT</strong></h1>
          <p className='text-center fullstkPara'>
            Embark on a transformative learning experience with our Full Stack Java Development Course,<br />

            designed to equip you with the skills and knowledge needed to become a proficient developer <br />

            capable of handling both front-end   and back-end aspects of modern applications. Whether<br />

            you're a seasoned programmer or a newcomer to the world of Java development, this course<br />

            is tailored to empower you with the tools essential for building robust and scalable applications.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className='container' >
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
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="plus-sign "> + </span> HTML
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Basic Introduction</li>
                      <li>Tag & Attribute</li>
                      <li>Formatting Tag</li>
                      <li>Phrase Tag</li>
                      <li>Style Attribute</li>
                      <li>Favicon</li>
                      <li>HTML Color</li>
                      <li>HTML Comments</li>
                      <li>HTML Images</li>
                      <li>HTML Link</li>
                      <li>ID & Class</li>
                      <li>HTML Lists</li>
                      <li>HTML Video</li>
                      <li>HTML Audio</li>
                      <li>Iframe</li>
                      <li>Table</li>
                      <li>Website Layout</li>
                      <li>Form</li>
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
                    <span className="plus-sign "> + </span> CSS
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Basic Introduction</li>
                      <li>Syntax, Selector</li>
                      <li>Type Of CSS</li>
                      <li>CSS Comments</li>
                      <li>CSS Border</li>
                      <li>CSS Outline</li>
                      <li>CSS Box Model</li>
                      <li>Margin</li>
                      <li>Padding</li>
                      <li>Text Alignment</li>
                      <li>Text Decoration</li>
                      <li>Text Spacing</li>
                      <li>Text Shadow</li>
                      <li>CSS Link</li>
                      <li>CSS Position</li>
                      <li>CSS z-index</li>
                      <li>CSS Overflow</li>
                      <li>CSS Opacity</li>
                      <li>CSS Box Shadow</li>
                      <li>CSS Combinator</li>
                      <li>Web Development Syllabus</li>
                      <li>Gradients</li>
                      <li>Float & Clear</li>
                      <li>Rounded Corners</li>
                      <li>Transition</li>
                      <li>Display</li>
                      <li>Display Inline-Block</li>
                      <li>Pseudo-Class</li>
                      <li>Pseudo-Element</li>
                      <li>Navigation Bar</li>
                      <li>CSS Dropdown</li>
                      <li>Image Gallery</li>
                      <li>CSS Counters</li>
                      <li>CSS Lists</li>
                      <li>CSS Font</li>
                      <li>CSS Font-Family</li>
                      <li>2D Transform</li>
                      <li>3D Transform</li>
                      <li>Animation</li>
                      <li>Image Reflection</li>
                      <li>Styling Images</li>
                      <li>CSS Button</li>
                      <li>Pagination</li>
                      <li>User Interface</li>
                      <li>Box Sizing</li>
                      <li>Multiple Columns</li>
                      <li>Media Queries</li>
                      <li>Responsive Website</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>

            {/* Third  */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <span className="plus-sign "> + </span> JavaScript
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Js Introduction</li>
                      <li>Js Statements</li>
                      <li>Keywords</li>
                      <li>Syntax & Js Literals</li>
                      <li>Variables</li>
                      <li>Var, Let, Const</li>
                      <li>Local & Global Variables</li>
                      <li>Js Comments</li>
                      <li>Expression</li>
                      <li>Array Objects</li>
                      <li>Array Method</li>
                      <li>Data Type</li>
                      <li>String, Number, Boolean</li>
                      <li>Function</li>
                      <li>Js Date Object</li>
                      <li>Js Math Object</li>
                      <li>Number Method</li>
                      <li>condational Statements</li>
                      <li>If & Else</li>
                      <li>Js Popup Boxes</li>
                      <li>Sets & Map</li>
                      <li>Object Method</li>
                      <li>Object Access</li>
                      <li>Js Class</li>
                      <li>Object Constructors</li>
                      <li>Object Constructors</li>
                      <li>Class Interface</li>
                      <li>Call backs</li>
                      <li>DOM</li>
                      <li>JS Errors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Four */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <span className="plus-sign "> + </span> Bootstrap
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Bootstrap Introduction and Installation</li>
                      <li>Bootstrap Typography Classes</li>
                      <li>Bootstrap Tables</li>
                      <li>Bootstrap Images</li>
                      <li>Bootstrap Colours</li>
                      <li>Bootstrap Jumbotron</li>
                      <li>Bootstrap Alerts</li>
                      <li>Bootstrap Buttons</li>
                      <li>Bootstrap Button Group</li>
                      <li>Bootstrap Badges</li>
                      <li>Bootstrap Spinners</li>
                      <li>Bootstrap Pagination</li>
                      <li>Bootstrap List Group</li>
                      <li>Bootstrap Cards</li>
                      <li>Bootstrap Dropdowns</li>
                      <li>Bootstrap Collapse</li>
                      <li>Bootstrap Navs</li>
                      <li>Bootstrap NavBars</li>
                      <li>Bootstrap Carousel</li>
                      <li>Bootstrap Modal</li>
                      <li>Bootstrap Tooltips</li>
                      <li>Bootstrap Popover</li>
                      <li>Bootstrap Toasts</li>
                      <li>Bootstrap Scrollspy</li>
                      <li>Bootstrap Offcanvas</li>
                      <li>Bootstrap Utilities</li>
                      <li>Bootstrap Flex</li>
                      <li>Bootstrap Grid</li>
                      <li>Bootstrap form</li>
                      <li>Bootstrap Checkboxs</li>
                      <li>Bootstrap Radio Button</li>
                      <li>Bootstrap Range</li>
                      <li>Bootstrap validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Five */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <span className="plus-sign "> + </span> WordPress
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Dashboard</li>
                      <li>Settings</li>
                      <li>Categories</li>
                      <li>Media</li>
                      <li>Links</li>
                      <li>Pages</li>
                      <li>Comments</li>
                      <li>Plugins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <span className="plus-sign "> + </span> Angular
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Introduction & Installation</li>
                      <li>Creating first Application</li>
                      <li>Components</li>
                      <li>Event Binding</li>
                      <li>Ng Module</li>
                      <li>File Structure</li>
                      <li>Data Binding</li>
                      <li>Template</li>
                      <li>Directives</li>
                      <li>Pipes</li>
                      <li>Routing</li>
                      <li>Services</li>
                      <li>Forms</li>
                      <li>Validation</li>
                      <li>Animation</li>
                      <li>Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Seven */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <span className="plus-sign "> + </span> Core Java
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Control System</li>
                      <li>Java Object class</li>
                      <li>Java Inheritance</li>
                      <li>Java Polymorphism</li>
                      <li>Java Abstraction</li>
                      <li>Java Encapsulation</li>
                      <li>Java String</li>
                      <li>Exception Handling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Eight*/}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingEight">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                    <span className="plus-sign "> + </span> Advance Java
                  </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Java Multithreading</li>
                      <li>Java Networking</li>
                      <li>Java AWT & Events</li>
                      <li>Java Swing</li>
                      <li>Java Collection</li>
                      <li>Java JDBC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            {/* nine */}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingNine">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                    <span className="plus-sign "> + </span> Spring (Framework)
                  </button>
                </h2>
                <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Spring IDE</li>
                      <li>Depending Injection</li>
                      <li>Spring AOP</li>
                      <li>Spring JDBC Template</li>
                      <li>Spring MNC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ten */}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingTen">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                    <span className="plus-sign "> + </span> Hibrnet (Framework)
                  </button>
                </h2>
                <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>HB Architecture</li>
                      <li>HB Log4j</li>
                      <li>Inheritance Mopping</li>
                      <li>TX Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingEleven">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                    <span className="plus-sign "> + </span> Node.JS
                  </button>
                </h2>
                <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Node.JS Modules</li>
                      <li>Node.JS HTTP Modules</li>
                      <li>Node.JS File System</li>
                      <li>Node.JS URL Module</li>
                      <li>Node.JS NPM</li>
                      <li>Node.JS Events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingTwelve">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                    <span className="plus-sign "> + </span> React
                  </button>
                </h2>
                <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>React ES6</li>
                      <li>React Render HTML</li>
                      <li>React JSX</li>
                      <li>React Components</li>
                      <li>React Class</li>
                      <li>React Props</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingThirteen">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                    <span className="plus-sign "> + </span> Mongo DB
                  </button>
                </h2>
                <div id="flush-collapseThirteen" className="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Mongo DB Data Modeling</li>
                      <li>Create Database</li>
                      <li>Create Collection</li>
                      <li>Data Types</li>
                      <li>Insert Document</li>
                      <li>Query Document</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>

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

            <div className='FullstackCard2 p-4 mt-4 py-4 '>
              <div>
                <h2 className='text-light text-center mx-4 py-3'>
                  BENEFITS OF THE
                  COURSE
                </h2>
              </div>
              <div>
                <ul>
                  <li>Holistic Skill Set</li>
                  <li>Project-Based Learning</li>
                  <li>Mentorship and Guidance </li>
                  <li>Career Advancement </li>
                  <li>Adaptive Curriculum</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 3 */}
      {/* <div className="container">
        <img src={ Contactellips }  alt="" />
      </div> */}

      <div className='container-fluid fullstackCourseDetail'>
        <div className='container fullstackCrsDetail mt-5'>
          <div className='row m-4'>
            <h2 className='courseDetailText text-center py-2'>COURSE DETAILS</h2>
            <p className='text-center fs-5 py-2'>
              At the end of the Java Training Program you will be able to write professional<br />
              applications using core java. This course will take you thoroughly through<br />
              each and every detail of core java. You will be doing a lots of hands on for each<br />
              topics along  with advance assignments, which will make sure that you have<br />
              understood the topics in detail. The course will have lots of online tests,<br />
              to assess understanding.
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
            <div className='col-md-6 text-center'>
              <img src={CourseDurationImg} alt="Course Duration Img" className="img-fluid mr-2" />
            </div>
            <div className='col-md-6'>
              <h2 className='courseDetailText mt-5 '>COURSE DURATION</h2>
              <p className='fs-5 py-2 mt-5'>
                8 Months: Immerse yourself in a
                comprehensive 8-month program
                that covers the entire spectrum of
                Full Stack Java Development.
                This extended timeline allows for
                in-depth exploration and mastery
                of both front-end and back-end
                technologies.

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
                    I have completed Full Stack Web
                    Development from Radiant IT Services.
                    It is a good institute for placement and
                    gave me good knowledge thanks to the
                    trainers. It was a great experience.
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
                    Best Training and placement facilities in
                    Pune, which gives you best knowledge
                    and placement. I have completed Java
                    Full Stack Course through Radiant IT
                    Services nd got placed in Amazone.
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
                    I enrolled in Radiant’s Java full-stack
                    course. I found my trainers
                    very friendly and helpful mentor. Belongs to non-
                    technical, it's not that easy to
                    change field and move to IT. But here in
                    Radiant things are easy to learn.
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

export default Courses