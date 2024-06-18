import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Services from '../src/components/Services';
import Contact from '../src/components/OurTeam';

const App = () => {
  return (
    <Router>
        <Navbar />
        
        <Routes>
          
          <Route path='/' element={<Home />}/>            
          <Route path="/about" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
        
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
