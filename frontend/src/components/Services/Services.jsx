import React from 'react';
import './services.css';
import DigitalMarketingServices from '../../assets/images/DigitalMarketingServices.png';
import WebDevServices from '../../assets/images/WebDevServices.png'
// import digitalMrkSer from "../../assets/images/digitalMrkSer.png"
import GraphicDesignSer from "../../assets/images/GraphicDesignSer.png";
import BillingSoftware from "../../assets/images/BillingSoftware.png"
import { Helmet } from 'react-helmet';


const Services = () => {

    // const backgroundStyle = {
    //     backgroundImage: `url(${digitalMrkSer})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     height: '800px',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color: '#ffffff',
    //     textAlign: 'center',
    // };
    return (
        <div>
            <Helmet>
                <title>Our Services</title>
                <meta name="description" content="Get the best It services in Pune at Radiant IT Services. We provide Digital Marketing services, Web development services, graphic designing services in Pune." />
                <meta name="keywords" content="It services in Pune, the Best IT service company in Pune, Web development company in Pune, Digital marketing agency in Pune, IT company in Kharadi, Web development company in Kharadi." />
            </Helmet>
            {/* section 1 */}
            <div className='container-fluid fullstkCon'>
                <div className='container py-5'>
                    <h1 className='abouth3 text-center pb-2'><strong>Welcome to Radiant IT Services Pvt Ltd</strong></h1>
                    <p className='text-center fullstkPara'>
                        At Radiant IT Services Pvt Ltd, we bring your digital aspirations to life through<br />

                        a trifecta of expertise – Digital Marketing, Web Development, and Graphic Design<br />
                        .
                        With a commitment to innovation, excellence,<br />

                        and client success, we are your trusted partner in navigating the dynamic

                        digital landscape.
                    </p>
                </div>
            </div>

            {/* section 2 */}
            <div className='container-fluid' >
                <div className='container'>
                    <h3 className='text-center m-5 servicsText'>
                        OUR SERVICES
                    </h3>

                    <div className='row'>
                        <div className='col-md-6 DigitalMrktSer'>
                            <h4 className='text-center p-3 text-light'>
                                DIGITAL MARKETING SERVICES
                            </h4>
                        </div>
                    </div>

                    <div className='px-5 py-3 my-3 text-dark text-start'>
                        <p>
                            In today’s digital world online marketing is an easier and affordable way for marketing compared to traditional ways.
                            We offer various Digital Marketing services that will help businesses to grow and scale. We ensure your ranking and
                            branding with our professionals.
                        </p>
                    </div>

                    <div className='row mt-5 '>
                        <div className='col-md-6 text-dark  text-start'>
                            <ul>
                                <li className='fs-4'><strong>SEO (Search Engine Optimization)</strong></li>
                                <p>
                                    Our SEO services are meticulously crafted to elevate your
                                    online presence, ensuring that your business stands out in
                                    search engine results. We provide Local SEO that will help
                                    you increase footfall to your doorstep.

                                </p>

                                <li className='fs-4'><strong>Lead Generation</strong></li>
                                <p>
                                    Drive customer engagement and loyalty through our
                                    comprehensive lead generation strategies, converting potential
                                    leads into devoted clients. A funnel that will bring you more
                                    leads and increased revenue.

                                </p>

                                <li className='fs-4'><strong>Google Ads</strong></li>
                                <p>
                                    Maximize your reach and visibility with strategic Google
                                    Ads campaigns, precisely tailored to your target audience.
                                    We track campaigns optimize them accordingly, and help
                                    you with conversion tracking and reporting.


                                </p>

                                <li className='fs-4'><strong>SMM (Social Media Marketing)</strong></li>
                                <p>
                                    Harness the power of social media with our SMM services,
                                    designed to enhance brand awareness, engagement, and
                                    conversions across various platforms. We help businesses
                                    reach their desired audience with our proven SMM strategies,
                                    which have helped more than 50+ companies in a year.

                                </p>
                            </ul>

                        </div>
                        <div className='col-md-6 my-auto text-center'>
                            <img src={DigitalMarketingServices} alt='Dital Marketing services Img' className='img-fluid ' style={{ height: "450px" }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className='container-fluid webDevelopmentSer mt-5'>
                <div className='container py-5'>
                    <div className='row '>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'>
                            <div className='text-end webDevSer '>
                                <h4 className='text-light p-3 text-center'>
                                    WEB DEVELOPMENT SOLUTIONS
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 my-auto text-center'>
                            <img src={WebDevServices} alt='Dital Marketing services Img' className='img-fluid ' style={{ height: "450px" }} />
                        </div>
                        <div className='col-md-6'>
                            <ul>
                                <li className='fs-4'><strong>Website Development</strong></li>
                                <p>
                                    Crafting visually appealing and functional websites that
                                    not only represent your brand but also deliver an
                                    unparalleled userexperience. We will design both static
                                    and dynamic sites for you. From a simple blogging site
                                    to a tailor-made business site, and a dedicated e-
                                    Commerce site, we will design it for you.
                                </p>
                                <p>
                                    Our responsive web design improves user experience.
                                    Additionally, we offer website redesigning services too.
                                    This helps organizations to restructure their site according
                                    to their needs.

                                </p>

                                <li className='fs-4'><strong>Web Applications</strong></li>
                                <p>
                                    Empower your business with custom web applications,
                                    tailored to streamline operations and enhance efficiency.
                                    Take your business to everyone’s palm with our web
                                    application services. This has helped the business to
                                    reach more than 2,00,000+ users.

                                </p>

                                <li className='fs-4'><strong>CRM
                                    (Customer Relationship Management)</strong></li>
                                <p>
                                    Optimize customer interactions and boost productivity
                                    with our CRM solutions, tailored to meet the unique
                                    needs of your business. Whether you're a startup or
                                    an established enterprise, our scalable and adaptable
                                    CRM solutions grow with your business, ensuring
                                    sustained customer satisfaction and business growth.

                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 4 */}
            <div className='container-fluid mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 DigitalMrktSer'>
                            <h4 className='text-center p-3 text-light'>
                                BILLING SERVICES
                            </h4>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-6 d-flex align-items-center' style={{ lineHeight: "40px" }}
                        >
                            <p>
                                Efficient and user-friendly billing software designed to
                                simplify financial processes, ensuring accuracy and
                                timeliness. Our services are designed to simplify and
                                optimize your billing processes, ensuring accuracy and
                                timeliness. From invoicing to expense tracking, our billing
                                software streamlines financial workflows, enhancing overall
                                efficiency.
                            </p>
                        </div>
                        <div className='col-md-6 my-auto text-center'>
                            <img src={BillingSoftware} alt='Billing SoftwareImg' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>



            {/* section 5 */}

            <div className='container-fluid mt-5 GraphicDesignSer'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'>
                            <div className='text-end webDevSer mt-5'>
                                <h4 className='text-light p-3 text-center'>
                                    Graphic Design Expertise
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-6  text-center'>
                            <img src={GraphicDesignSer} alt='Dital Marketing services Img' className='img-fluid ' style={{ height: "450px" }} />
                        </div>
                        <div className='col-md-6'>
                            <p className='mt-5 text-light'>
                                Transform your brand's visual identity with Radiant IT
                                Services' Graphic Design expertise. From eye-catching
                                logos to engaging marketing collateral, our creative
                                solutions leave a lasting impression. Our staff of a
                                combined 15 years of experts working behind your idea
                                to make it a reality. Elevate your brand aesthetics with us
                                — where innovation meets impact. Contact us to craft
                                visuals that define and amplify your brand narrative!

                            </p>
                            <p className='mt-3 text-light'>
                                At Radiant IT Services Pvt Ltd, we pride ourselves on
                                our commitment to excellence, innovation, and client
                                satisfaction. Whether you are seeking to enhance your
                                online presence, develop cutting-edge web solutions,
                                or captivate your audience through stunning designs,
                                we have the expertise to turn your vision into reality.
                                Contact us today, and let's embark on a journey of d
                                igital brilliance together!

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services
