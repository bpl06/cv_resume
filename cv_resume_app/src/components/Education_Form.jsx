import { useState } from "react"
import { InputWithLabel } from "./Form"
import { CloseSubmitButtons, AddButton } from "./Form_Buttons"
import { updateItem, EDUCATION_KEY, getItem } from "../storage"
export function EducationForm({ onChange, onSubmit, education, setEducation, draftEducation, setDraftEducation, isVisible, selectedEducation, setSelectedEducation }) {

  return (
    <>
        <form action="post" className='form' onSubmit={onSubmit}>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            value={draftEducation.school} //need to figure this out
            onChange={(event) => onChange('school', event, EDUCATION_KEY, draftEducation, setDraftEducation)} // need to figure this out
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
            value={draftEducation.degree}
            onChange={(event) => onChange('degree', event, EDUCATION_KEY, draftEducation, setDraftEducation)}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            value={draftEducation.startDate}
            onChange={(event) => onChange('startDate', event, EDUCATION_KEY, draftEducation, setDraftEducation)}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            value={draftEducation.endDate}
            onChange={(event) => onChange('endDate', event, EDUCATION_KEY, draftEducation, setDraftEducation)}
          />
          <CloseSubmitButtons
            education={education}
            setEducation={setEducation}
            draftEducation={draftEducation}
            selectedEducation={selectedEducation}
            setSelectedEducation={setSelectedEducation}
          />
        </form>
    </>
  )
}
