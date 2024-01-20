import React, { useEffect, useState } from 'react'
import './enrollment.css';
import Logo from '../../assets/images/logo.png';
import Sample from '../../assets/images/sample.png';
import Logofooter from '../../assets/images/logofooter.png'
const Enrollment = () => {


  const [formData, setFormData] = useState({
    trainingCourse: '',
    counsellorsName: '',
    trainingFees: '',

    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    mothersName: '',
    mobile: '',
    email: '',
    permanentAddress: '',
    correspondenceAddress: '',
    sameAsPermanent: '',
    physicallyChallenged: '',
    ssc_institute_name: '',
    ssc_place: '',
    ssc_university: '',
    ssc_percentage: '',
    ssc_year_of_passing: '',
    hsc_institute_name: '',
    hsc_place: '',
    hsc_university: '',
    hsc_percentage: '',
    hsc_year_of_passing: '',
    graduation_institute_name: '',
    graduation_place: '',
    graduation_university: '',
    graduation_percentage: '',
    graduation_year_of_passing: '',
    postgraduation_institute_name: '',
    postgraduation_place: '',
    postgraduation_university: '',
    postgraduation_percentage: '',
    postgraduation_year_of_passing: '',
    achievement_text: '',
    activity_text: '',
    hobbies_interests_text: '',
    english_read: '',
    english_write: '',
    english_speak: '',
    hindi_read: '',
    hindi_write: '',
    hindi_speak: '',
    marathi_read: '',
    marathi_write: '',
    marathi_speak: '',
    first_ref_name: '',
    first_ref_address: '',
    first_ref_relation: '',
    first_ref_mobile: '',
    first_ref_email: '',
    second_ref_name: '',
    second_ref_address: '',
    second_ref_relation: '',
    second_ref_mobile: '',
    second_ref_email: '',
    experience: '',
    organization: '',
    designation: '',
    from_date: '',
    to_date: '',
    organization1: '',
    designation1: '',
    from_date1: '',
    to_date1: '',
    preferred_job_location_pune: '',
    preferred_job_location_mumbai: '',
    preferred_job_location_bangalore: '',
    course_name: '',
    course_fees: '',
    fee: '',
    amount: '',
    schedule: '',
    payment_mode: '',
    left_fees: '',
    payment_type: '',
    emi_no_1: '',
    emi_no_1_date: '',
    emi_no_1_amount: '',
    emi_no_2: '',
    emi_no_2_date: '',
    emi_no_2_amount: '',
    emi_no_3: '',
    emi_no_3_date: '',
    emi_no_3_amount: '',
    signature: '',
    date_submission: ''
  })



  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // for course name and fees
      course_name: name === 'trainingCourse' ? value : prevData.course_name,
      course_fees: name === 'trainingFees' ? value : prevData.course_fees,

    }));
  };

  //    for address

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const copyAddress = () => {
    setFormData((prevData) => ({
      ...prevData,
      correspondenceAddress: prevData.sameAsPermanent
        ? prevData.permanentAddress
        : prevData.correspondenceAddress,
      sameAsPermanent: !prevData.sameAsPermanent,
    }));
  };

  // console.log(formData)
  useEffect(() => {
    console.log(formData)
  }, [formData]);


  return (
    <div className='body'>
      <div className="container enrollContainer mt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="form-bg">
              <div className="img-bg" >
                <div className="horizontal-image justify-content-end " >
                  <img src={Logo} alt="Horizontal Image" className="img"
                    style={{ height: '80px' }} />
                </div>
              </div>

              <div className="col-md-12 headers p-6 ">
                <h5 className="text-center mt-3 text-light p-2">Student Enrollment Form</h5>
              </div>

              <div>
                <form>
                  <div className='col-md-12'>
                    <h2 className='trainigC'>Training Courses For</h2>
                  </div>

                  <div className='col-md-12'>
                    <div className="row flex-end">

                    </div>
                    <div className="row">
                      {/* Training Course Field */}
                      <div className="col-md-6 mb-3">
                        <select
                          className="form-control"
                          id="trainingCourse"
                          name="trainingCourse"
                          value={formData.trainingCourse}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" selected>
                            Select the course
                          </option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Digital Marketing + Web Development">Digital Marketing + Web
                            Development
                          </option>
                          <option value="Full Stack Development(java/python)">Full Stack
                            Development ( Java / Python )
                          </option>
                          <option value="Data Science (Basic to Advance)">Data Science ( Basic to
                            Advance )
                          </option>
                          <option value="(Integrated) Data Science">( Integrated ) Data Science
                          </option>
                          <option value="Web Development">Web Development</option>
                          <option value="PMO">PMO</option>
                          <option value="SAP S4 hana">SAP S4 hana</option>
                          <option value="Salesforce(including certification)">Salesforce ( including
                            certification )
                          </option>
                          <option value="AWS">AWS</option>
                          <option value="Power BI">Power BI</option>
                          <option value="Soft Testing">Software Testing</option>
                        </select>
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col-md-6 ">
                        <label htmlFor="counsellors_name" className=' form-label lable'> Counsellor name</label>
                        <select
                          className="form-control"
                          // style={{ width: '16rem' }}
                          id="counsellorsName"
                          name="counsellorsName"
                          value={formData.counsellorsName}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" selected> select</option>
                          <option value="Miss.Nivedita Mam">Miss.Nivedita Mam</option>
                          <option value="Miss.Archana Mam">Miss.Archana Mam</option>
                          <option value="Miss.Unnati Mam">Miss.Unnati Mam</option>
                          <option value="Miss.Farina Mam">Miss.Farina Mam</option>
                          <option value="Miss.Komal Mam">Miss.Komal Mam</option>
                          <option value="Mr.Nishant Sir">Mr.Nishant Sir</option>
                          <option value="Mr.Prashant Sir">Mr.Prashant Sir</option>
                          <option value="Mr.Aayush Sir">Mr.Aayush Sir</option>
                        </select>
                      </div>
                      {/* Course Fees Field */}
                      <div className="col-md-3 ">
                        <label htmlFor="courseFees" className="form-label lable">Training Fees</label>
                        <input
                          type="number"
                          className="form-control"
                          id="trainingFees"
                          name='trainingFees'
                          value={formData.trainingFees}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>


                  </div>

                  {/* for Personal perticulars */}
                  <div className="form-group">
                    <p className="h6 required py-3 personalInfo"> Personal Information </p>
                  </div>


                  <div className='row'>
                    <div className="col-md-3">
                      <label htmlFor="firstName" className=" h6 required form-label">
                        First Name-
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />

                    </div>

                    <div className="col-md-3">
                      <label htmlFor="middleName" className=" h6 required form-label">
                        Middle Name-
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="middleName"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className="col-md-3">
                      <label htmlFor="lastName" className=" h6 required form-label">
                        Last Name-
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />

                    </div>
                    <div className="col-md-3">
                      <label htmlFor="mothersName" className="h6 required form-label">
                        Mother's Name-
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mothersName"
                        name="mothersName"
                        value={formData.mothersName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className="col-md-3">
                      <label htmlFor="dateOfBirth" className="h6 required form-label">
                        DOB-
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="age" className=" h6 required form-label">
                        Age-
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className="col-md-3">
                      <label htmlFor="mobile" className=" h6 required form-label">
                        Contact No.-
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-8">
                      <label htmlFor="email" className=" h6 required form-label">
                        Email Id-
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className="col-md-6">
                      <label htmlFor="permanentAddress" className=' h6 mt-2 form-label'>
                        Address-
                      </label>
                      <br />
                      <label
                        htmlFor="permanentAddress"
                        className="required px-2"
                      >
                        (Permanent Address)
                      </label>
                      <textarea
                        className="form-control"
                        id="permanentAddress"
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        required
                      ></textarea>

                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="correspondenceAddress"
                        className=" h6 required  mt-2 form-label"
                      >
                        Correspondence Address:
                      </label>
                      <br />
                      <label >
                        <input
                          type="checkbox"
                          name="sameAsPermanent"
                          id="sameAsPermanent"
                          className='mx-2'

                          onChange={copyAddress}
                          checked={formData.sameAsPermanent}
                        />
                        Same as Permanent Address
                      </label>
                      <textarea
                        className="form-control"
                        id="correspondenceAddress"
                        name="correspondenceAddress"
                        value={formData.correspondenceAddress}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  {/* for Physically Challenged */}
                  <div className=' row'>
                    <label htmlFor="physicallyChallenged" className='h6 mt-3 py-2'>
                      Physically Challenged-
                    </label>
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        id="physicallyChallenged"
                        name="physicallyChallenged"
                        value={formData.physicallyChallenged}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" >Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>

                  <br />
                  <br />
                  {/* for Educational information */}
                  <div class="res-table table-responsive form-group py-3 ">
                    <div class="form-group educationalInfo ">
                      <p class="h3  text-center text-light "> Educational Information</p>
                    </div>
                    <table class="table ">
                      <thead className='educationalInfoHead text-center'>
                        <tr>
                          <th>Qualifications</th>
                          <th>Place</th>
                          <th>University</th>
                          <th>Percentage</th>
                          <th>Year of Passing</th>
                        </tr>
                      </thead>


                      <tbody>
                        {/* SSC */}
                        <tr>
                          <td className=''>
                            <select
                              className="form-control text-center no-border"
                              name="ssc_instituteName"
                              id="ssc_instituteName"
                              value={formData.ssc_institute_name}
                              onChange={handleInputChange}
                            >
                              <option value="SSC">SSC</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="place"
                              name="ssc_place"
                              value={formData.ssc_place}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control  no-border"
                              id="university"
                              name="ssc_university"
                              value={formData.ssc_university}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="percentage"
                              name="ssc_percentage"
                              step="0.01"
                              min="0"
                              max="100"
                              value={formData.ssc_percentage}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="sscyearOfPassing"
                              name="ssc_year_of_passing"
                              value={formData.ssc_year_of_passing}
                              onChange={handleInputChange}
                              required
                            />
                          </td>

                        </tr>

                        {/* HSC */}
                        <tr>
                          <td>
                            <select
                              className="form-control text-center no-border"
                              name="hsc_institute_name"
                              id="hsc_instituteName"
                              value={formData.hsc_institute_name}
                              onChange={handleInputChange}
                            >

                              <option value="HSC">HSC</option>
                              <option value="Diploma">Diploma</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="hscplace"
                              name="hsc_place"
                              value={formData.hsc_place}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="hscuniversity"
                              name="hsc_university"
                              value={formData.hsc_university}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="hscpercentage"
                              name="hsc_percentage"
                              step="0.01"
                              min="0"
                              max="100"
                              value={formData.hsc_percentage}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="hscyearOfPassing"
                              name="hsc_year_of_passing"
                              value={formData.hsc_year_of_passing}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                        </tr>

                        {/* Graduation */}
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border text-center"
                              id="graduation_institute_name"
                              name="graduation_institute_name"
                              placeholder="Graduation: Ex. BTech"
                              value={formData.graduation_institute_name}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="graduationplace"
                              name="graduation_place"
                              value={formData.graduation_place}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="graduation_university"
                              name="graduation_university"
                              value={formData.graduation_university}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="graduationpercentage"
                              name="graduation_percentage"
                              step="0.01"
                              min="0"
                              max="100"
                              value={formData.graduation_percentage}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="graduationyearOfPassing"
                              name="graduation_year_of_passing"
                              value={formData.graduation_year_of_passing}
                              onChange={handleInputChange}
                              required
                            />
                          </td>
                        </tr>

                        {/* Post Graduation */}
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border "
                              id="postgraduation_institute_name"
                              name="postgraduation_institute_name"
                              placeholder="Post Graduation: Ex. MBA"
                              value={formData.postgraduation_institute_name}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="postgradplace"
                              name="postgraduation_place"
                              value={formData.postgraduation_place}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              id="postgraduniversity"
                              name="postgraduation_university"
                              value={formData.postgraduation_university}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="postgradpercentage"
                              name="postgraduation_percentage"
                              step="0.01"
                              min="0"
                              max="100"
                              value={formData.postgraduation_percentage}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control no-border"
                              id="postgraduation_year_of_passing"
                              name="postgraduation_year_of_passing"
                              value={formData.postgraduation_year_of_passing}
                              onChange={handleInputChange}
                            />
                          </td>
                        </tr>
                      </tbody>


                    </table>
                  </div>


                  <br />
                  <br />

                  {/* <h5 className="mb-3 required">D) Achievements and Extra Curricular Activity Details</h5> */}
                  <div className="res-table">

                    <div className='educationalInfo'>
                      <h3 className='text-center text-light'>Achievements and Extra Curricular Activity Details</h3>
                    </div>
                    <table className="table table-bordered">
                      <tbody className='activityTable'>
                        <tr>
                          <td className='activity'>
                            <label htmlFor="achievement_text" className='h6'>Achievements/Scholarship/Prizes:</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              name="achievement_text"
                              id="achievement_text"
                              value={formData.achievement_text}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className='activity'>
                            <label htmlFor="activity_text" className='h6 pl-3'>Extra Curricular Activities</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              name="activity_text"
                              id="activity_text"
                              value={formData.activity_text}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className='activity'>
                            <label htmlFor="hobbies_interests_text" className='h6'>Hobbies and Interests</label>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control no-border"
                              name="hobbies_interests_text"
                              id="hobbies_interests_text"
                              value={formData.hobbies_interests_text}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <br />
                  <br />

                  <div className=''>


                    <div className='educationalInfo'>
                      <h3 className='text-center text-light'>Lingual Skills</h3>
                    </div>
                    <table className="table table-bordered" >

                      <thead className='thead text-center'>
                        <tr>
                          <th>Languages</th>
                          <th>Read</th>
                          <th>Write</th>
                          <th>Speak</th>
                        </tr>
                      </thead>
                      <tbody className='lingualskill'>
                        <tr>
                          <td className='language'>English</td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_read"
                                name="english_read"
                                value={formData.english_read}
                                onChange={handleChange} />

                            </div>
                          </td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_write"
                                name="english_write"
                                value={formData.english_write}
                                onChange={handleChange} />

                            </div>
                          </td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_speak"
                                name="english_speak"
                                value={formData.english_speak}
                                onChange={handleChange} />

                            </div>
                          </td>

                        </tr>

                        <tr>
                          <td className='language'>Hindi</td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_read"
                                name="hindi_read"
                                value={formData.hindi_read}
                                onChange={handleChange} />

                            </div>
                          </td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_write"
                                name="hindi_write"
                                value={formData.hindi_write}
                                onChange={handleChange} />

                            </div>
                          </td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_speak"
                                name="hindi_speak"
                                value={formData.hindi_speak}
                                onChange={handleChange} />

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='language'>Marathi</td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_read"
                                name="marathi_read"
                                value={formData.marathi_read}
                                onChange={handleChange} />

                            </div>
                          </td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="can_write"
                                name="marathi_write"
                                value={formData.marathi_write}
                                onChange={handleChange} />

                            </div>
                          </td>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" class="form-check-input " id="can_speak"
                                name="marathi_speak"
                                value={formData.marathi_speak}
                                onChange={handleChange} />

                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h5 className="mb-3 required rulesRegulation"> References</h5>


                    {/* First Reference */}
                    <p>
                      <li>Name and Address of two refrences whom you know well and who know you well </li>
                      <li>First reference should be your family member only</li>
                    </p>
                    <div className='refrences'>
                      <div className="row mb-2">
                        <div className="col-md-4">
                          <label htmlFor="familyName" className='h6'>Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="familyName"
                            name="first_ref_name"
                            value={formData.first_ref_name}
                            onChange={handleInputChange}
                            required
                          />

                        </div>
                        <div className="col-md-4">
                          <label htmlFor="familyRelation" className='h6'>Relation:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="familyRelation"
                            name="first_ref_relation"
                            value={formData.first_ref_relation}
                            onChange={handleInputChange}
                            required
                          />

                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="familyPhone" className='h6'>Mobile No:</label>
                            <input
                              type="tel"
                              className="form-control"
                              id="familyPhone"
                              name="first_ref_mobile"
                              value={formData.first_ref_mobile}
                              onChange={handleInputChange}
                              minLength="10"
                              required
                            />

                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="row mb-2">
                          <div className="col-md-4">
                            <label htmlFor="familyEmail" className='h6'>Email:</label>
                            <input
                              type="email"
                              className="form-control"
                              id="familyEmail"
                              name="first_ref_email"
                              value={formData.first_ref_email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="familyAddress" className='h6'>Address:</label>
                            <textarea
                              className="form-control"
                              id="familyAddress"
                              name="first_ref_address"
                              value={formData.first_ref_address}
                              onChange={handleInputChange}
                              required
                            ></textarea>

                          </div>
                        </div>
                      </div>
                      {/* Second Reference */}
                      <p>
                        <li>Second Reference Should be your Friends</li>
                      </p>

                      <div className="">
                        <div className="row mb-2">
                          <div className="col-md-4">
                            <label htmlFor="secondName" className='h6'>Name-</label>
                            <input
                              type="text"
                              className="form-control"
                              id="secondName"
                              name="second_ref_name"
                              value={formData.second_ref_name}
                              onChange={handleInputChange}
                              required
                            />

                          </div>
                          <div className="col-md-4">
                            <label htmlFor="secondRelation" className='h6'>Relation:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="secondRelation"
                              name="second_ref_relation"
                              value={formData.second_ref_relation}
                              onChange={handleInputChange}
                              required
                            />

                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="secondPhone" className='h6'>Mobile No:</label>
                              <input
                                type="tel"
                                className="form-control"
                                id="secondPhone"
                                name="second_ref_mobile"
                                value={formData.second_ref_mobile}
                                onChange={handleInputChange}
                                minLength="10"
                                required
                              />

                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="row mb-2">
                          <div className="col-md-4">
                            <label htmlFor="secondEmail" className='h6'>Email:</label>
                            <input
                              type="email"
                              className="form-control"
                              id="secondEmail"
                              name="second_ref_email"
                              value={formData.second_ref_email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="secondAddress" className='h6'>Address:</label>
                            <textarea
                              className="form-control"
                              id="secondAddress"
                              name="second_ref_address"
                              value={formData.second_ref_address}
                              onChange={handleInputChange}
                              required
                            ></textarea>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <br />
                  <div className='row'>
                    <div>
                      <h5 className="required rulesRegulation">Experience</h5>
                    </div>

                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className="form-check form-check-inline col-md-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          id="yes"
                          value="yes"
                        // checked={hasExperience === 'yes'}
                        // onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="radio-yes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline col-md-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          id="no"
                          value="no"
                        // checked={hasExperience === 'no'}
                        // onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="radio-no">
                          No
                        </label>
                      </div>
                    </div>




                    <div className='col-md-6'>
                      <h5 className="rulesRegulation"> Preferred Location for Job</h5>
                      <div className="form-check form-check-inline ml-4">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="pune"
                          // checked={formData.locations.pune}
                          // onChange={() => handleLocationChange('pune')}
                          />
                          Pune
                        </label>
                      </div>
                      <div className="form-check form-check-inline-sm ml-4">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="mumbai"
                          // checked={formData.locations.mumbai}
                          // onChange={() => handleLocationChange('mumbai')}
                          />
                          Mumbai
                        </label>
                      </div>
                      <div className="form-check form-check-inline ml-4 mb-3">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="bangalore"
                          // checked={formData.locations.bangalore}
                          // onChange={() => handleLocationChange('bangalore')}
                          />
                          Bangalore
                        </label>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <h5 className="mb-3 required rulesRegulation"> Payment Details</h5>
                  <div className='row mb-3'>
                    <div className="col-md-6">
                      <label className="h6" htmlFor="courseName">
                        Course name-
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course_name"
                        name="course_name"
                        value={formData.course_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="h6" htmlFor="courseFees">
                        Course fees-
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="course_fees"
                        name="course_fees"
                        placeholder="Rs/-"
                        value={formData.course_fees}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <br />

                  <div className="res-table table-responsive form-group">
                    <table className="table table-bordered">
                      <thead className='educationalInfo text-light text-center'>
                        <tr>
                          <th>Fee</th>
                          <th>Amount</th>
                          <th>Schedule</th>
                          <th>Left Fees</th>
                        </tr>
                      </thead>
                      <tbody className='emitbody'>
                        <tr>
                          <td>
                            <select
                              className="form-control  emi-field"
                              id="fee"
                              name="fee"
                            // value={formData.fee}
                            // onChange={handleInputChange1}
                            // required
                            >
                              <option value="" selected>
                                select
                              </option>
                              <option value="Enrollment Fee">Enrollment Fee</option>
                              {/* Add other options as needed */}
                            </select>
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control emi-field"
                              id="enrollmentFees"
                              name="amount"
                              placeholder="Rs/-"
                            // value={formData.amount}
                            // onChange={handleInputChange}
                            // onBlur={calculateTotalAmount}
                            // required
                            />

                          </td>
                          <td>
                            <select
                              className="form-control emi-field"
                              id="Schedule"
                              name="schedule"
                            // value={formData.schedule}
                            // onChange={handleInputChange1}
                            // required
                            >
                              <option value="" selected>
                                select
                              </option>
                              <option value="At the time of Enrollment">At the time of Enrollment</option>
                              <option value="During the Training only">During the Training only</option>

                            </select>
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control emi-field"
                              id="leftFees"
                              name="leftFees"
                              placeholder="0.00"
                            // value={formData.leftFees}

                            // required
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* for payment */}

                  <h4 className="mb-3 mt-3 rulesRegulation page-break">Enrollment Fees Payment Detail</h4>
                  <div className='row'>
                    <div className="col-md-6 mt-4">
                      <div className="form-group form-inline">
                        <div className="d-flex  align-items-center">
                          <label className="mx-2" htmlFor="paymentMode">
                            Payment Mode-
                          </label>

                          <select
                            className="form-control text-center mr-2 paymentMode"
                            id="paymentMode"
                            name="paymentMode"
                            // value={formData.payment.mode}
                            // onChange={handlePaymentModeChange}
                            required
                          >
                            <option value="" disabled selected>
                              SELECT AN OPTION
                            </option>
                            <option value="Online">Online</option>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            <option value="Card">Card</option>
                          </select>
                        </div>

                        {/* {formData.payment.payNow && (
                                                <>
                                                    <label id="payNowLabel" style={{ display: 'inline-block', marginLeft: '60px' }}>
                                                        Pay Now
                                                    </label>
                                                    <img
                                                        // src={formData.payment.qrImage}
                                                        id="qrImage"
                                                        alt="QR Code"
                                                        style={{ display: 'inline-block' }}
                                                    />
                                                </>
                                            )} */}
                      </div>
                      <br />
                      <h4 className="rulesRegulation">Training / Course Fees Payment Mode:</h4>
                      <div className="checkbox form-check">
                        <label>
                          <input
                            type="radio"
                            name="paymentType"
                            value="One Time"
                            id="oneTimeCheckbox"

                          // onChange={handleChange}
                          // checked={formData.paymentType === 'One Time'}
                          />
                          One Time (Fees to be paid within 8 days of registration)
                        </label>
                        <br />

                        <div
                          // className={form-check ${formData.paymentType === 'EMI' ? '' : 'hidden'}`}
                          id="agreeContinueCheckbox">
                          {/* <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="agreeCheckbox"
                                                    name="agreeCheckbox"
                                                // onChange={handleChange}
                                                // checked={formData.agreeCheckbox}
                                                />
                                                <label className="form-check-label fs-6" htmlFor="agree-checkbox">
                                                    I confirm that I have read, understood, and agree to the above terms and conditions.
                                                </label> */}
                          <br />
                        </div>

                        <label>
                          <input
                            type="radio"
                            name="paymentType"
                            value="EMI"
                            id="emiCheckbox"
                          // onChange={handleChange}
                          // checked={formData.paymentType === 'EMI'}
                          />
                          EMI(Fees to be paid in 3 installments, within 60 days of registration amount):
                        </label>
                      </div>
                    </div>

                    <div className='col-md-6 justify-content-right text-center text-md-left mt-4 mt-md-0'>
                      <img src={Sample} className="ml-md-auto " style={{ height: "85%", width: "70%" }} />
                    </div>
                  </div>

                  <div>
                    <div class="res-table " id="emi-table" >
                      <table class="table table-bordered">
                        <thead className='text-center emithead'>
                          <tr>
                            <th>EMI</th>
                            <th>Date</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody className='emitbody'>
                          <tr>
                            <td>
                              <select className="form-control emi-field" name="EMI_NO_1" id="EMI_NO_1" >
                                <option value="EMI NO 1">EMI NO 1</option>
                              </select>
                            </td>
                            <td><input type="date" className="form-control emi-field" id="selectedDate"
                              name="EMI_NO_1_date" />
                            </td>
                            <td>
                              <input type="number" className="form-control emi-field" id="Amount"
                                name="EMI_NO_1_Amount" placeholder="Rs/-" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select className="form-control  emi-field" name="EMI_NO_2" id="EMI_NO_2">
                                <option value="EMI NO 2">EMI NO 2</option>
                              </select>
                            </td>
                            <td><input type="date" className="form-control emi-field" id="dateSecondEmi"
                              name="EMI_NO_2_date" />
                            </td>
                            <td>
                              <input type="number" className="form-control emi-field" id="emi2Amount"
                                name="EMI_NO_2_Amount" placeholder="Rs/-" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select className="form-control emi-field" name="EMI_NO_3" id="EMI_NO_3">
                                <option value="EMI NO 3">EMI NO 3</option>
                              </select>
                            </td>
                            <td><input type="date" className="form-control emi-field" id="dateThirdEmi"
                              name="EMI_NO_3_date" />
                            </td>
                            <td>
                              <input type="number" className="form-control emi-field" id="emi3Amount"
                                name="EMI_NO_3_Amount" placeholder="Rs/-" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="checkbox form-check">
                    <div id="agreeContinueCheckbox1" className="form-check pb-3 hidden">
                      <input className="form-check-input" type="checkbox" id="agreeCheckbox" />
                      <label className="form-check-label fs-6" for="agree-checkbox"> I confirm that I have
                        read,
                        understood,
                        and
                        agree to the above terms and conditions.</label>
                    </div>

                    <label><input type="radio" id="loanCheckbox" name="paymentType" value="Loan"
                      onchange="togglePaymentTable(false)" /> Loan (Documents to be
                      Submitted within 8
                      days of
                      registration)</label>
                  </div>


                  {/* Rules and Regulation */}

                  <div className="page-break">
                    <h3 className="mb-3 text-center text-sm-start pt-3 rulesRegulation">Rules and Regulations</h3>
                    <div className="form-group">
                      <h5 className="mb-3 text-info pt-2"> Payment Schedule</h5>
                      <div className="ml-5">
                        <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                          <li className="text-sm-center">
                            <p style={{ textAlign: 'justify' }}>
                              Enrollment fee needs to be deposited with Enrollment Form
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Fee is <strong className='text-info'>Non Refundable</strong> under any circumstances.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Radiant IT Services PVT LTD will only introduce the student to BANK for
                              the loan procedure.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Initiating and completing the loan procedure within stipulated time is
                              the sole responsibility of the student.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Submitting the required documents for the loan procedure and arranging
                              suitable guarantor, as required by BANK is the sole responsibility of
                              the student.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Students have to pay a full course within 60 days of the start of the
                              batch; to continue in the batch.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Applicants need to make the necessary payment as per the prescribed
                              dates.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Incase applicant fails to pay training fees, the admission would be
                              canceled without refund of any kind.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              All Fees transactions to be carried out to Radiant Account provided by
                              the management, any transaction to personal account shall not be
                              considered.
                            </p>
                          </li>
                          <li>
                            <p style={{ textAlign: 'justify' }}>
                              Cheque / DD to be drawn in favor of <strong className='text-info'>"RADIANT IT SERVICES PVT LTD"</strong>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* b */}
                  <>
                    <h5 className="text-info"> Fees Excursions</h5>
                    <div className="ml-5">
                      <ul style={{ paddingLeft: 0 }}>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The fee does not cover the prospectus cost, industrial visits,
                            excursions, pocket money, extra subject / learning support, weekend
                            outing/trips, transportation, workshops/seminars, extra tutorial and
                            medical expenses of any sort.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The fee is applicable for the training program being conducted by
                            RADIANT IT SERVICES PVT LTD.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            <strong className='text-info'>RADIANT IT SERVICES PVT LTD</strong> reserves the right to
                            revise or amend the fee schedule, if required.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </>

                  {/* c */}
                  <>
                    <h5 className="print-content text-info">Students Decorums</h5>
                    <div className="ml-5">
                      <ul className="text-sm-left" style={{ paddingLeft: 0 }}>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The student is expected to maintain discipline and decorum at all
                            times.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The RADIANT IT SERVICES PVT LTD reserves the right to cancel the
                            admission without a refund in case the student fails to abide by the
                            rules and regulations of RADIANT IT SERVICES PVT. LTD.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The fee payment should be made in due time period as notified to
                            students. In case of a loan getting rejected by the bank it is the
                            responsibility of the student to search for options for fee payment.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </>
                  {/* d */}
                  <>
                    <h5 className="mb-3 text-info">Students Decorums [ Continued ]</h5>
                    <div className="ml-5 page-break">
                      <ul className="text-sm-left" style={{ paddingLeft: 0 }}>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Students have to submit a soft copy of their Educational documents to
                            <strong className='text-info'> RADIANT IT SERVICES PVT. LTD.</strong> students will not be
                            allowed to sit for the batch unless and until the documents are
                            submitted for verification.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            It is mandatory for the student to appear for all the assessments
                            during and after the training sessions.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Students are required to appear on the interviews on the mentioned
                            dates as informed by the placement department at any location.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The student is supposed to join the organization at any location for
                            which he/she has been selected on the mentioned date as informed.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Students understand that salary packages and job location may vary; It
                            is not in control of the institute. It is the responsibility of the
                            student to earn a higher package by virtue of performance.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Students are expected to follow and fulfill the attendance required
                            during the entire duration of the program. Students cannot take more
                            than two leaves in a month. If a student fails to inform{" "}
                            <strong className='text-info'>RADIANT IT SERVICES PVT LTD,</strong>
                            HR/management and take permission about his absence for more than 3
                            times, this will be taken as a serious behavioral issue and may lead
                            to cancellation of agreement and without refund of fees, and student
                            support amount will be stopped with immediate effect.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            <strong className='text-info'>RADIANT IT SERVICES PVT LTD</strong> reserves the right to
                            take necessary action (civil or criminal) if a student is found
                            indulged in immoral activities.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Students should not participate in any political activities or form
                            unions or groups and should not be part of any political gathering
                            during their tenure with
                            <strong className='text-info'>RADIANT IT SERVICES PVT LTD.</strong>
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The admission stands canceled in case of data infringement,
                            circulating
                            <strong className='text-info'>RADIANT IT SERVICES PVT LTD</strong> printed or non-printed
                            material outside. In case of sharing training patterns and modules
                            with third parties or starting their own competitive business similar
                            to the business model of <strong className='text-info'>RADIANT IT SERVICES PVT LTD</strong>{" "}
                            or its associates.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </>

                  {/* e */}
                  <>
                    <h5 className="mb-3  text-info"> Important Information and Instructions :</h5>
                    <div className="ml-5 mb-5 ">
                      <ol
                        className="text-sm-left"
                        style={{ paddingLeft: 0, listStyleType: "decimal" }}
                      >
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Do not send original documents/ mark sheets/ certificates by post or
                            courier.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            The application form will be processed only on submission of copies of
                            all documents and records mentioned.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            Admission is subject to fulfillment of the criteria and availability
                            of seats.
                          </p>
                        </li>
                        <li>
                          <p style={{ textAlign: "justify" }}>
                            No terms and conditions mentioned above will be waived under any
                            circumstances whatsoever.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </>

                  {/* understading */}
                  <>
                    <h5 className="page-break text-center mb-3 associatedCompanies">Undertaking</h5>
                    <p style={{ textAlign: "justify" }}>
                      I hereby undertake I have applied for the Training Program with{" "}
                      <strong>RADIANT IT SERVICES PVT. LTD.</strong> I understand that fees paid
                      are the charges of training, Job/ placement call is a free service offered
                      by
                      <strong>RADIANT IT SERVICES PVT. LTD.</strong> strong to all the students
                      and there is no cost involved for placements. I have read the rules &amp;
                      regulations of
                      <strong> RADIANT IT SERVICES PVT. LTD.</strong> and shall abide by them in
                      letter and spirit. I shall also abide by the rules modified or framed in
                      future. I shall pay the fees and other changes before specified dates. I
                      shall submit my original documents for verification when informed and can be
                      shared with employer companies. I understand that a payment made is not
                      refundable. I shall abide by the rules and regulations mentioned above and
                      also mentioned in the agreement. This undertaking abides with me for my
                      entire program duration.
                    </p>
                  </>

                  <div className="form-check py-2">
                    <input className="form-check-input" type="checkbox" id="agreeCheckbox" required />
                    <label className="form-check-label fs-6" htmlFor="agree-checkbox">
                      I have read and Agreed to Radiant's Terms, Conditions, and Privacy Policy.
                    </label>
                    <div className="invalid-feedback" id="checkboxValidationMessage">
                      You must agree to the terms and conditions to continue.
                    </div>
                  </div>
                  <br />
                  <div className="container">
                    <form id="upload-form">
                      <div className="row justify-content-start">
                        <div className="col-md-4">
                          <label htmlFor="image-input" className="image-upload-box">
                            {/* <span className="custom-file-upload" id="image-status">
                                                        Upload signature
                                                    </span> */}

                            <br />

                            <input
                              type="file"
                              className='signature'
                              id="image-input"
                              name="signature"
                              accept="image/*"

                              required

                            // onChange={() => checkImageSize()}
                            />
                            <br />
                            <span id="fileMessage" style={{ color: 'rgb(18, 17, 17)' }}>
                              (File size must be less than 500 KB.)
                            </span>
                          </label>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 col-sm-12" style={{ paddingLeft: '40px' }}>
                          <label className="mb-4 dateLabel" htmlFor="dateInput">
                            Date
                          </label>
                          <input type="date" className="form-control date" id="date_submission" name="date_submission" required />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="print-content">
                    <h5 className="text-center mt-3 associatedCompanies ">Associated Companies / Partners</h5>
                  </div>
                  <div className="horizontal-image">
                    <img src={Logofooter} alt="Horizontal Image" className="" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <p className="">
                    Radiant IT Services Pvt. Ltd. takes great pride in its extensive network of associated
                    company partners, which has been meticulously cultivated to provide our clients with unparalleled technological
                    solutions. These partnerships represent a fusion of expertise, innovation, and shared values, enabling us to
                    deliver top-notch services across various domains. Our commitment to excellence is mirrored in the selection of
                    these esteemed partners, each of whom brings a unique set of skills and insights to the table. Collaborating
                    closely with these companies empowers us to offer holistic and cutting-edge solutions that cater to the diverse
                    needs of our clientele. Through our strong ties with these industry leaders,
                    Radiant IT Services Pvt. Ltd. continues to establish itself as a frontrunner in delivering
                    exceptional IT solutions and services.
                  </p>


                  {/* Submit Button */}
                  <div className="form-group text-center mt-3">
                    <button type="submit" className="downloadAndSubmit">
                      Submit and Download
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div>
  )
}

export default Enrollment
