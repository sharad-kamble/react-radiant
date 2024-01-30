import React from 'react'
import './Webdevelopment.css';
import Ellipse from '../../../assets/images/Ellipse.png';
import { MdPhone } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa6";
import CourseFeature from "../../../assets/images/CourseFeature.png";
import CourseDurationWebdev from "../../../assets/images/CourseDurationWebdev.png";
// import StudentReview from "../../.././assets/images/StudentReview.png";
// import VaishnaviGangawane from "../../../assets/images/VaishnaviGangawane.png"
// import RahulDhepe from "../../../assets/images/RahulDhepe.png"
// import ShraddhaAntad from "../../../assets/images/ShraddhaAntad.png"
import Poojaweb from "../../../assets/images/Poojaweb.png"
import Sapnaweb from "../../../assets/images/Sapnaweb.png"
import Nikitaweb from "../../../assets/images/Nikitaweb.png"
const Webdevelopment = () => {
  return (
    <div>
      <div className='container-fluid fullstkCon'>
        <div className='container py-5'>
          <h1 className='abouth3 text-center pb-2'><strong>WEB DEVELOPMENT </strong></h1>
          <p className='text-center fullstkPara'>
            Dive into the world of web development with our comprehensive Web Development Course,<br />

            designed to empower you with the skills and knowledge needed to create dynamic and <br />

            interactive websites. Whether you're a beginner or looking to enhance your existing skills,<br />

            this course is crafted to provide you with a thorough understanding of front-end and back-end <br />

            technologies, enabling you to build responsive and feature-rich web applications.

          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 py-4'>
            <h3 className='abouth3 courseCnt'><strong>COURSE CONTENT</strong></h3>
          </div>
          <div className=' col-md-6 text-end TextEnd py-4'>
            <img className='circleImg' src={Ellipse} alt='Circle Image' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className="accordion accordion-flush my-3" id="accordionFlushExample">
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

            {/* Six */}

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

            <div className='WebdevCard2  p-4 mt-4 py-4 '>
              <div>
                <h2 className='text-light text-center mx-4 py-3'>
                  BENEFITS OF THE <br />
                  COURSE
                </h2>
              </div>
              <div>
                <ul>
                  <li>Versatility in Web Technologies</li>
                  <li>Practical Application</li>
                  <li>Expert Guidance </li>
                  <li>Career Growth</li>
                  <li>Current and Relevant Curriculum</li>
                </ul>
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
              Explore the world of web development with our Web Development Course!
              Perfect for beginners or those looking to level up their skills.
              Learn to create awesome websites, both inside and out,
              with front-end and back-end technologies.
              Build amazing web apps that work great on any device!
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
              <img src={CourseDurationWebdev} alt="Course Duration Img" className="img-fluid mr-2" />
            </div>
            <div className='col-md-6'>
              <h2 className='courseDetailText mt-5 '>COURSE DURATION</h2>
              <p className='fs-5 py-2 mt-5'>
                Immerse yourself in a dynamic 6-month
                program that covers the entire
                spectrum of web development. This
                condensed timeline ensures a focused
                and efficient learning experience.
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
                      src={Poojaweb}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Pooja Dhingra
                        </h5>
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
                    Radiant It Services is the best place to learn
                    and upgrade your skills. Radiant It services
                    felt like a family. The tutors Monica Mam and
                    Shivam Sir are one of the most skilled people
                    who helped us to find confidence in coding
                    and grow in it.
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
                      src={Sapnaweb}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Sapna Mahajan</h5>
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
                    The environment for learning IT courses is
                    very good. Also, the Staff is very supportive
                    and Helpful to students. P.D. activities,
                    English Communication is Developed here.
                    Also, they provide good support for
                    Placement.
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
                      src={Nikitaweb}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Nikita patil</h5>
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
                    I recently completed my training as a front
                    -end developer with Radiant IT Services Pvt
                    Ltd, and I must say it was an excellent
                    experience. The trainers were knowledgeable
                    and supportive, and the curriculum was
                    well-structured and up-to-date.
                    Thank you, Radiant!
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

export default Webdevelopment