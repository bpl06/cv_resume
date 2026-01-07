import { useState } from 'react';
import '../styles/form.css';
import { InputWithLabel } from './form';
import { updateItem, PERSONAL_KEY } from '../storage';
export function GeneralForm() {

  const [personal, setPersonal] = useState({
    name: '',
    email: '', 
    phone: ''
  })

  const handleChange = (property, event) => {
    const value = event.target.value;
    setPersonal((prev) => ({
      ...prev,
      [property]: value
    }))
    updateItem(PERSONAL_KEY, value, property)
  }

  return (
    <>
      <div className='form-wrapper'>
        <h1>Personal Info</h1>
        <form action="post" className='form'>
          <InputWithLabel 
            htmlFor='name'
            desc='Name'
            onChange={(event) => (handleChange('name', event))}
          />
          <InputWithLabel 
            htmlFor='email'
            desc='Email'
            onChange={(event) => (handleChange('email', event))}
          />
          <InputWithLabel 
            htmlFor='phone'
            inputType='tel'
            desc='Phone'
            onChange={(event) => (handleChange('phone', event))}
          />          
        </form>
      </div>
    </>
  )
} 