import React from 'react';
import { Link } from 'react-router-dom';
import "./project.css";
import ProjectImg1 from '../../assets/images/ProjectImg1.png';
import AmanPatel from '../../assets/images/aman-patel.png';
import AmanProject from '../../assets/images/aman-project.png';
import KirtiAutade from '../../assets/images/kirti.png';
import KirtiProject from '../../assets/images/kirti-project.png';
import Jagruti from '../../assets/images/Jagruti.png';
import Bhavika from '../../assets/images/Bhavika.png';
import Priyanka from '../../assets/images/Priyanka.png';
import Pratiksha from '../../assets/images/Pratiksha.png';
import Bhavikaproject from '../../assets/images/Bhavikaproject.png';
import Sangramproject from '../../assets/images/Sangramproject.png';
import StudentGroup from '../../assets/images/StudentGroup.png';
import Rushikeshproject from '../../assets/images/Rushikeshproject.png';
import Jobportal from '../../assets/images/Jobportal.png';
import Surajimg from '../../assets/images/Surajimg.png';
import Akashimg from '../../assets/images/Akashimg.png';
import Prashantimg from '../../assets/images/Prashantimg.png';




const Projects = () => {
    return (
        <div>
            {/* section 1 */}
            <div className='container-fluid fullstkCon'>
                <div className='container py-5'>
                    <h1 className='abouth3 text-center pb-2'><strong>PROJECTS</strong></h1>
                    <p className='text-center fullstkPara' style={{ lineHeight: "35px", fontWeight: "500" }}>
                        At Radiant IT Services, we believe in providing hands-on, practical training that prepares candidates<br />

                        for real-world challenges. Our trainers, who possess a wealth of industry experience, are<br />

                        dedicated to imparting knowledge and skills that go beyond the theoretical realm. With a<br />

                        curriculum designed to meet industry standards and trends, our candidates are well-equipped to<br />

                        tackle the complexities of the ever-evolving IT landscape.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center mt-5 ProjectSec2'> PROJECTS AT RADIANT IT SERVICES</h2>
                    <div className='col-md-6 d-flex justify-content-center' style={{ fontWeight: "500" }}>
                        <p className='mt-5 mx-5 fs-5'>
                            Under the mentorship of our trainers,
                            students at Radiant IT Services embarked
                            on website projects that showcased their
                            abilities in web development, design, and
                            implementation.  These projects spanned a
                            variety of industries, education, and
                            portfolio websites, reflecting the diverse
                            skill set of our candidates.
                        </p>
                    </div>

                    <div className='col-md-6 my-auto text-center'>
                        <img src={ProjectImg1} alt='Project Img 1' className='img-fluid ' style={{ height: "350px" }} />
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className='container-fluid ourCanProject mt-5'>
                <h3 className='text-center p-3 text-light'>OUR CANDIDATE’S PROJECTS</h3>
            </div>

            {/* section 4 */}
            <div className='container'>
                <h4 className='text-center mt-5'>
                    Candidates have effectively applied their knowledge to complete their<br />
                    projects successfully.Explore their projects below.
                </h4>
                <div className='row mt-5'>
                    <div className="col-md-4 mb-4">
                        <div
                            className="card project-card shadow-sm h-100"
                            style={{ backgroundColor: "#D0F1F4", borderRadius: 39 }}
                        >
                            {/* Student Photo */}
                            <img
                                src={AmanPatel}
                                className="card-img-top mx-auto m-2"
                                style={{ width: 150, height: 150, borderRadius: 75 }}
                                alt="Student"
                            />
                            <div className="text-center mt-1">
                                <h6
                                    className=""
                                    style={{
                                        color: "#000",
                                        fontFamily: '"Inter"',
                                        fontSize: 29,
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "normal"
                                    }}
                                >
                                    <strong>Aman Patel</strong>
                                </h6>
                                <p>Full Stack Developement</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>PROJECT TITLE</strong>
                                </li>
                            </ul>
                            <p
                                className=" text-center m-1 "
                                style={{
                                    color: "#000",
                                    fontFamily: '"Inter"',
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal"
                                }}
                            >
                                Sports club website
                            </p>
                            {/* Project Image */}
                            <img
                                src={AmanProject}
                                className="card-img-top mx-auto mb-2"
                                alt="Project 1"
                            />
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>ABOUT PROJECT</strong>
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: 14 }}>
                                    Using HTML , CSS and bootstrap framework Aman Patel created this dynamic
                                    Sports Club website, where passion meets precision.
                                </p>
                                {/* VIEW PROJECT Button */}
                                <div className="text-center">
                                    <Link
                                        to="https://radiantitservicespvtltd.github.io/sports-club-website/"
                                        target="_blank"
                                        className="btn btn-primary"
                                        style={{ backgroundColor: "#025978" }}
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}



                    {/* Card 3 */}

                    <div className="col-md-4 mb-4">
                        <div
                            className="card project-card shadow-sm h-100"
                            style={{ backgroundColor: "#D0F1F4", borderRadius: 39 }}
                        >
                            {/* Student Photo */}
                            <div className="row">
                                <div className="col-md-6 job-card">
                                    <img
                                        src={Jagruti}
                                        className=" school-card-img school-img card-img-top mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt ' >Jagruti</p>
                                    <img
                                        src={Bhavika}
                                        className="card-img-top school-img mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt text-end' style={{ marginRight: '30px' }}>Bhavika</p>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src={Priyanka}
                                        className="card-img-top school-img mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt text-center priyanka' style={{ marginRight: '60px' }} >Priyanka</p>

                                    <img
                                        src={Pratiksha}
                                        className="card-img-top school-img mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt text-center  priyanka' style={{ marginRight: '60px' }}>Pratiksha</p>
                                </div>
                            </div>
                            <div className="text-center mt-1">
                                <h6
                                    className=""
                                    style={{
                                        color: "#000",
                                        fontFamily: '"Inter"',
                                        fontSize: 29,
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "normal"
                                    }}
                                >

                                </h6>
                                <p>Full Stack Developement</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>PROJECT TITLE</strong>
                                </li>
                            </ul>
                            <p
                                className=" text-center m-1 "
                                style={{
                                    color: "#000",
                                    fontFamily: '"Inter"',
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal"
                                }}
                            >
                                Quiz Application
                            </p>
                            {/* Project Image */}
                            <img
                                src={Bhavikaproject}
                                className="card-img-top mx-auto mb-2"
                                alt="Project 1"
                            />
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>ABOUT PROJECT</strong>
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: 14 }}>
                                    Techstack : HTML , CSS, Bootstrap, Angular
                                </p>
                                {/* VIEW PROJECT Button */}
                                <div className="text-center">
                                    <Link
                                        to="https://developyourmind-2af71.web.app/welcome"
                                        target="_blank"
                                        className="btn btn-primary"
                                        style={{ backgroundColor: "#025978" }}
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="card project-card shadow-sm h-100"
                            style={{ backgroundColor: "#D0F1F4", borderRadius: 39 }}
                        >
                            {/* Student Photo */}
                            <img
                                src={KirtiAutade}
                                className="card-img-top mx-auto m-2 "
                                style={{ width: 150, height: 150, borderRadius: 75 }}
                                alt="Student"
                            />
                            <div className="text-center mt-1">
                                <h6
                                    className=""
                                    style={{
                                        color: "#000",
                                        fontFamily: '"Inter"',
                                        fontSize: 29,
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "normal"
                                    }}
                                >
                                    <strong>Kirti Autade</strong>
                                </h6>
                                <p>Full Stack Developement</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>PROJECT TITLE</strong>
                                </li>
                            </ul>
                            <p
                                className=" text-center m-1 "
                                style={{
                                    color: "#000",
                                    fontFamily: '"Inter"',
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal"
                                }}
                            >
                                School website
                            </p>
                            {/* Project Image */}
                            <img
                                src={KirtiProject}
                                className="card-img-top mx-auto mb-2"
                                alt="Project 1"
                            />
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>ABOUT PROJECT</strong>
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: 14 }}>
                                    Using HTML , CSS and bootstrap framework Kirti Autade created this
                                    dynamic school website, where passion meets precision.
                                </p>
                                {/* VIEW PROJECT Button */}
                                <div className="text-center">
                                    <Link
                                        to="https://radiantitservicespvtltd.github.io/school-website/"
                                        target="_blank"
                                        className="btn btn-primary"
                                        style={{ backgroundColor: "#025978" }}
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='row mt-5'>
                    <div className="col-md-4 mb-4">
                        <div
                            className="card project-card shadow-sm h-100"
                            style={{ backgroundColor: "#D0F1F4", borderRadius: 39 }}
                        >
                            {/* Student Photo */}
                            <img
                                src={StudentGroup}
                                className="card-img-top mx-auto m-2"
                                style={{ width: 150, height: 150, borderRadius: 75 }}
                                alt="Student"
                            />
                            <div className="text-center mt-1">
                                <h6
                                    className=""
                                    style={{
                                        color: "#000",
                                        fontFamily: '"Inter"',
                                        fontSize: 29,
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "normal"
                                    }}
                                >
                                    <strong>Sangram Wagh</strong>
                                </h6>
                                <p>Full Stack Developement</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>PROJECT TITLE</strong>
                                </li>
                            </ul>
                            <p
                                className=" text-center m-1 "
                                style={{
                                    color: "#000",
                                    fontFamily: '"Inter"',
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal"
                                }}
                            >
                                Medical-health store website
                            </p>
                            {/* Project Image */}
                            <img
                                src={Sangramproject}
                                className="card-img-top mx-auto mb-2"
                                alt="Project 1"
                            />
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>ABOUT PROJECT</strong>
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: 14 }}>
                                    Using HTML , CSS and bootstrap framework sangram wagh created this dynamic Medical-health store website, where passion meets precision.
                                </p>
                                {/* VIEW PROJECT Button */}
                                <div className="text-center">
                                    <Link
                                        to="https://radiantitservicespvtltd.github.io/medical-web-project/"
                                        target="_blank"
                                        className="btn btn-primary"
                                        style={{ backgroundColor: "#025978" }}
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}

                    <div className="col-md-4 mb-4">
                        <div
                            className="card project-card shadow-sm h-100"
                            style={{ backgroundColor: "#D0F1F4", borderRadius: 39 }}
                        >
                            {/* Student Photo */}
                            <div className="row p-1">
                            <div className="col-md-6 job-card">
                                    <img
                                        src={Surajimg}
                                        className=" school-card-img school-img card-img-top mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt ' >Suraj</p>
                                    <img
                                        src={Akashimg}
                                        className="card-img-top school-img mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt text-end' style={{ marginRight: '30px' }}>Akash</p>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src={Prashantimg}
                                        className="card-img-top school-img mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt text-center priyanka' style={{ marginRight: '60px' }} >Prashant</p>

                                    <img
                                        src={StudentGroup}
                                        className="card-img-top school-img mx-auto m-2 "
                                        style={{ width: 100, height: 100, borderRadius: 75 }}
                                        alt="Student"
                                    />
                                    <p className='school-txt text-center  priyanka' style={{ marginRight: '60px' }}>Name</p>
                                </div>
                            </div>
                            <p className="text-center">Full stack development</p>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>PROJECT TITLE</strong>
                                </li>
                            </ul>
                            <p
                                className=" text-center m-1"
                                style={{
                                    color: "#000",
                                    fontFamily: '"Inter"',
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal"
                                }}
                            >
                                Job Portal Website
                            </p>
                            {/* Project Image */}
                            <img
                                src={Jobportal}
                                className="card-img-top mx-auto w-100 mb-2"
                                alt="Project 1"
                            />
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>ABOUT PROJECT</strong>
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: 14 }}>
                                    Techstack : HTML , CSS, Javascript, Bootstrap
                                </p>
                                {/* VIEW PROJECT Button */}
                                <div className="text-center">
                                    <Link
                                        to="https://radiantitservicespvtltd.github.io/job-portal/"
                                        target="_blank"
                                        className="btn btn-primary"
                                        style={{ backgroundColor: "#025978" }}
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}

                    <div className="col-md-4 mb-4">
                        <div
                            className="card project-card shadow-sm h-100"
                            style={{ backgroundColor: "#D0F1F4", borderRadius: 39 }}
                        >
                            {/* Student Photo */}
                            <img
                                src={StudentGroup}
                                className="card-img-top mx-auto m-2 "
                                style={{ width: 150, height: 150, borderRadius: 75 }}
                                alt="Student"
                            />
                            <div className="text-center mt-1">
                                <h6
                                    className=""
                                    style={{
                                        color: "#000",
                                        fontFamily: '"Inter"',
                                        fontSize: 29,
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "normal"
                                    }}
                                >
                                    <strong>Rushikesh Bihade</strong>
                                </h6>
                                <p>Frontend Developement</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>PROJECT TITLE</strong>
                                </li>
                            </ul>
                            <p
                                className=" text-center m-1 "
                                style={{
                                    color: "#000",
                                    fontFamily: '"Inter"',
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal"
                                }}
                            >
                                College Database Managment System
                            </p>
                            {/* Project Image */}
                            <img
                                src={Rushikeshproject}
                                className="card-img-top mx-auto mb-2"
                                alt="Project 1"
                            />
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item text-center text-white d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "#0097A4", height: 30 }}
                                >
                                    <strong>ABOUT PROJECT</strong>
                                </li>
                            </ul>
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: 14 }}>
                                    Using HTML , CSS and bootstrap framework Kirti Autade created this
                                    dynamic school website, where passion meets precision.
                                </p>
                                {/* VIEW PROJECT Button */}
                                <div className="text-center">
                                    <Link
                                        to="https://radiantitservicespvtltd.github.io/cdbs/"
                                        target="_blank"
                                        className="btn btn-primary"
                                        style={{ backgroundColor: "#025978" }}
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>





            </div>

            {/* section 5 */}
            {/* <div className="container-fluid mt-5 placementdrive">

                <div className="row">
                    <div className="container ">
                        <div className="content-wrapper text-center">
                            <h4 className="inline-heading text-center text-light">Join Employability Edge <br /> For Bright Future</h4>
                            <button type="submit" className="regnowbtn">
                                <strong>REGISTER NOW</strong>
                            </button>
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="container-fluid placementdrive" style={{ marginTop: "200px" }}>
                <div className="container custom-border" >
                    <div className="row">
                        <div className="col-md-7">
                            <h4 className="inline-heading text-light">Join Employability Edge
                                For Bright Future</h4>
                        </div>
                        <div className="col-md-5 ">
                            <button type="submit" className="register-btn">
                                <strong>REGISTER NOW</strong>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects
