import { useState } from 'react'
import './App.css'
import { GeneralForm } from './components/General_Form';
import { EducationForm } from './components/Education_Form';
import { ExperienceForm } from './components/Experience_Form';
import { setInitialStorage } from './storage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    setInitialStorage();
  },[]);
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
        <div className='form-container'>
          <h1>Cv Generator</h1>
          <GeneralForm/>
          <EducationForm/>
          <ExperienceForm/>
        </div>
        <div className='preview-container'>
    
        </div>
      </div>
    </>
  )
}

export default App
