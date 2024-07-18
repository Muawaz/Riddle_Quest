import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComponent from './components/navbar';
import Quiz from './components/Quiz';

import Footer from './components/Footer'
import About from './components/About'

import './Scrollbar.css';

import HeroSection from './components/HeroSection';
import ConactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <HeroSection />
      <div className="content">
        
        <About />
        <Quiz/> 
        <ConactUs/>
      </div>
        
      <Footer />
    </div>
  );
}

export default App;