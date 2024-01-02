import React from 'react';
import "./Successstories.css"

const Successstories = () => {
    return (
        <div >
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 text-center ml-4 sucstories'>
                        <h3 className='m-3'>
                            Radiant Success
                            <br />
                            Stories!
                        </h3>
                    </div>


                    <div className='col-md-6 text-center  sucstoriespara'>
                        <p className="text-start">
                            Radiant has trained and helped people build a great career and change their
                            life! We have got our own superheroes whose stories are really an inspiration
                            to a lot of aspiring IT professionals. Read a few of Radiant Students' case studies.
                            It will definitely help you build a positive attitude.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Successstories;
