import { useState } from 'react'
import './App.css'
import { PersonalForm } from './components/Personal_Form';
import { EducationForm } from './components/Education_Form';
import { ExperienceForm } from './components/Experience_Form';
import { setInitialStorage, updateItem, getItem } from './storage';
import { Preview } from './components/Preview';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    setInitialStorage();
  },[]);
  
  const [personal, setPersonal] = useState({
    name: '',
    email: '', 
    phone: ''
  })

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: ''
  })

  const [education, setEducation] = useState({
    name: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

    const handleChange = (property, event, key, setState) => {
      const value = event.target.value;
      setState((prev) => ({
        ...prev,
        [property]: value
      }))
      updateItem(key, value, property)
    }

  return (
    <>
      <div className='main-container'>
        <div className='form-container'>
          <h1>Cv Generator</h1>
          <PersonalForm 
            onChange={handleChange} 
            personal={personal}
            setPersonal={setPersonal}
          />
          <EducationForm
            onChange={handleChange}
            education={education}
            setEducation={setEducation}
          />
          <ExperienceForm
            onChange={handleChange}
            experience={experience}
            setExperience={setExperience}
          />
        </div>
        <div className='preview-container'>
          <Preview
          personal={personal}
          experience={experience}
          education={education}
          />
        </div>
      </div>
    </>
  )
}

export default App
