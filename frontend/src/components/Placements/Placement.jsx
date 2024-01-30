import React from 'react';
import "./Placement.css";
import Journey from '../../assets/images/Journey.png';
import Akash from '../../assets/images/akash.png';
import Indra from '../../assets/images/indra.png';
import Sujit from '../../assets/images/Sujit.png';
import Saurabh from '../../assets/images/Saurabh.png';
import Shabeed from '../../assets/images/Shabeed.png';
import Nikita from '../../assets/images/Nikita.png';
import Vaishnavi from '../../assets/images/Vaishnavi.png';

const Placement = () => {
  return (
    <div>
      <div className='container-fluid placement' style={{ backgroundColor: "#D0F1F4" }}>
        <div className='container py-5 placementText'>
          <h1 className='text-center my-4 placementh3'><strong>PLACEMENTS</strong></h1>
          <p>
            Explore limitless opportunities with Radiant IT Services Pvt Ltd,<br />
            where our industry-ready training seamlessly blends theory with hands-on<br />
            experience. Our track record of placing students in top-tier positions<br />
            is a testament to the effectiveness of our programs.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="journey col-md-7 my-5">
              <ul style={{ marginTop: '60px' }}>
                <li>
                  <h3>Navigating Your Career Journey with<br />
                    Radiant IT Services:</h3>
                </li>
                <li style={{ marginLeft: '30px', marginTop: '25px' }}>
                  Learn about our dedicated placement support team,
                  committed to guiding and assisting you in securing
                  meaningful and fulfilling professional opportunities.
                </li>
              </ul>

              <ul>
                <li>
                  <h3>Holistic Career Guidance:</h3>
                </li>
                <li style={{ marginLeft: '30px', marginTop: '25px' }}>
                  Discover how our personalized career guidance
                  services extend beyond placements, offering valuable
                  insights for sustained and long-term career growth.
                </li>
              </ul>
            </div>
            <div className="col-md-5 my-5 d-flex justify-content-center align-items-center">
              <div className="journeyimg text-center">
                <img src={Journey} alt="Journey Image" style={{ maxWidth: '100%', height: '360px', margin: '20px' }} className="d-block mx-auto" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid congrats' style={{ backgroundColor: "#35C1D5" }}>
        <div className='container py-2 congratsText'>
          <h3 className='text-center my-2 congratsh3 text-white'><strong>CONGRATULATIONS FOR GETTING PLACED!</strong></h3>

        </div>
      </div>

      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row justify-content-center">
          <div className="placedcrds col-md-10">
            <div className="row">
              {/* First Card */}
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }} >
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Akash}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Akash Dilwale</h5>
                        <p className="card-text">
                          Name of Company - Manlitics B2B ITES
                          Designation - Web Developer
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card */}

              {/* <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row" >
                    <div className="placementimgs col-md-4">
                      <img
                        src={Sujit}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Sujit Shukla</h5>
                        <p className="card-text">
                          Name of Company - Datadynamx Pvt. Ltd.<br />
                          Designation - Software testing
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Sujit}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Sujit Shukla</h5>
                        <p className="card-text">
                          Name of Company - Datadynamx Pvt. Ltd.<br />
                          Designation - Software testing
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Saurabh}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Saurabh Kelkar</h5>
                        <p className="card-text">
                          Name of Company - Celestial Institute of
                          Technology<br />
                          Designation - UI Developer
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Shabeed}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Shabeed Maulavi</h5>
                        <p className="card-text">
                          Name of Company - Celestial Institute of
                          Technology<br />
                          Designation - UI Developer
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Indra}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Indra Choudhary</h5>
                        <p className="card-text">
                          Name of Company - Bright Champs<br />
                          Designation - Coding Educator
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Nikita}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Nikita Dhangar</h5>
                        <p className="card-text">
                          Name of Company - Roxiler Systems<br />
                          Designation - Software Testing
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="placementcrd card" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="placementimgs col-md-4">
                      <img
                        src={Vaishnavi}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Vaishnavi Jadhav</h5>
                        <p className="card-text">
                          Name of Company - Nuage CX Consulting
                          Pvt. Ltd.<br />
                          Designation - Software Testing
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid placementdrive" style={{ marginTop: "200px" }}>
        <div className="container custom-border" >
          <div className="row">
            <div className="col-md-6">
              <h4 className="inline-heading text-light">Want To Be Part of the next Placement drive</h4>
            </div>
            <div className="col-md-6 ">
              <button type="submit" className="register-btn">
                <strong>REGISTER NOW</strong>
              </button>
            </div>
          </div>

        </div>

      </div>



    </div>



  );
}

export default Placement;
