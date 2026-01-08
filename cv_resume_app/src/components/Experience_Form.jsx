import { useState } from 'react';
import { InputWithLabel } from './Form';
import { updateItem, EXPERIENCE_KEY } from '../storage';
export function ExperienceForm({ onChange, setExperience}) {

  return ( 
    <>
      <div className='form-wrapper'>
        <h3>Experience</h3>
        <form action='post' className='form'>
          <InputWithLabel
            htmlFor='company'
            desc='Company'
            onChange={(event) => onChange('company', event, EXPERIENCE_KEY, setExperience)}
          />
          <InputWithLabel 
            htmlFor='position'
            desc='Position'
            onChange={(event) => onChange('position', event, EXPERIENCE_KEY, setExperience)}
          />
          <div className='form-field'>
            <label htmlFor="responsibilities">Responisibilites</label>
            <textarea
              id='responsibilities' 
              name='responsibilities' 
              placeholder='List Responsibilities'
              onChange={(event) => onChange('responsibilities', event, EXPERIENCE_KEY, setExperience)}
            />
          </div>
        </form>
      </div>   
    </>
  )
}



