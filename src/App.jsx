
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Main from './Components/Main';


import Contact from './Pages/Contact';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
     
  
    </Router>
  );
};

export default App;
