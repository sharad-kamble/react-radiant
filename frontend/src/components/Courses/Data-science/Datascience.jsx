import React from 'react'
import './Datascience.css';
import Ellipse from '../../../assets/images/Ellipse.png';
import { MdPhone } from 'react-icons/md';
import { FaEnvelope } from "react-icons/fa6";
import CourseFeature from "../../../assets/images/CourseFeature.png";
import CourseDurationDatasci from "../../../assets/images/CourseDurationDatasci.png";
// import StudentReview from "../../.././assets/images/StudentReview.png";
// import VaishnaviGangawane from "../../../assets/images/VaishnaviGangawane.png"
// import RahulDhepe from "../../../assets/images/RahulDhepe.png"
// import ShraddhaAntad from "../../../assets/images/ShraddhaAntad.png"
import Pritidatasci from "../../../assets/images/Pritidatasci.png"
import Rohitdatasci from "../../../assets/images/Rohitdatasci.png"
import Vrushalidatasci from "../../../assets/images/Vrushalidatasci.png"
import { Helmet } from 'react-helmet';
const Datascience = () => {
  return (
    <div>
      <Helmet>
        <title>Data Science Course</title>
        <meta name="description" content="This online Data Science training course helps you become a certified Data Scientist with in-demand skills MySQL, NLP, deep learning and AWS." />
        <meta name="keywords" content="data science course, data science course fees, data science course in pune, data science course in pune with placement guarantee, data science course in pune fees" />
      </Helmet>
      <div className='container-fluid fullstkCon'>
        <div className='container py-5'>
          <h1 className='abouth3 text-center pb-2'><strong>DATA SCIENCE </strong></h1>
          <p className='text-center fullstkPara'>
            Unlock the potential of data and embark on a transformative journey with our comprehensive<br />

            6-month Data Science Course. In this dynamic program, you will gain the skills and knowledge<br />

            needed to navigate the complex world of data, extracting meaningful insights that drive informed<br />

            decision-making. Whether you're a seasoned professional or a newcomer to the field, our course<br />

            is designed to equip you with the tools to succeed in the rapidly evolving landscape of data

            science.
          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className=' container '>
        <div className='row'>
          <div className='col-md-6 py-4'>
            <h3 className='abouth3 courseCnt'><strong>COURSE CONTENT</strong></h3>
          </div>
          <div className='col-md-6 text-end TextEnd py-4'>
            <img className='circleImg' src={Ellipse} alt='Circle Image' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className="accordion accordion-flush my-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header " id="flush-headingOne">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <span className="plus-sign "> + </span>Module 1 : Python Basics
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <li>Python History & Introduction</li>
                    <li>Variables and its Rule</li>
                    <li>Data Types: Numeric, Sequence, Boolean, Set, Dict</li>
                    <li>Operators: Arithmatic, Logical, Assignement, Comparison, Membership, Identity, Bitwise</li>
                    <li>Loops in Python: For, While</li>
                    <li>Conditional Statements: if, elif, else</li>
                    <li>Control Statements: Break, continue, pass</li>
                    <li>Arrays</li>
                    <li>Functions: Built-in, User-defined, Anonymous and Recursive </li>
                    <li>Object-Oriented Programming: Class,Object, Inheritance, Abstraction, Polymorphism,
                      Encapsulation</li>
                    <li>GUI</li>
                    <li>File Handling </li>
                    <li>Regular Expressions</li>
                    <li>Exception Handling</li>
                    <li>Project</li>
                    <li>Framework (Advanced)</li>
                    <li>Flask: Introduction, Enviroment creation, installation, Application, Routing, Variable Rules,
                      URL building, HTTP methods</li>
                  </div>
                </div>
              </div>
            </div>

            {/* secound */}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <span className="plus-sign "> + </span>Module 2 : Statics Basics
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>History and Introduction of Statistics</li>
                      <li>Introduction to Basic Terms</li>
                      <li>Variables & Random Variables</li>
                      <li>Population,Sample,Population Mean,Sample Mean</li>
                      <li>Population Distribution, Sample Distribution and Sampling Distribution</li>
                      <li>Measure of Central Tendency- Mean, Median ,Mode</li>
                      <li>Measure Of Dispersion - Range, Variance, Standard Deviation</li>
                      <li>Many different plotting graphs</li>
                      <li>Correlation</li>
                      <li>Skewness & Kurtosis</li>
                      <li>Testing of Hypothesis: Z test, T-test, ANOVA, Chi-square test</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Third  */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <span className="plus-sign "> + </span> Module 3 : Data Manipulation using Python
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Numpy</li>
                      <li>Pandas</li>
                      <li>Matplotlib</li>
                      <li>Seaborn</li>
                      <li>EDA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Four */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <span className="plus-sign "> + </span>Module 4 : MYSQL
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>History and Introdunction of SQL</li>
                      <li>Properties of database and SQL</li>
                      <li>Use of databases</li>
                      <li>Types of commands in SQL: DDL,DML,DQL,TCL and etc</li>
                      <li>DDL commands and implementation</li>
                      <li>DML commands and implementation</li>
                      <li>DQL command and implementation</li>
                      <li>Clauses in SQL and aggregate functions</li>
                      <li>Where ,Order by, Distinct, Limit, Group by, having</li>
                      <li>SQL joins: Inner and outer joins</li>
                      <li>Constraints in SQL: Not null, unique, primary key, foreign key, index, check , default</li>
                      <li>Stored Procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Five */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <span className="plus-sign "> + </span> Module 5 : Machine Learning
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Introduction</li>
                      <li>Types of ML: Supervised,Unsupervised and Reinforcement ML with algorithms</li>
                      <li><strong>Supervised ML Algorithms with Practicals</strong></li>
                      <li>Linear Regression (Simple, Multiple)</li>
                      <li>Logistic Regression</li>
                      <li>K-Nearest Neighbour</li>
                      <li>Decision Tree</li>
                      <li>Random Forest</li>
                      <li>AdaBoost</li>
                      <li>Support Vector Machine</li>
                      <li>Naive Bayes Classifier</li>
                      <li>Gradient Boost</li>
                      <li>Extreme Gradient Boost</li>
                      <li><strong>Unsupervised Machine Learning with Practicals</strong></li>
                      <li>K-Means Clustering</li>
                      <li>Principal Component Analysis</li>
                      <li>End to End Project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Six */}

            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <span className="plus-sign "> + </span> Module 6 : Deep Learning
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>What is deep learning ? why ? DL vs ML</li>
                      <li>Types of neural network ? its application</li>
                      <li>History of perceptron</li>
                      <li>Why perceptron failed?</li>
                      <li>Neural network basis ,neuron, layer, activation function</li>
                      <li>How to build? What are weight and bias?</li>
                      <li>Forward and backard propagation ? chain rule?</li>
                      <li>Gradient descent</li>
                      <li>Stochastic gd , mini batch</li>
                      <li>Adadelta, adagrad, rmsprop</li>
                      <li>Adam optimizer</li>
                      <li>Activation functions sigmoid,tanh,relu,leaky relu,softmax,p-relu,softplus</li>
                      <li>Sigmoid vanishing gradient problem</li>
                      <li>Relu dying problem</li>
                      <li>Exploding gradient</li>
                      <li>Advantages , disadvantages and applications</li>
                      <li>Loss functions (Mse, mae, huber loss, log error)</li>
                      <li>Drop out ratio</li>
                      <li>Overfitting problem</li>
                      <li>ANN implementation</li>
                      <li>CNN architecture, pixel, RGB concept, image structure</li>
                      <li>Convolution layer</li>
                      <li>Data augmentation, convolution, stride, padding and types, pooling and types</li>
                      <li>Edge detection</li>
                      <li>CNN implementation</li>
                      <li>End to End Project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Seven */}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <span className="plus-sign "> + </span> Module 6 : NLP
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>NLP introduction</li>
                      <li>Basic terminology of Nlp</li>
                      <li>NLP pipeline</li>
                      <li>Eda - ngram , Wordcloud</li>
                      <li>Keyphrase extraction algorithms YAKE RAKE pagerank</li>
                      <li>Preprocessing:</li>
                      <li>Tokenization - word tokenization, sentence tokenization , whitespace tokenizer, regex tokenization</li>
                      <li>Normalization</li>
                      <li>Stopwords removal</li>
                      <li>Autocorrection</li>
                      <li>Language detection and translation with textblob, Google trans</li>
                      <li>Stemming, lemmatization</li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Eight */}
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
              <div className="accordion-item customAccordion">
                <h2 className="accordion-header" id="flush-headingEight">
                  <button className="accordion-button collapsed accordionBtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                    <span className="plus-sign "> + </span> Module 7 : Cloud
                  </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul>
                      <li>Understanding deployment</li>
                      <li>Need of AWS</li>
                      <li>Free tier account creation</li>
                      <li>Introduction to AWS home</li>
                      <li>Regions and availability zones</li>
                      <li>Billing dashboard</li>
                      <li>Understanding EC2</li>
                      <li>Creating and launching ec2 instance</li>
                      <li>Deployment of project on ec2</li>
                      <li>Stopping and terminating instance and I'd</li>
                      <li>Introduction to all available services provided by AWS (Theory)</li>
                      <li>AWS Sagemaker - Creating notebook instance</li>
                      <li>Building model using inbuilt jupyter sample notebook</li>
                      <li>Creating and deleting IAM role</li>
                      <li>Deleting Sagemaker endpoints</li>
                      <li>AWS S3 - Introduction</li>
                      <li>Creating buckets and uploading objects into it</li>
                      <li>Integrating S3 with Sagemaker</li>
                      <li>Emptying and Deleting buckets</li>
                      <li>End to End Project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className='col-md-6'>



            <div className='FullstackCard p-4 py-4'>
              <div>
                <h2 className='text-light mx-4 mt-4'>Contact Us</h2>
              </div>
              <div className="d-flex align-items-center  py-2">
                <div className="bg-danger text-light rounded-circle  mx-4">
                  <MdPhone size={25} className="phone-icon" />
                </div>
                <span className="mx-4 phone-text text-white">+91-7077070030</span>
                <div className="custom-vr mx-2"></div>
                <div className="mx-4 text-light">+91-8483811160</div>
              </div>
              <div className="d-flex align-items-center  py-2">
                <div className="bg-success text-light rounded-circle  mx-4">
                  <FaEnvelope size={25} className="phone-icon" />
                </div>
                <span className="mx-4 phone-text text-white">info@radiantitservices.in
                  hr@radiantitservices.in</span>
                {/* <div className="custom-vr mx-2"></div>
                <div className="mx-4 text-light">+91-9766861473</div> */}
              </div>
            </div>

            <div className='DatascienceCard  p-4 mt-4 py-4 '>
              <div>
                <h2 className='text-light text-center mx-4 py-3'>
                  BENEFITS OF THE
                  COURSE
                </h2>
              </div>
              <div>
                <ul>
                  <li>Rapid Skill Acquisition</li>
                  <li>Hands-On Projects</li>
                  <li>Industry-Relevant Curriculum </li>
                  <li>Expert Instruction </li>
                  {/* <li>Adaptive Curriculum</li> */}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Section 3 */}

      <div className='container-fluid fullstackCourseDetail'>
        <div className='container fullstackCrsDetail mt-5'>
          <div className='row m-4'>
            <h2 className='courseDetailText text-center py-2'>COURSE DETAILS</h2>
            <p className='text-center fs-5 py-2'>
              Discover the power of data with our 6-month Data Science Course! This
              program helps you understand data better so you can make smart decisions
              . Whether you're new or experienced, our course gives you the skills to succeed
              in the changing world of data science. Join us and learn to find important
              information from data!
            </p>

          </div>
        </div>

        {/* section 4 */}
        <div className='container mt-5'>
          <h2 className='text-center mb-5 courseDetailText'>KEY FEATURE</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'> 96 hours of high-quality course contents</h6>
              </div>

              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'> Live Project</h6>
              </div>
              <div className="d-flex align-items-center my-2 mx-5 ">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'>Experienced Faculty</h6>
              </div>

            </div>
            <div className="col-md-6">

              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'>Placement Support | Post training support</h6>
              </div>

              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'> Best Quality Training</h6>
              </div>
              <div className="d-flex align-items-center my-2 mx-5">
                <img src={CourseFeature} alt="Experienced Faculty" className="mr-2" />
                <h6 className='my-1 mx-1'>In-depth Course Contents</h6>
              </div>
            </div>
          </div>
        </div>


        {/* Section 5 */}

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <img src={CourseDurationDatasci} alt="Course Duration Img" className="img-fluid mr-2" />
            </div>
            <div className='col-md-6'>
              <h2 className='courseDetailText mt-5 '>COURSE DURATION</h2>
              <p className='fs-5 py-2 mt-5'>
                Our intensive 6-month program is
                crafted to provide a deep dive into
                the core concepts of data science
                while ensuring a time-efficient and
                immersive learning experience.
                This condensed timeline allows
                you to quickly acquire in-demand
                skills and apply them to real-
                world scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}

      <div className='container-fluid py-5 courseReview'>
        <div className='container'>
          <h2 className='ReviewText text-center mb-5 text-light'>REVIEWS</h2>
          <div className='row'>
            {/* Card 1 */}
            <div className='col-md-4 col-sm-12'>
              <div className="ReviewCard card h-100">
                <div className="row">
                  <div className='std col-md-6 text-end'>
                    <img
                      src={Vrushalidatasci}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Vrushali <br />Nannaware</h5>
                      <div className='ReviewRating'>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    I completed the Data Science course at
                    Radiant IT Services. The instructors taught
                    us important algorithms and statistical models.
                    The hands-on exercises on Python and R
                    programming languages. The tasks related to
                    machine learning models were exceptional.
                    An exceptional course.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 1 */}
            <div className='col-md-4 col-sm-12'>
              <div className="ReviewCard card h-100">
                <div className="row">
                  <div className='std col-md-6 text-end'>
                    <img
                      src={Pritidatasci}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Priti Jagtap</h5>
                      <div className='ReviewRating'>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    Outstanding Data Science course! In-depth
                    coverage of regression, clustering, and
                    cutting-edge techniques like NLP and deep
                    learning. Hands-on experience with Jupyter
                    Notebooks and Pandas. Highly recommended
                    for aspiring data scientists.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 1 */}
            <div className='col-md-4 col-sm-12'>
              <div className="ReviewCard card h-100">
                <div className="row">
                  <div className='std col-md-6 text-end'>
                    <img
                      src={Rohitdatasci}
                      className="std-img img-fluid rounded-circle mt-3"
                      style={{ height: "125px" }} alt="Profile Image"
                    />
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4 text-left'>
                    <div className="rating">
                      <h5 className="card-title mt-2">Rohit Male</h5>
                      <div className='ReviewRating'>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                        <span className="star star-yellow">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    Radiant IT Services' Data Science course
                    exceeded expectations. Comprehensive
                    curriculum, practical exercises in
                    TensorFlow and
                  </p>
                </div>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Datascience