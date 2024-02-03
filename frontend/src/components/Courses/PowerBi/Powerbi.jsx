import React from 'react'
import './Powerbi.css';
import Ellipse from '../../../assets/images/Ellipse.png';
import { MdPhone } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa6";
import CourseFeature from "../../../assets/images/CourseFeature.png";
import CourseDurationPowerbi from "../../../assets/images/CourseDurationPowerbi.png";
// import StudentReview from "../../.././assets/images/StudentReview.png";
import VaishnaviGangawane from "../../../assets/images/VaishnaviGangawane.png"
import RahulDhepe from "../../../assets/images/RahulDhepe.png"
import ShraddhaAntad from "../../../assets/images/ShraddhaAntad.png"
import { Helmet } from 'react-helmet';

const Powerbi = () => {
  return (
    <div>
      <Helmet>
        <title>PowerBi Course </title>
        <meta name="description" content="Radiant’s Power BI certification training in Pune will help you learn Power BI concepts like Microsoft Power BI Desktop layouts, BI reports, and dashboards. " />
        <meta name="keywords" content="power bi classes in pune, power bi course in pune, power bi training in pune, power bi classes, power bi course, power bi training, power bi classes near me, best power bi classes in pune" />
      </Helmet>
      <div className='container-fluid fullstkCon'>
        <div className='container py-5'>
          <h1 className='abouth3 text-center pb-2'><strong>POWER BI</strong></h1>
          <p className='text-center fullstkPara'>
            Unlock the power of data visualization with our comprehensive Power BI<br />

            course. Over the span of 4 months, you will delve into the intricacies of Microsoft<br />

            Power BI, from importing and transforming data to creating visually appealing<br />

            dashboards. This course is designed to equip you with the skills needed<br />

            to extract actionable insights and present them in a compelling manner.
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
            <div className="accordion accordion-flush my-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="plus-sign "> + </span>Introduction To Power BI
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>A Microsoft tool for business analytics, enabling data visualization and analysis.</li>
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
                    <span className="plus-sign "> + </span> Data Import and Transformation
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>

                        Effortlessly import data from various sources, including databases and cloud services. Power BI's robust connectivity options ensure seamless integration. Leverage Power Query for intuitive data transformation, cleaning, and shaping. The Query Editor provides a user-friendly interface for advanced tasks, allowing the creation of well-structured datasets. This process enhances data quality, enabling effective analysis and informed decision-making.</li>
                      {/* <li>Marquee</li>
                      <li>Forms</li>
                      <li>Table</li>
                      <li>Tag’s & Attributes</li> */}
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
                    <span className="plus-sign "> + </span> Data Modeling with Relationships
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>

                        Power BI enables efficient data modeling by establishing relationships between tables. This feature allows for a unified view, enhancing analysis and visualization of interconnected data points for more meaningful insights.</li>
                      {/* <li>Event Handling</li>
                      <li>Ajax Requests</li>
                      <li>ES6+ Features</li> */}
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
                    <span className="plus-sign "> + </span> Creating Visualisations
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>

                        Power BI empowers users to create compelling visualizations effortlessly. With a diverse range of charts, graphs, and customizable elements, users can transform raw data into insightful and engaging visuals. This capability allows for the effective communication of data-driven insights, making complex information easily understandable and actionable.</li>
                      {/* <li>Typography</li>
                      <li>Forms</li>
                      <li>Components</li> */}
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
                    <span className="plus-sign "> + </span> Power BI Dax (Data Analysis Expressions)
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>DAX, or Data Analysis Expressions, is a formula language in Power BI used for creating custom calculations and aggregations on data. It extends the capabilities of Power BI by allowing users to define sophisticated measures, calculated columns, and tables. DAX functions enable advanced analytics and manipulation of data, providing a powerful tool for transforming raw data into meaningful insights within Power BI reports and dashboards.</li>
                      {/* <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li> */}
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
                    <span className="plus-sign "> + </span> Dashboard Design and Interactivity
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>

                        In Power BI, crafting visually appealing dashboards with interactive elements is key. Users can design dashboards by arranging visuals, charts, and KPIs in a meaningful layout. Power BI's interactive features enable users to drill down into specific details, filter data dynamically, and explore insights in real-time. This combination of thoughtful design and interactivity ensures that Power BI dashboards deliver a compelling and user-friendly experience, facilitating a deeper understanding of the underlying data.</li>
                      {/* <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li> */}
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
                    <span className="plus-sign "> + </span> Power BI Service For Report Sharing
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>

                        Power BI Service is a cloud platform allowing seamless sharing and collaboration on Power BI reports. Reports created in Power BI Desktop can be securely published and accessed via web browsers, ensuring real-time access for stakeholders and facilitating effective collaboration across teams.</li>
                      {/* <li>Plugins</li>
                      <li>Customization</li>
                      <li>Posts and Pages</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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
            {/* <div className="accordion accordion-flush py-3" id="accordionFlushExample">
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
            </div> */}

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

            <div className='PowerBiCard p-4 mt-4 py-3 '>
              <div>
                <h2 className='text-light text-center mx-4 py-4'>
                  BENEFITS OF THE
                  COURSE
                </h2>
              </div>
              <div>
                <ul>
                  <li>Data Analytics Proficiency</li>
                  <li>Application Career </li>
                  <li>Career Enhancement </li>
                  <li>Business Decision Support </li>

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
              A Power BI course equips learners with the skills to leverage Microsoft's powerful
              data analytics tool. It covers data visualization, report creation, and data
              manipulation using Power BI's intuitive interface. Students learn to connect
              various data sources, create compelling visuals, and generate insightful
              reports and dashboards. The course caters to beginners and advanced users,
              providing hands-on training  to analyze data effectively, make informed
              decisions, and enhance business intelligence capabilities
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
              <img src={CourseDurationPowerbi} alt="Course Duration Img" className="img-fluid mr-2" />
            </div>
            <div className='col-md-6'>
              <h2 className='courseDetailText mt-5 '>COURSE DURATION</h2>
              <p className='fs-5 py-2 mt-5'>
                4 Months: Dive into the world of data
                visualization and analytics with our
                4-month Power BI course. Learn to
                transform raw data into meaningful
                insights and compelling visualizations

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
              <div className="ReviewCard card">
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
              <div className="ReviewCard card">
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
              <div className="ReviewCard card">
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
                    Radiant things are easy to learn
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

export default Powerbi