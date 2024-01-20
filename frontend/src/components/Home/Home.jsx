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


const Home = () => {
  return (
    <div>


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