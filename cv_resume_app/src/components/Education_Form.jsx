import { useState } from "react"
import { InputWithLabel } from "./Form"
import { updateItem, EDUCATION_KEY, getItem } from "../storage"
export function EducationForm({ onChange, education, setEducation, isVisible}) {

  return (
    <>
      {isVisible.education && <div id='education-form' className="form-wrapper">
        <h2>Education</h2>
        <form action="post" className='form'>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            value={education.school ? education.school : getItem(EDUCATION_KEY, 'school')}
            onChange={(event) => onChange('school', event, EDUCATION_KEY, setEducation)}
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
            value={education.degree ? education.degree : getItem(EDUCATION_KEY, 'degree')}
            onChange={(event) => onChange('degree', event, EDUCATION_KEY, setEducation)}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            value={education.startDate ? education.startDate : getItem(EDUCATION_KEY, 'startDate')}
            onChange={(event) => onChange('startDate', event, EDUCATION_KEY, setEducation)}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            value={education.endDate ? education.endDate : getItem(EDUCATION_KEY, 'endDate')}
            onChange={(event) => onChange('endDate', event, EDUCATION_KEY, setEducation)}
          />
        </form>
      </div>}
    </>
  )
}
