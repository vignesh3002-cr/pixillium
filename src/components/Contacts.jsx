import { useState } from "react";
import React  from "react";
import Header from "./Header";
function Contacts(){
  const[isService,setService]=useState(false);
  const[ismobile_menu,setMobileMenu]=useState(false);
  const[text,setText]=useState("We deliver seamless Service experiences");
  const[isfade,setFade]=useState(false)
  const onMouseRemove=()=>setText("We deliver seamless Service experiences");
  const onHoverService=(txt)=>{
    setFade(true);
    setTimeout(()=>{
      setText(txt);
      setFade(false);
    },300);
    
  };
  return(
    <>
  <header class="navbar">
    <img src="../Group.png" alt="Logo" class="logo" />
    <nav>
      <ul class="nav-links">
        <li>About</li>
        <li onMouseEnter={()=>setService(true)} onMouseLeave={()=>setService(false)} style={{color:isService?"black":"rgba(57, 57, 57, 0.8)"}}>
           Service <span className={`arrow-icon ${isService? 'rotate-up' : ''}`}><img src="../dw_arrow.png"/></span>
          </li>
        <li>Case Studies</li>
        <li>Contact Us</li>
        <li><button class="enquiry-btn">Enquiry</button></li>
      </ul>
    </nav>
    {ismobile_menu? (<img src="../cancel.png" className="tabler_menu_cancel" onClick={()=>setMobileMenu(false)} />):(<img src="../tabler_menu.png" className="tabler_menu" onClick={()=>setMobileMenu(true)} />) }

  </header>

  <main class="contact-section">
    <div class="contact-wrapper">
  
      <div class="contact-sidebar">
        <h4>CALL US AT</h4>
        <p>7339100395</p>
        <h4>MAIL TO</h4>
        <p>info@pixellium.co</p>
        <h4>LOCATION</h4>
        <p>No:5, 5th Floor, Workfella, <br></br>Teynampet - 600034</p>
        <h4>OUR SERVICES</h4>
        <ul>
          <li>Digital Marketing</li>
          <li>Design & Development</li>
          <li>Branding & Identity</li>
          <li>Cybersecurity</li>
        </ul>
      </div>

      <div class="contact-form">
        <h2>We Love To Hear From You</h2>
        <p>
          Whether you’re starting a new project, looking to refresh your brand, or
          just curious about how great design can elevate your business—we’re here
          to help. Drop us a message or reach out directly through the details
          below. Let’s create something amazing together.
        </p>

        <form>
          <div class="form-grid">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <label>E-mail Address</label>
              <input type="email" placeholder="E-mail Address" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div>
              <label>Company</label>
              <input type="text" placeholder="Company" />
            </div>
            <div>
              <label>Select the service</label>
              <select name="service" >
                <option value="">Select the service</option>
                <option>Digital Marketing</option>
                <option>Design & Dev</option>
                <option>Cybersecurity</option>
              </select>
            </div>  
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </main>

  {isService && (
    <div className="service_container" onMouseEnter={()=>setService(true)} onMouseLeave={()=>setService(false)}>
      <div className="service_content">
        <div className="service_content1" >
          <h2 style={{color:"black"}} className={`text-fade ${isfade?'fade-out':'fade-in'}`}>{text}</h2>
          <img src=""/>
        </div>
        <div className="service_domains">
          <div className="service_content2 services">
            <div className="s1 domain" onMouseEnter={()=>onHoverService("We deliver seamless digital experiences")} onMouseLeave={onMouseRemove}>
              <h5>Design & Development</h5>
              <p>Building modern websites & platforms with clean code & seamless integration</p>
            </div>
            <div style={{marginTop:"40px"}} className="s2 domain" onMouseEnter={()=>onHoverService("We craft story & emotion  that customers connect")} onMouseLeave={onMouseRemove}>
              <h5>Branding</h5>
              <p>Creating lasting brand identities and impactful designs</p>
            </div>
          </div>
          <div className="service_content3 services">
            <div className="s3 domain" onMouseEnter={()=>onHoverService("Marketing That Moves Your Brand Forward")} onMouseLeave={onMouseRemove}>
              <h5>Digital Marketing</h5>
              <p>Our stratergic approach makes your brand reach audience</p>
            </div>
            <div style={{marginTop:"40px"}} className="s4 domain" onMouseEnter={()=>onHoverService("end-to-end cybersecurity solutions")} onMouseLeave={onMouseRemove}>
              <h5>Cyber Security</h5>
              <p>Ensuring that your digital presence is safe, secure, and protected</p>
            </div>
          </div>
          </div>
      </div>
    </div>
  )}
  {ismobile_menu && (
    <div className="mobile_Container" onMouseLeave={()=>setMobileMenu(false)}>
      <div className="mobile_menu">
        <ul>
          <li>About</li>
          <hr></hr>
          <li>Case Studies</li>
          <hr></hr>
          <li>Services</li>
          <ul className="service_ul">
            <li>Digital Marketing</li>
            <li>Design & Development</li>
            <li>Branding & Identity</li>
            <li>Cyber Security</li>
          </ul>

        </ul>
        <button class="enquiry-btn">Enquiry</button>
      </div>
    </div>
  )
  }  
    </>
    


  );
  
}
 export default Contacts;