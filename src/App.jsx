import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Components/Home';
import AboutClinic from './assets/Components/AboutClinic';
import About from './assets/Components/About';
import Treatment from './assets/Components/Treatment';
import Contact from './assets/Components/Contact';
import Contactform from './assets/Components/Contactform';
import OurServices from './assets/Components/OurServices';
import Result from './assets/Components/Result';
import BookAppointment from './assets/Components/BookAppointment';
import Footer from './assets/Components/Footer';
import Aboutfirstsec from './assets/Components/AboutfirstSec';
import AboutDoctor from './assets/Components/AboutDoctor';
import Aboutsecondsec from './assets/Components/Aboutsecondsec';
import Aboutthirdsec from './assets/Components/Aboutthirdsec';
import Workinghours from './assets/Components/Workinghours';
import AboutReview from './assets/Components/AboutReview';
import AboutGallery from './assets/Components/AboutGallery';
import Toothache from './assets/Components/Toothache';
import Myomectomy from './assets/Components/Myomectomy';
import Stainedteeth from './assets/Components/Stainedteeth';
import Painfulteething from './assets/Components/Painfulteething';
import Cavities from './assets/Components/Cavities';
import Services from './assets/Components/Services';
import Services1 from './assets/Components/Services1';
import Services2 from './assets/Components/Services2';
import Servicescontact from './assets/Components/Servicescontact';
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Contactform" element={<Contactform />} />
        <Route path="/Bookappointment" element={<BookAppointment />} />
        <Route path="/AboutClinic" element={<AboutClinic />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Aboutfirstsec" element={<Aboutfirstsec />} />
        <Route path="/Aboutvideo" element={<AboutDoctor />} />
        <Route path="/Aboutsecondsec" element={<Aboutsecondsec />} />
        <Route path="/Aboutthirdsec" element={<Aboutthirdsec />} />
        <Route path="/Workinghours" element={<Workinghours />} />
        <Route path="/AboutReview" element={<AboutReview />} />
        <Route path="/AboutGallery" element={<AboutGallery />} />
        <Route path="/Toothache" element={<Toothache />} />
        <Route path="/Myomectomy" element={<Myomectomy />} />
        <Route path="/Stainedteeth" element={<Stainedteeth />} />
        <Route path="/Painfulteething" element={<Painfulteething />} />
        <Route path="/Cavities" element={<Cavities />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services1" element={<Services1 />} />
        <Route path="/Services2" element={<Services2 />} />
        <Route path="/Servicescontact" element={<Servicescontact />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
