import React from 'react';
import './Jobs.css'
import web from '../../assets/images/web.png';
import fullstack from '../../assets/images/fullstack.png';
const Jobs = () => {


  return (
    <div className="container">
      <h4 className="text-center joborientedText m-5"><strong>JOB ORIENTED COURSES</strong></h4>
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px ", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Data Science</h4>
              <p className="card-text">
                At The Radiant IT Solutions Pvt.
                Ltd, we offer a complete Digital
                Marketing Certification course
                that is perfect for students and
                working professionals.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                VIEW DETAILS
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
                Students with the skills needed
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
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Web Development</h4>
              <p className="card-text">
                Students will learn the skills
                necessary to become a Front-
                End Engineer.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Power BI</h4>
              <p className="card-text">
                Students will learn data
                visualization, dashboard
                creation, data modeling, and
                analysis techniques using
                Microsoft's powerful
                business intelligence tool.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">UI/ UX Design</h4>
              <p className="card-text">
                students will learn the principles
                of user interface and user
                experience design, covering
                topics such as wireframing,
                prototyping, usability testing &
                design thinking methodologies.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block  "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Salesforce</h4>
              <p className="card-text">
                Students will learn to architect,
                design, and implement scalable
                solutions using Salesforce's
                platform in the Salesforce
                Design course.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Digital Marketing  </h4>
              <p className="card-text">
                Students will learn to create
                compelling digital marketing
                assets using design principles,
                tools, and strategies.
              </p>
              <a
                href="#"
                className="btn btn-primary btn-block "
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                VIEW DETAILS
              </a>
            </div>
          </div>
        </div>
        {/* Radiant IT Services card content*/}
        <div className="col-md-8 mb-4">
          <div className="cardradiant card" style={{ borderRadius: "35px", backgroundColor: "#35C1D5", height: "500px" }}>

            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="radianttitle  card-title">"Radiant IT Services is known for it's
                industrystandard, best quality training.
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
