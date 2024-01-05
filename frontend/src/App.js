

import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Inquiry from './components/Inquiry/Inquiry';
import Servicescards from './components/Servicescards/Servicescards';
import Socialbar from './components/Socialbar/Socialbar';
import Company from './components/Company/Company';
import Mission from './components/Mission/Mission';
import Jobs from './components/Jobs/Jobs';
import Successstories from './components/Successstories/Successstories';
import Footer from './components/Footer/Footer';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Testimonial from './components/Testimonials/Testimonial';
import Placement from './components/Placementnews/Placement';

function App() {
  return (
    <Router>

      <Socialbar />
      <Header />
      <Carousel/>
      <Servicescards/>
      <Inquiry/>
      <Company/>
      <Mission/>
      <Jobs/>
      <Successstories/> 
      <Testimonial/>
      {/* <Placement/> */}
  
      <Footer/>
     
       
     
    </Router>
  );
}

export default App;
