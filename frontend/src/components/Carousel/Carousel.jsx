import React from 'react';
import Carousel1 from "../../assets/images/Carousel1.png";
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
                <a href='https://radiantitservices.in/' target='_blank' rel='noopener noreferrer'>
                  <button type="submit" className="explorecrs">
                    CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="critm carousel-item">
            <img src={Carousel1} className="d-block w-100" alt="..." />
            <div className="carousel-cap  carousel-caption">
              <p>Welcome to Radiant</p>
              <h1>Unlock Your<br />
                Potential, Master<br />
                Your Future</h1>
              <p>Let’s make your learning experience extraordinary</p>
              <div className="button-container">
                <a href='https://radiantitservices.in/' target='_blank' rel='noopener noreferrer'>
                  <button type="submit" className="explorecrs">
                    EXPLORE ALL COURSES
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="critm carousel-item">
            <img src={Carousel1} className="d-block w-100" alt="..." />
            <div className="carousel-cap carousel-caption">
              <p>Welcome to Radiant</p>
              <h1>Unlock Your<br />
                Potential, Master<br />
                Your Future</h1>
              <p>Let’s make your learning experience extraordinary</p>
              <div className="button-container">
                <a href='https://radiantitservices.in/' target='_blank' rel='noopener noreferrer'>
                  <button type="submit" className="explorecrs">
                    EXPLORE ALL COURSES
                  </button>
                </a>
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
