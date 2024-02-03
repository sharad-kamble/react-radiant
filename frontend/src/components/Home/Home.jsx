import React from 'react'
// 
// import Header from '../Home/Header/Header'
import Carousel from '../Home/Carousel/Carousel'
import Servicescards from '../Home/Servicescards/Servicescards'
import Inquiry from '../Home/Inquiry/Inquiry'
import Company from '../Home/Company/Company'
import Mission from '../Home/Mission/Mission'
import Jobs from '../Home/Jobs/Jobs'
import Successstories from '../Home/Successstories/Successstories'
import Testimonial from '../Home/Testimonials/Testimonial'
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Radiant IT Services Private Limited</title>
        <meta name="description" content="Join the Best Training Institute in Pune for Web development, Full-stack development & Data Science. Get trained by certified professionals with a job guarantee." />
        <meta name="keywords" content="Full stack development, Data science, web development, digital marketing, software development, it training institute in pune" />
      </Helmet>

      <Carousel />
      <Servicescards />
      <Inquiry />
      <Company />
      <Mission />
      <Jobs />
      <Successstories />
      <Testimonial />


    </div>
  )
}

export default Home