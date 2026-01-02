import { InputWithLabel } from "./form"

export function EducationForm() {

  return (
    <>
      <div className="form-wrapper">
        <h2>Education</h2>
        <form action="post" className='form'>
          <InputWithLabel
            htmlFor='school'
            desc='School'
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
