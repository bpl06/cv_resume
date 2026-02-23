import { use, useState } from 'react'
import './App.css'
import { PersonalForm } from './components/Personal_Form';
import { EducationForm } from './components/Education_Form';
import { ExperienceForm } from './components/Experience_Form';
import { updateArrayItem, updateItem, getArray, EDUCATION_KEY, EXPERIENCE_KEY } from './storage';
import { Preview } from './components/Preview';
import { Navbar } from './components/Navbar';
import { FormList } from './components/Form_List';

function App() {
  const [personal, setPersonal] = useState({
    name: '',
    email: '', 
    phone: ''
  })

  const [experience, setExperience] = useState(getArray(EXPERIENCE_KEY));

  const [education, setEducation] = useState(getArray(EDUCATION_KEY));

  const [draftEducation, setDraftEducation] = useState({
    name: '',
    degree: '', 
    startDate: '',
    endDate: ''
  })

  const [draftExperience, setDraftExperience] = useState({
    name: '',
    position: '',
    responsibilities: ''
  })

  const [selected, setSelected] = useState(null);

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
    setSelected(false)
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
              <FormList
              FormComponent={EducationForm}
              onChange={handleArrayChange}
              form={education}
              draft={draftEducation}
              setDraft={setDraftEducation}
              setForm={setEducation}
              selected={selected}
              setSelected={setSelected}
              KEY={EDUCATION_KEY}
              emptyDraft={{id: '', name: '', degree: '', startDate: '', endDate: ''}}
              />
          </div>}
          {isVisible.experience && <div id='experience-form' className='form-wrapper'>
          <h3>Experience</h3>
              <FormList
              FormComponent={ExperienceForm}
              onChange={handleArrayChange}
              form={experience}
              draft={draftExperience}
              setDraft={setDraftExperience}
              setForm={setExperience}
              selected={selected}
              setSelected={setSelected}
              KEY={EXPERIENCE_KEY}
              emptyDraft={{id: '', name: '', position: '', responsibilities: ''}}
              />
          </div>}
        </div>
        <div className='preview-container'>
          <div className='preview'>
            <Preview
            personal={personal}
            experience={experience}
            education={education}
            />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
