import { useState,useEffect } from "react";
import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
function Contacts(){
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const [isDiv,setDiv]=useState(true);
  const handleclick=()=>{
    setDiv(false);
  };
  const[form,setForm]=useState({
    First_name:"",
    Last_name:"",
    Email:"",
    Phone_number:"",
    Company:"",
    Service:""
  });
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:[e.target.value]});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await fetch("http://localhost:5678/webhook-test/form-submit",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      });
      if(res.ok){
        alert("Form submitted successfully!");
        setForm({First_name:"",Last_name:"",Email:"",Phone_number:"",Company:"",Service:""});
      }else{
        alert("Error Submitting form.");
      }
    }catch(error){
      console.error("Error:",error);
    }
  }
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
        <form onSubmit={handleSubmit}>
          <div class="form-grid">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="Jon" name="First_name" value={form.First_name} onChange={handleChange} />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Do" name="Last_name" value={form.Last_name_name} onChange={handleChange}/>
            </div>
            <div>
              <label>E-mail Address</label>
              <input type="email" placeholder="example@example.com" name="Email" value={form.Email} onChange={handleChange}/>
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="123 456 789" name="Phone_number" value={form.Phone_number} onChange={handleChange} />
            </div>
            <div>
              <label>Company</label>
              <input type="text" placeholder="example.com" name="Company" value={form.Company} onChange={handleChange}/>
            </div>
            <div>
              <label>Select the service</label>
              <select name="Service" value={form.Service} onChange={handleChange}>
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