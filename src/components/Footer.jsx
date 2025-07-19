import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    
    <footer className="footer">
     <div className='footer-up'>
        <video className="responsive-video" autoPlay muted loop>
          <source src="../service-vedio2.mp4" type="video/mp4" />
        </video>
        <h1>Designing Future-Ready Digital Experiences</h1>
     </div>
      <div className="footer-grid">
        <div className="footer-column">
          <h3>NAVIGATION</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
            <li>Design & Development</li>
            <li>Digital marketing</li>
            <li>Branding & Identity</li>
            <li>Cyber Security</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CALL US AT</h3>
          <p>7339100395</p>
          <h3>MAIL TO</h3>
          <p>info@pixellium.co</p>
        </div>
        <div className="footer-column">
          <h3>LOCATION</h3>
          <p>
            No:5, 7th Floor, Workfella, <br />
            Teynampet – 600034
          </p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2025 Pixellium. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><img src='../facebook-logo.png' className='fb-img social-logo'/></a>
          <a href="#"><img src='../linkdin-logo.png' className='ln-img social-logo'/></a>
          <a href="#"><img src='../instagram-logo.png' className='ig-img social-logo'/></a>
        </div>
      </div>
    </footer>
  );
}
