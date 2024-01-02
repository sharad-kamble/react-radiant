import React from 'react'

const Placement = () => {
    return (

        <div className='container-fluid' style={{backgroundColor:'blue'}}>
            <div className="">

                <div className='row mt-5 '>
                    <h2 className='text-center placementNews mb-4'>Placements News</h2>
                    <div className="col-md-6 mx-auto ">
                        <div id="carouselExampleDark" className="carousel plmntCrousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <div className="carousel-content">
                                            <h5 className='text-center'>Shubham Vijay</h5>
                                            <h6>Software Engineer</h6>
                                            <p className='text-center'>FIS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="carousel-content">
                                        <h5 className='text-center'>Shubham Vijay</h5>
                                        <h6>Java Fullstack Developer</h6>
                                        <p className='text-center'>Infosys</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="carousel-content">
                                        <h5 className='text-center'>Shital Kharade</h5>
                                        <h6>Java Fullstack Developer</h6>
                                        <p className='text-center'>Infosys</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Placement