import { useState } from "react"
import { InputWithLabel } from "./form"
import { updateItem, EDUCATION_KEY } from "../storage"
export function EducationForm() {
  const [education, setEducation] = useState({
    name: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (property, event) => {
    const value = event.target.value;
    setEducation((prev) => ({
      ...prev,
      [property]: value //property in brackets since value is from variable
    }))
    updateItem(EDUCATION_KEY, value, property)
  }


  return (
    <>
      <div className="form-wrapper">
        <h2>Education</h2>
        <form action="post" className='form'>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            onChange={(event) => (handleChange('school', event))}
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
            onChange={(event) => (handleChange('degree', event))}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            onChange={(event) => (handleChange('startDate', event))}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            onChange={(event) => (handleChange('endDate', event))}
          />
        </form>
      </div>
    </>
  )
}
