import { use, useState } from "react"
import { InputWithLabel } from "./form"
import { updateItem } from "../storage"
export function EducationForm() {
  const [name, setName] = useState('');

  const key = 'educationInfo';

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value)
    updateItem(key, value)
  }


  return (
    <>
      <div className="form-wrapper">
        <h2>Education</h2>
        <form action="post" className='form'>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            onChange={handleChange}
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
          />
        </form>
      </div>
    </>
  )
}
