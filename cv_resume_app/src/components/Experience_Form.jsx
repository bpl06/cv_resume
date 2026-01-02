import { useState } from 'react';
import { InputWithLabel } from './form';
export function ExperienceForm() {
  return ( 
    <>
      <div className='form-wrapper'>
        <h3>Experience</h3>
        <form action='post' className='form'>
          <InputWithLabel
            htmlFor='company'
            desc='Company'
          />
          <InputWithLabel 
            htmlFor='position'
            desc='Position'
          />
          <div className='form-field'>
            <label htmlFor="responsibilities">Responisibilites</label>
            <textarea id='responsibilities' name='responsibilities' placeholder='List Responsibilities'></textarea>
          </div>
        </form>
      </div>   
    </>
  )
}



