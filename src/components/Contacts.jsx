import { useState } from "react";
import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
function Contacts(){
  const [isDiv,setDiv]=useState(true);
  const handleclick=()=>{
    setDiv(false);
  };
  return(
    <>

  <Header isDiv={isDiv} setDiv={setDiv}/>
  <main class="contact-section" onClick={handleclick} >
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
  <Footer />

    </>
    


  );
  
}
 export default Contacts;