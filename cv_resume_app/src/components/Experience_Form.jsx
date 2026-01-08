import { useState } from 'react';
import { InputWithLabel } from './Form';
import { updateItem, EXPERIENCE_KEY, getItem } from '../storage';
export function ExperienceForm({ onChange, experience, setExperience}) {

  return ( 
    <>
      <div className='form-wrapper'>
        <h3>Experience</h3>
        <form action='post' className='form'>
          <InputWithLabel
            htmlFor='company'
            desc='Company'
            value={experience.company ? experience.company : getItem(EXPERIENCE_KEY, 'company')}
            onChange={(event) => onChange('company', event, EXPERIENCE_KEY, setExperience)}
          />
          <InputWithLabel 
            htmlFor='position'
            desc='Position'
            value={experience.position ? experience.position : getItem(EXPERIENCE_KEY, 'position')}
            onChange={(event) => onChange('position', event, EXPERIENCE_KEY, setExperience)}
          />
          <div className='form-field'>
            <label htmlFor="responsibilities">Responisibilites</label>
            <textarea
              id='responsibilities' 
              name='responsibilities' 
              placeholder='List Responsibilities'
              value={experience.responsibilities ? experience.responsibilities : getItem(EXPERIENCE_KEY, 'responsibilities')}
              onChange={(event) => onChange('responsibilities', event, EXPERIENCE_KEY, setExperience)}
            />
          </div>
        </form>
      </div>   
    </>
  )
}



