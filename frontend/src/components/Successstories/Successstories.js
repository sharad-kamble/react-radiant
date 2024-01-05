import React from 'react';
import "./Successstories.css"

const Successstories = () => {
    return (
        <div >
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 text-center ml-4 sucstories'>
                        <h3 className='m-3'>
                            Radiant's Success
                            <br />
                            Stories!
                        </h3>
                    </div>

                    <div className='col-md-6 text-center  sucstoriespara'>
                        <p className="text-start">
                            Radiant has trained and helped candidates to build a great career and change their
                            lifestyle! We have our own superheroes whose stories serve as inspiration for many aspiring IT professionals. Read our candidate's success stories.
                            It will help you with your career decision.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Successstories;
