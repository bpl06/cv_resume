import { useState } from 'react';
import '../styles/form.css';
import { InputWithLabel } from './Form';
import { updateItem, PERSONAL_KEY } from '../storage';
export function PersonalForm({ onChange, setPersonal }) {

  return (
    <>
      <div className='form-wrapper'>
        <h1>Personal Info</h1>
        <form action="post" className='form'>
          <InputWithLabel 
            htmlFor='name'
            desc='Name'
            onChange={(event) => onChange('name', event, PERSONAL_KEY, setPersonal)}
          />
          <InputWithLabel 
            htmlFor='email'
            desc='Email'
            onChange={(event) => onChange('email', event, PERSONAL_KEY, setPersonal)}
          />
          <InputWithLabel 
            htmlFor='phone'
            inputType='tel'
            desc='Phone'
            onChange={(event) => onChange('phone', event, PERSONAL_KEY, setPersonal)}
          />          
        </form>
      </div>
    </>
  )
} 