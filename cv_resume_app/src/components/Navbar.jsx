import personalSvg from '../assets/images/personal.svg';
import educationSvg from '../assets/images/school.svg';
import workSvg from '../assets/images/work.svg';
import '../styles/nav.css'
import { useState } from 'react';


export function Navbar({ toggleVisible }) {

  return (
    <nav className='nav-container'>
      <a href="#personals" id='personal' className="icon-container nav-selected"
        onClick={() => (toggleVisible('personal', 'education', 'experience'))}>
        <img src={personalSvg} className="nav-icon" alt="personal"/>
      </a>
      <a href="#educations" id='education' className='icon-container' 
        onClick={() => (toggleVisible('education', 'personal', 'experience'))}>
        <img src={educationSvg} className="nav-icon" alt="education"/>
      </a>
      <a href="#experiences" id='experience' className="icon-container" 
        onClick={() => (toggleVisible('experience', 'personal', 'education'))}>
        <img src={workSvg} className="nav-icon" alt="work"/>
      </a>
    </nav>
  )
}