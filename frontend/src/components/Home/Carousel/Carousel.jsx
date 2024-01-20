import React from 'react';
import Carousel1 from "../../../assets/images/Carousel1.png";
import Carousel2 from "../../../assets/images/Carousel2.png";
import Carousel3 from "../../../assets/images/Carousel3.png";
import { Link } from 'react-router-dom';
import "./carousel.css";

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-i carousel-inner">
          <div className="critm carousel-item active">
            <img src={Carousel1} className=" d-block w-100" alt="..." />
            <div className="carousel-cap  carousel-caption">
              <p>Welcome to Radiant</p>
              <h1>Unlock Your<br />
                Potential, Master<br />
                Your Future</h1>
              <p>Let’s make your learning experience extraordinary</p>
              <div className="button-container">
                <Link to="/contact" rel='noopener noreferrer'>
                  <button type="submit" className="explorecrs">
                    <strong>CONTACT US</strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="critm carousel-item">
            <img src={Carousel2} className="d-block w-100" alt="..." />
            <div className="carousel-cap  carousel-caption">
              {/* <p>Welcome to Radiant</p> */}
              <h1>Creating Best<br />
                Website User<br />
                Experience</h1>
              <p>We’re team of humans with a strategy, tools and<br />
                talent to build outstanding branding solutions <br />
                and digital products</p>
              <div className="button-container">
                <Link rel='noopener noreferrer' to="/contact">
                  <button type="submit" className="explorecrs">
                    <strong>CONTACT US</strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="critm carousel-item">
            <img src={Carousel3} className="d-block w-100" alt="..." />
            <div className="carousel-cap carousel-caption">

              <h1>We Create<br />
                Solutions For Your<br />
                Business</h1>
              <p>We specialize in crafting comprehensive solutions<br/>
                encompassing digital marketing, web<br/>
                development, and efficient billing services</p>
              <div className="button-container">
                <Link to="/contact" rel='noopener noreferrer'>
                  <button type="submit" className="explorecrs">
                    <strong>CONTACT US</strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
