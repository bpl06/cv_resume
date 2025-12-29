import { useState } from 'react';
import '../styles/form.css';
export function GeneralForm() {
  // const [input, setInput] = useState('');
  return (
    <>
      <h1>Personal Info</h1>
      <div>
        <form action="post" className='form'>
          <div className='form-field'>
            <label htmlFor='name'>Name: </label>
            <input type="text" id='name' name='name'/>
          </div>
          <div className='form-field'>
            <label htmlFor='email'>Email: </label>
            <input type="text" id='email' name='email'/>
          </div>
          <div className='form-field'>
            <label htmlFor='phone'>Phone: </label>
            <input type="text" id='phone' name='phone'/>
          </div>
        </form>
      </div>
    </>
  )
} 
