import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
export default function LandingPage(){
  const navigate=useNavigate();
  const GoToContact=()=>{
    navigate('/contact');
  };
    const [isDiv,setDiv]=useState(true);
    const handleclick=()=>{
      setDiv(false);
    };
    return(
      <>
    <Header isDiv={isDiv} setDiv={setDiv}/>
    <section class="hero-section" onClick={handleclick}>
    <div class="hero-container">
      <div class="hero-text">
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="rating-text">Rated 4.9/5</span>
        </div>

        <h1>Designing Future-Ready<br/>Digital Experiences</h1>

        <p>
          We craft immersive visuals, intuitive Designs and secure web ecosystems.
          Whether you're a startup, enterprise or creative agency, we synchronize
          your ideas into impactful digital realities.
        </p>

        <div class="hero-buttons">
          
          <div class=" landing-enquiry-btn">

            <div onClick={GoToContact}><button>Get in touch</button></div>
            <div className="circle">

            </div>

            <span className="right-arrow"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6248 13.4582L9.61546 12.4665L12.8738 9.20817H1.4165V7.7915H12.8738L9.63317 4.53317L10.6248 3.5415L15.5832 8.49984L10.6248 13.4582Z" fill="white"/>
</svg>
</span>
          </div>
          <button class="btn secondary">What we do</button>
        </div>
      </div>

      <div class="hero-image"></div>
    </div>
  </section>
  <Footer />
  </>
    );
}