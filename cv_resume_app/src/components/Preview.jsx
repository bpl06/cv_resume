import '../styles/preview.css'
import { getItem, EDUCATION_KEY, EXPERIENCE_KEY, PERSONAL_KEY } from '../storage'

export function Preview({ personal, experience, education}) {


  return (
    <>
      <div className='personal-info'>
        <p className='preview-text'>
          {personal.name ? personal.name : getItem(PERSONAL_KEY, 'name')}
        </p>
        <p className='preview-text'>
          {personal.email ? personal.email : getItem(PERSONAL_KEY, 'email')} 
        </p>
        <p className='preview-text'>
          {personal.phone ? personal.phone : getItem(PERSONAL_KEY, 'phone')}
        </p>
      </div>
      <div className='education-info'>
        <p className='preview-text'>
          {education.school ? education.school : getItem(EDUCATION_KEY, 'school')}
        </p>
        <p className="preview-text">
          {education.degree ? education.degree : getItem(EDUCATION_KEY, 'degree')}
        </p>
        <p className="preview-text">
          {education.startDate ? education.startDate : getItem(EDUCATION_KEY, 'startDate')}
        </p>
        <p className="preview-text">
          {education.endDate ? education.endDate : getItem(EDUCATION_KEY, 'endDate')}
        </p>
      </div>
      <div className="experience-info">
        <p className="preview-text">
          {experience.company ? experience.company : getItem(EXPERIENCE_KEY, 'company')}
        </p>
        <p className="preview-text">
          {experience.position ? experience.position : getItem(EXPERIENCE_KEY, 'position')}
        </p>
        <p className="preview-text">
          {experience.responsibilities ? experience.responsibilities : getItem(EXPERIENCE_KEY, 'responsibilities')}
        </p>
      </div>
    </>
  )
}