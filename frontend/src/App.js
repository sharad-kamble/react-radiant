

// import Carousel from './components/Carousel/Carousel';
// import Header from './components/Header/Header';
// import Inquiry from './components/Inquiry/Inquiry';
// import Servicescards from './components/Servicescards/Servicescards';

// import Company from './components/Company/Company';
// import Mission from './components/Mission/Mission';
// import Jobs from './components/Jobs/Jobs';
import Socialbar from './components/Socialbar/Socialbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import About from './components/About/About'
import Fullstack from './components/Courses/Fullstack/Fullstack'
import Datascience from './components/Courses/Data-science/Datascience'
import Webdevelopment from './components/Courses/Web-development/Webdevelopment'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Digitalmarketing from './components/Courses/Digital-marketing/Digitalmarketing';
import UIdesign from './components/Courses/UI-UX-design/UIdesign';
import Salesforce from './components/Courses/Salesforce/Salesforce';
import Powerbi from './components/Courses/PowerBi/Powerbi'
import Services from './components/Services/Services'
import Placement from './components/Placements/Placement'
import Enrollment from './components/Enrollment/Enrollment';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';




function App() {
  return (
    <Router>
      <Socialbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/full-stack-development-course" element={<Fullstack />} />
        <Route path="/courses/data-science-course" element={<Datascience />} />
        <Route path="/courses/web-development-course" element={<Webdevelopment />} />
        <Route path="/courses/digital-marketing-course" element={<Digitalmarketing />} />
        <Route path="/courses/ui-ux-design-course" element={<UIdesign />} />
        <Route path="/courses/salesforce-course" element={<Salesforce />} />
        <Route path="/courses/powerbi-course" element={<Powerbi/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/placement" element={<Placement/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/enroll-now" element={<Enrollment/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;