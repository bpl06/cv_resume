import personalSvg from '../assets/images/personal.svg';
import educationSvg from '../assets/images/school.svg';
import workSvg from '../assets/images/work.svg';
import '../styles/nav.css'
import { useState } from 'react';


export function Navbar({ toggleVisible }) {
  const [isHover, setIsHover] = useState(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseExit = () => {
    setIsHover(false)
  }


  return (
    <nav className='nav-container'>
      <a href="#personal" className="icon-container" 
        onClick={() => (toggleVisible('personal', 'education', 'experience'))}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}  
      >
        <img src={personalSvg} className="nav-icon" alt="personal"/>
      </a>
      <a href="#education" className='icon-container' onClick={() => (toggleVisible('education', 'personal', 'experience'))}>
        <img src={educationSvg} className="nav-icon" alt="education"/>
      </a>
      <a href="#experience" className="icon-container" onClick={() => (toggleVisible('experience', 'personal', 'education'))}>
        <img src={workSvg} className="nav-icon" alt="work"/>
      </a>
    </nav>
  )
}