import { useState } from 'react';
import '../styles/form.css';
import { InputWithLabel } from './form';
export function GeneralForm() {

  return (
    <>
      <div className='form-wrapper'>
        <h1>Personal Info</h1>
        <form action="post" className='form'>
          <InputWithLabel 
            htmlFor='name'
            desc='Name'
          />
          <InputWithLabel 
            htmlFor='email'
            desc='Email'
          />
          <InputWithLabel 
            htmlFor='phone'
            inputType='tel'
            desc='Phone'
          />          
        </form>
      </div>
    </>
  )
} 