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
  <section className="hero-section-2">
    <div className="hero-container-2">
      <div class="aboutUs-image">

      </div>  
      <div className="aboutUs-text">
        <h4>About Us</h4>
        <h1>Creative design Studio driven by innovation and purpose</h1>
        <p>Our Creative Journey Pixellium began with a simple mission, to bring stories to life through powerful design and technology. Our team of passionate designers, developers, and cybersecurity experts work together to elevate your brand through pixel-perfect visuals and seamless digital solutions.</p>
      </div>
    </div>
  </section>
  <section className="hero-section-3">
    <div className="Our-services">
        <h4>Our Services</h4>
        <h1>We blend creativity & strategy to craft impactful designs</h1>
    </div>

    <div className="hero-container-3">
      <div className="service-container-1">
        <div className="service-DM os-1">
            <h2>Digital Marketing</h2>
            <p>Creating visual styles tht makes companies stand out  in their market with unique character and style</p>
            <img src="../dm-1.png"></img>
        </div>
        <div className="os-2">

        </div>
      </div>
      <div className="service-container-2">
        <div className="service-SM oss">
            <h2>Social Media Marketing</h2>
            <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
            <img src="../SM-img.png"/>
        </div>
        <div className="service-GM oss">
          <h2>Google & Meta Ads</h2>
          <p>We offer SEO services to increase your website visibility, improve search rankings and attract more customers</p>
          <img src="../GM-img.png"/>
        </div>
        <div className="service-DC oss">
          <h2>Digital Campaign</h2>
          <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
          <img src="../DC-img.png" />
        </div>
        <div className="service-SP oss">
          <h2>Stratergic Planning</h2>
          <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
          <img src="../SP-img.png" />
        </div>
      </div>

    </div>
        
    <div className="hero-container-4">      
      <div className="service-container-2">
        <div className="service-SM oss">
            <h2>Website Design</h2>
            <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
            <img src="../WD-img.png"/>
        </div>
        <div className="service-GM oss">
          <h2>App Design</h2>
          <p>We offer SEO services to increase your website visibility, improve search rankings and attract more customers.</p>
          <img src="../AD-img.png"/>
        </div>
        <div className="service-DC oss">
          <h2>SAAS Product Design</h2>
          <p>We offer SEO services to increase your website visibility, improve search rankings and attract more customers.</p>
          <img src="../SPD-img.png" />
        </div>
        <div className="service-SP oss">
          <h2>Search Engine optimisation</h2>
          <p>We offer SEO services to increase your website visibility, improve search rankings and attract more customers</p>
          <img src="../SEO-img.png" />
        </div>
      </div>
      <div className="service-container-1">
        <div className="service-DM os-1">
            <h2>Design & Development</h2>
            <p>Creating visual styles tht makes companies stand out  in their market with unique character and style</p>
            <img src="../DD-img.png"></img>
        </div>
        <div className="os-2">

        </div>
      </div>
 

    </div>
    
    <div className="hero-container-5">
      <div className="service-container-1">
        <div className="service-BI os-1">
            <h2>Branding & Identity</h2>
            <p>Creating visual styles tht makes companies stand out  in their market with unique character and style</p>
            <img src="../BI-img.png" className="BI-img"></img>
            <img src="../BI-2.png" className="BI-img2" />
            <img src="../BI-3.png" className="BI-img3" />
        </div>
        <div className="os-2">

        </div>
      </div>
      <div className="service-container-2">
        <div className="service-SM oss">
            <h2>Brand Guidelines</h2>
            <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
            <img src="../SM-img.png"/>
        </div>
        <div className="service-GM oss">
          <h2>Google & Meta Ads</h2>
          <p>We offer SEO services to increase your website visibility, improve search rankings and attract more customers</p>
          <img src="../GM-img.png"/>
        </div>
        <div className="service-DC oss">
          <h2>Digital Campaign</h2>
          <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
          <img src="../DC-img.png" />
        </div>
        <div className="service-SP oss">
          <h2>Stratergic Planning</h2>
          <p>From Designs to Development, We bring concept to life online creating apps, websites Saas Products and many more.</p>
          <img src="../SP-img.png" />
        </div>
      </div>

    </div>
  </section>
  <Footer />
  </>
    );
}