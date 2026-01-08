import { useState } from "react"
import { InputWithLabel } from "./Form"
import { updateItem, EDUCATION_KEY } from "../storage"
export function EducationForm({ onChange, setEducation}) {

  return (
    <>
      <div className="form-wrapper">
        <h2>Education</h2>
        <form action="post" className='form'>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            onChange={(event) => onChange('school', event, EDUCATION_KEY, setEducation)}
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
            onChange={(event) => onChange('degree', event, EDUCATION_KEY, setEducation)}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            onChange={(event) => onChange('startDate', event, EDUCATION_KEY, setEducation)}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            onChange={(event) => onChange('endDate', event, EDUCATION_KEY, setEducation)}
          />
        </form>
      </div>
    </>
  )
}
