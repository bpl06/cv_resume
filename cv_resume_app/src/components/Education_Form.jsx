import { useState } from "react"
import { InputWithLabel } from "./Form"
import { CloseSubmitButtons, AddButton } from "./Form_Buttons"
import { updateItem, EDUCATION_KEY, getItem } from "../storage"
export function EducationForm({ onChange, onSubmit, education, setEducation, draftEducation, setDraftEducation, isVisible}) {

  return (
    <>
      {isVisible.education && <div id='education-form' className="form-wrapper">
        <h2>Education</h2>
        <form action="post" className='form' onSubmit={onSubmit}>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            value={draftEducation.school ? draftEducation.school : getItem(EDUCATION_KEY, 'school')} //need to figure this out
            onChange={(event) => onChange('school', event, EDUCATION_KEY, setDraftEducation)} // need to figure this out
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
            value={draftEducation.degree ? draftEducation.degree : getItem(EDUCATION_KEY, 'degree')}
            onChange={(event) => onChange('degree', event, EDUCATION_KEY, setDraftEducation)}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            value={draftEducation.startDate ? draftEducation.startDate : getItem(EDUCATION_KEY, 'startDate')}
            onChange={(event) => onChange('startDate', event, EDUCATION_KEY, setDraftEducation)}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            value={draftEducation.endDate ? draftEducation.endDate : getItem(EDUCATION_KEY, 'endDate')}
            onChange={(event) => onChange('endDate', event, EDUCATION_KEY, setDraftEducation)}
          />
          <CloseSubmitButtons
            education={education}
            setEducation={setEducation}
          />
        </form>
      </div>}
    </>
  )
}
