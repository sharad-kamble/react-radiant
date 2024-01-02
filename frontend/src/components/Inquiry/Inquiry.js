import React from 'react';
import inquiry from '../../assets/images/inquiry.png';
import './inquiry.css';

const Inquiry = () => {
    const backgroundStyle = {
        backgroundImage: `url(${inquiry})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <div className="container-fluid mt-4">
                <div className="row p-3">
                    {/* Left Column */}
                    <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center pb-3 pr-3">
                        <p className="text-center">
                        Please fill-up the form for more information
                        </p>
                        <button
                            type="button"
                            className="btn btn-outline-secondary custom-btn-outline customButton"
                        >
                            REGISTER NOW
                        </button>
                    </div>


                    {/* Right Column */}
                    <div className="col-md-5 col-12 pl-3">
                        <div className="card custom-card">
                            <div className="pt-3">
                                <h4>REGISTRATION FORM</h4>
                            </div>
                            <div className="card-body pb-4">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="formName" className="form-label ">Full Name -</label>
                                        <input type="text" className="form-control" id="formName" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formEmail" className="form-label ">Email Id -</label>
                                        <input type="email" className="form-control" id="formEmail" />
                                    </div>

                                    <div className="mb-3 text-start pt-3">
                                        <h6>ENTER 10 DIGITS MOBILE NUMBER</h6>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formContactNo" className="form-label text-start">Contact No -</label>
                                        <input type="tel" className="form-control" id="formContactNo" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="formDropdown" className="form-label text-start">Services -</label>
                                        <select className="form-select" id="formDropdown">
                                            <option value="1">Select</option>
                                            <option value="1">Software development</option>
                                            <option value="2">Digital marketing</option>
                                            <option value="3">Web development</option>
                                            <option value="3">Python training</option>
                                            <option value="3">Sap training</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="submitButton mt-3">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;
