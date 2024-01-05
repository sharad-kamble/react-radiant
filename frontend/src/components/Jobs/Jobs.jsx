import React from 'react';
import './Jobs.css'
// import web from '../../assets/images/web.png';
import fullstack from '../../assets/images/fullstack.png';
import datascience from '../../assets/images/datascience.png';
import webdev from '../../assets/images/webdev.png';
import powerbi from '../../assets/images/powerbi.png';
import uiux from '../../assets/images/uiux.png';
import salesforce from '../../assets/images/salesforce.png';
import digitalmarketing from '../../assets/images/digitalmarketing.png';
const Jobs = () => {


  return (
    <div className="container">
      <h4 className="text-center joborientedText m-5"><strong>JOB ORIENTED COURSES</strong></h4>
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px ", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={datascience}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Data Science</h4>
              <p className="card-text">
                Discover the power of data with our Data Science course. Gain hands-on experience in analytics, machine learning, and data visualization, and more.
              </p>
              <a
                href="#"
                className=" btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Full Stack java</h4>
              <p className="card-text">
                Students will learn skills
                to develop both the frontend
                and backend of web applications
                using Java technologies, making
                them proficient full-stack Java
                developers.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={webdev}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Web Development</h4>
              <p className="card-text">
                Learn basic to advanced programming languages, such as
                HTML, CSS, Java, Angular, Node.Js, React, SQL and more. And apply your learnings
                on a live project.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={powerbi}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Power BI</h4>
              <p className="card-text">
                Students will learn and implement data
                visualization, dashboard
                creation, data modelling, and
                analysis techniques using
                Microsoft's powerful
                business intelligence tool.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={uiux}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">UI/UX Design</h4>
              <p className="card-text">
                Learn the principles behind
                user interface design and user
                experience design, covering
                topics such as Wireframe,
                Prototype, usability testing &
                design thinking methodologies.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block  "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={salesforce}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Salesforce</h4>
              <p className="card-text">
                Students will learn to architect,
                design, SOQL & SOSL, automation and implement scalable
                business solutions using Salesforce's
                platform in our Salesforce
                Design course.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={digitalmarketing}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Digital Marketing  </h4>
              <p className="card-text">
                Students will learn SEO, Social Media Marketing,
                SME, Canva, various DM tools and create a digital marketing
                projects.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </a>
            </div>
          </div>
        </div>
        {/* Radiant IT Services card content*/}
        <div className="col-md-8 mb-4">
          <div className="cardradiant card" style={{ borderRadius: "35px", backgroundColor: "#35C1D5", height: "500px" }}>

            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="radianttitle  card-title">"Radiant IT Services is known for it's
                industry standard, best quality training.
                Our innovative training methodologies
                help students build a strong technical
                base and secure a great career!" </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
