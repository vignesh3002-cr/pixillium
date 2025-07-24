import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { Contact } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    {/*
    <div className='container'>
      <div id='Desktop1'>
        <p id='p1'>Designed for ease and clarity, the dashboard helps both patients and doctors stay organized, track progress, and access key information instantly</p>
        <h3>Your Personalized Dental Hub</h3>
        <img src='../Desktop1-img1.png'></img>   
        <p id='p2'>The Dashboard provides a centralized view of all essential activities. For patients, it displays upcoming appointments, recent chats with doctors, treatment history, and health tips. For dental doctors, it shows scheduled consultations, patient chat updates, medical records, and pending follow-ups</p>       
      </div>
      <div id='Desktop2'>
        <img src='../Desktop2-img1.png'></img> 
        <h3>Instant Care, Anytime</h3> 
        <p id='p3'>Our app offers a seamless chat feature that allows patients to connect with dental doctors in real time. Whether you have a quick question, need post-treatment advice, or want to clarify symptoms, you can chat directly with certified dentists. This feature ensures faster communication, remote assistance, and improved patient satisfaction—all from the comfort of your home</p>
      </div>
      <div id='Desktop3'>
        <img src='../Desktop3-img1.png'></img> 
        <h3>Know Your Dental Expert</h3>
        <p id='p4'>This feature allows patients to view detailed profiles of dental doctors before booking or starting a chat. Each profile includes the doctor’s qualification, specialization, experience, clinic location, availability, and patient reviews. It helps patients make informed decisions, ensuring trust and transparency while choosing the right dental care professiona</p>
      </div>
      <div id='Desktop4'>
        <img src='../Vector 2.png' id='D4-1'></img> 
        <img src='../Desktop4-img1.png' id='D4-2'></img> 
        <h3>Busy Patient, Long Queue, Frustrated Look At A Dental Clinic</h3>
        <p id='p5'>Still waiting in line for dental appointments? Confused about your treatment plan or follow-ups?</p>
        <h1>Download our App on</h1>
        <img src='../appstore.png' id='D4-3'></img>
        <img src='../googleplay.png' id='D4-4'></img>  
      </div>
    </div>
    */}
    
    
    

    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/contact' element={<Contacts />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App;
