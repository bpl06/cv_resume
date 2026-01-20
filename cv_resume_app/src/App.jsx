import { use, useState } from 'react'
import './App.css'
import { PersonalForm } from './components/Personal_Form';
import { EducationForm } from './components/Education_Form';
import { ExperienceForm } from './components/Experience_Form';
import { updateItem } from './storage';
import { Preview } from './components/Preview';
import { Navbar } from './components/Navbar';
import { setArrayItem, EDUCATION_KEY } from './storage';
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

  const [education, setEducation] = useState([]);

  const [draftEducation, setDraftEducation] = useState({
    school: '',
    degree: '', 
    startDate: '',
    endDate: ''
  })

  const handleChange = (property, event, key, setState) => {
    const value = event.target.value;
    setState((prev) => ({
      ...prev,
      [property]: value
    }))
    updateItem(key, value, property)
  }



    const handleSubmit = (event, property, key, setState) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); //gathers form data from closest form
    const data = Object.fromEntries(formData); //converts from data to object
    data.id = crypto.randomUUID();
    console.log(education)
    console.log(data)
    setEducation(prev => [
      ...prev,
      data
    ])
    setArrayItem(EDUCATION_KEY, data)
    console.log(education)

  }

  const [isVisible, setIsVisible] = useState({ //need to make education the educationList and not EducationForm
    personal: true,
    experience: false,
    education: false
  });
  
  const toggleVisible = (property, prop2, prop3) => { //is changing isVisible properties but is not updating DOM. Fixed----
    console.log('yoooo')
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
          <EducationForm
            onChange={handleChange}
            education={education}
            draftEducation={draftEducation}
            setDraftEducation={setDraftEducation}
            setEducation={setEducation}
            isVisible={isVisible}
            onSubmit={handleSubmit}
          />
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
          <EducationList/>
        </div>
      </div>
    </>
  )
}

export default App
