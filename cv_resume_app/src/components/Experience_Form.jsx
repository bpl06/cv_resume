import { useState } from 'react';
import { InputWithLabel } from './form';
import { updateItem, EXPERIENCE_KEY } from '../storage';
export function ExperienceForm() {
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: ''
  })

  const handleChange = (property, event) => {
    const value = event.target.value;
    setExperience((prev) => ({
      ...prev,
      [property]: value
    }))
    updateItem(EXPERIENCE_KEY, value, property)
  }

  return ( 
    <>
      <div className='form-wrapper'>
        <h3>Experience</h3>
        <form action='post' className='form'>
          <InputWithLabel
            htmlFor='company'
            desc='Company'
            onChange={(event) => (handleChange('company', event))}
          />
          <InputWithLabel 
            htmlFor='position'
            desc='Position'
            onChange={(event) => (handleChange('position', event))}
          />
          <div className='form-field'>
            <label htmlFor="responsibilities">Responisibilites</label>
            <textarea
              id='responsibilities' 
              name='responsibilities' 
              placeholder='List Responsibilities'
              onChange={(event) => (handleChange('responsibilities', event))}
            />
          </div>
        </form>
      </div>   
    </>
  )
}



