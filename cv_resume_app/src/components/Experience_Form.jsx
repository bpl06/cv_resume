import { InputWithLabel } from './Form';
import { EXPERIENCE_KEY } from '../storage';
import { FormButtons } from './Form_Buttons';

export function ExperienceForm({ onChange, onSubmit, form, setForm, draft, setDraft, setSelected }) {

  return ( 
    <>
        <form action='post' className='form' onSubmit={onSubmit}> 
          <InputWithLabel
            htmlFor='company'
            desc='Company'
            value={draft.name}
            onChange={(event) => onChange('name', event, EXPERIENCE_KEY, draft, setDraft)}
          />
          <InputWithLabel 
            htmlFor='position'
            desc='Position'
            value={draft.position}
            onChange={(event) => onChange('position', event, EXPERIENCE_KEY, draft, setDraft)}
          />
          <InputWithLabel
            htmlFor='startDate'
            desc='Start Date'
            value={draft.startDate}
            onChange={(event) => onChange('startDate', event, EXPERIENCE_KEY, draft, setDraft)}
          />
          <InputWithLabel
            htmlFor='endDate'
            desc='End Date'
            value={draft.endDate}
            onChange={(event) => onChange('endDate', event, EXPERIENCE_KEY, draft, setDraft)}
          />
          <div className='form-field'>
            <label htmlFor="responsibilities">Responsibilites</label> {/* START HERE - THIS DOES NOT RENDER IN FORM FIELDS AFTER SUBMIT */}
            <textarea
              id='responsibilities' 
              name='responsibilities' 
              placeholder='List Responsibilities'
              value={draft.responsibilities}
              onChange={(event) => onChange('responsibilities', event, EXPERIENCE_KEY, draft, setDraft)}
            />
          </div>
          <FormButtons
            form={form}
            setList={setForm}
            draft={draft}
            setSelected={setSelected}
            KEY={EXPERIENCE_KEY}
          />
        </form>
    </>
  )
}



