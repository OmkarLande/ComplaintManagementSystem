import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Complaint from './pages/Complaint';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup'
import AllComplaints from './pages/AllComplaints';

// import Navbar from './components/Navbar';
function App() {
 

  return (
    // <React.Fragment>
    //   <Navbar/>
    <BrowserRouter>

    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/complaint" element={<Complaint/>}/>
      <Route path="/allcomplaints" element={<AllComplaints/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/loginsingup" element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    // </React.Fragment>
  );
}

export default App;
