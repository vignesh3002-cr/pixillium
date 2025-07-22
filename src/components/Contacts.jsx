import { useState } from "react";
import React  from "react";
import Header from "./Header";
function Contacts(){
  const[isService,setService]=useState(false);
  const[ismobile_menu,setMobileMenu]=useState(false);
  const[text,setText]=useState("We deliver seamless Service experiences");
  const[isfade,setFade]=useState(false);
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
    <div class="cm-logo">
      <img src="../Group.png" alt="Logo" class="logo" />
    </div>
    <nav className="nav-container">
      <div class="nav-links">
        <div className="nav-child">About</div>
        <div className="nav-service-container nav-child" onMouseEnter={()=>setService(true)} onMouseLeave={()=>setService(false)} >
          <div className="nav-service" style={{color:isService?"black":"rgba(57, 57, 57, 0.8)"}}>
             Service 
             <div className={`arrow-icon ${isService? 'rotate-up' : ''}`}><span ><img src="../dw_arrow.png"></img></span></div>
                        
          {isService && (
            <div className="service_container">
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
          </div> 
 
        </div>
        <div className="nav-child">Case Studies</div>
        <div className="nav-child">Contact Us</div>
          
      </div>

    </nav>
          
        <div className="nav-button nav-child-button">

          <div class="enquiry-btn">

            <div><button>Get in touch</button></div>
            <div className="circle">

            </div>

            <span className="right-arrow"><img src="../right-arrow.png" /></span>
          </div>
          {ismobile_menu? (<nav className="drop-cancel" ><svg className="tabler_menu_cancel" onClick={()=>setMobileMenu(false)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 24L16 16L24 24M24 8L15.9985 16L8 8" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            
  {ismobile_menu && (
    <div className="mobile_Container" onMouseLeave={()=>setMobileMenu(false)}>
      <div className="mobile_menu">
        <nav>
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
        </nav>
         <div className="mobile-button"> 
          <div class="mobile-enquiry-btn">

            <div><button>Get in touch</button></div>
            <div className="mobile-button-part2">
              <div className="mobile-circle">

              </div>
                <svg className="mobile-right-arrow" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.625 13.9583L9.61558 12.9667L12.8739 9.70832H1.41663V8.29166H12.8739L9.63329 5.03332L10.625 4.04166L15.5833 8.99999L10.625 13.9583Z" fill="#141414" />
</svg>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
  } 
  </nav>):(<div className="drop-cancel" onClick={()=>setMobileMenu(true)}><img src="../tabler_menu.svg
          " className="tabler_menu"  /></div>) }
        </div>

  </header>

  <main class="contact-section" onClick={()=>setMobileMenu(false)} >
    <div class="contact-wrapper">
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
              <input type="text" placeholder="Jon" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Do" />
            </div>
            <div>
              <label>E-mail Address</label>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="123 456 789" />
            </div>
            <div>
              <label>Company</label>
              <input type="text" placeholder="example.com" />
            </div>
            <div>
              <label>Select the service</label>
              <select name="service" value="">
                <option >Branding Identity</option>
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

    </>
    


  );
  
}
 export default Contacts;