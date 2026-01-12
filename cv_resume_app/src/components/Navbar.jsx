import personalSvg from '../assets/images/personal.svg';
import educationSvg from '../assets/images/school.svg';
import workSvg from '../assets/images/work.svg';
import { useState } from 'react';


export function Navbar({ toggleVisible }) {

  return (
    <nav className='icon-container'>
      <a href="#personal" className="icon-container">
        <img src={personalSvg} className="nav-icon" alt="personal" onClick={() => (toggleVisible('personal', 'education', 'experience'))}/>
      </a>
      <a href="#education" className='icon-container'>
        <img src={educationSvg} className="nav-icon" alt="education" onClick={() => (toggleVisible('education', 'personal', 'experience'))}/>
      </a>
      <a href="#experience" className="icon-container">
        <img src={workSvg} className="nav-icon" alt="work" onClick={() => (toggleVisible('experience', 'personal', 'education'))}/>
      </a>
    </nav>
  )
}