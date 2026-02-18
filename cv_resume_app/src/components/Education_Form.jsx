import { InputWithLabel } from "./Form"
import { FormButtons } from "./Form_Buttons"
import { EDUCATION_KEY } from "../storage"
export function EducationForm({ onChange, onSubmit, form, setForm, draft, setDraft, setSelected }) {

  return (
    <>
        <form action="post" className='form' onSubmit={onSubmit}>
          <InputWithLabel
            htmlFor='school'
            desc='School'
            value={draft.name}
            onChange={(event) => onChange('name', event, EDUCATION_KEY, draft, setDraft)} 
          />
          <InputWithLabel
            htmlFor='degree'
            desc='Degree'
            value={draft.degree}
            onChange={(event) => onChange('degree', event, EDUCATION_KEY, draft, setDraft)}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            value={draft.startDate}
            onChange={(event) => onChange('startDate', event, EDUCATION_KEY, draft, setDraft)}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            value={draft.endDate}
            onChange={(event) => onChange('endDate', event, EDUCATION_KEY, draft, setDraft)}
          />
          <FormButtons
            form={form}
            setList={setForm}
            draft={draft}
            setSelected={setSelected}
            KEY={EDUCATION_KEY}
          />
        </form>
    </>
  )
}
