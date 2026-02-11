import { use, useState } from 'react'
import './App.css'
import { PersonalForm } from './components/Personal_Form';
import { EducationForm } from './components/Education_Form';
import { ExperienceForm } from './components/Experience_Form';
import { updateArrayItem, updateItem, getArray, EDUCATION_KEY } from './storage';
import { Preview } from './components/Preview';
import { Navbar } from './components/Navbar';
import { EducationList } from './components/Education_List';

function App() {
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

  const [education, setEducation] = useState(getArray(EDUCATION_KEY));

  const [draftEducation, setDraftEducation] = useState({
    school: '',
    degree: '', 
    startDate: '',
    endDate: ''
  })

  const [isVisible, setIsVisible] = useState({ //need to make education the educationList and not EducationForm
    personal: true,
    experience: false,
    education: false
  });

  const handleChange = (property, event, key, setState) => { // only for personal form
    const value = event.target.value;
    setState((prev) => ({
      ...prev,
      [property]: value
    }))
    updateItem(key, value, property)
  }

  const handleArrayChange = (property, event, key, state, setState,) => {
    const value = event.target.value;
    const id = event.target.id;
    setState((prev) => ({
      ...prev,
      [property]: value
    }))
    // updateArrayItem(key, value, property, draftEducation.id)
  }
  
  const toggleVisible = (property, prop2, prop3) => { //is changing isVisible properties but is not updating DOM. Fixed----
    setIsVisible((prev) => ({
      ...prev,
      
      [property]: !isVisible[property],
      [prop2]: false,
      [prop3]: false
    }))
  }


  return (
    <>
      <div className='main-container'>
        <div className='nav-container'>
          <Navbar
          toggleVisible={toggleVisible}
          />
        </div>
        <div className='form-container'>
          <h1>Cv Generator</h1>

          <PersonalForm 
            onChange={handleChange} 
            personal={personal}
            setPersonal={setPersonal}
            isVisible={isVisible}
          />
          {isVisible.education && <div id='education-form' className="form-wrapper">
            <h2>Education</h2>
              <EducationList
              onChange={handleArrayChange}
              education={education}
              draftEducation={draftEducation}
              setDraftEducation={setDraftEducation}
              setEducation={setEducation}
              isVisible={isVisible}
              />
          </div>}
          <ExperienceForm
            onChange={handleChange}
            experience={experience}
            setExperience={setExperience}
            isVisible={isVisible}
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
