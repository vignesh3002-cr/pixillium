import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 function Header({isDiv,setDiv}){
      const navigate=useNavigate();
      const GoToHome=()=>{
        navigate('/');
      }
      const GoToContact=()=>{
        navigate('/contact');
      }
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
    <div class="cm-logo" onClick={GoToHome}>
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

          <div class="enquiry-btn" onClick={GoToContact}>

            <div><button>Get in touch</button></div>
            <div className="circle">

            </div>

            <span className="right-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.625 13.9583L9.61558 12.9667L12.8739 9.70832H1.41663V8.29166H12.8739L9.63329 5.03332L10.625 4.04166L15.5833 8.99999L10.625 13.9583Z" fill="#141414" />
</svg>
</span>
          </div>
          {ismobile_menu && isDiv? (<nav className="drop-cancel" ><svg className="tabler_menu_cancel" onClick={()=>setMobileMenu(false)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 24L16 16L24 24M24 8L15.9985 16L8 8" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            
  {ismobile_menu && isDiv &&(
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
         <div className="mobile-button" onClick={GoToContact}> 
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
  </nav>):(<div className="drop-cancel" onClick={()=>{setMobileMenu(true);setDiv(true);}}><svg className="tabler_menu" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1H25M1 13H25H5.5M1 25H16" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>) }
        </div>

  </header>
  </>
    )
 }

 export default Header;