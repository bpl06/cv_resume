import '../styles/preview.css'
import { getItem, EDUCATION_KEY, EXPERIENCE_KEY, PERSONAL_KEY } from '../storage'

export function Preview({ personal, experience, education}) {


  return (
    <>
      <div className='personal-info'>
        <p className='preview-text'>
          {personal.name}
        </p>
        <p className='preview-text'>
          {personal.email}
        </p>
        <p className='preview-text'>
          {personal.phone}
        </p>
      </div>
      <div className='education-info'>
        <p className='preview-text'>
          {education.school}
        </p>
        <p className="preview-text">
          {education.degree}
        </p>
        <p className="preview-text">
          {education.startDate}
        </p>
        <p className="preview-text">
          {education.endDate}
        </p>
      </div>
      <div className="experience-info">
        <p className="preview-text">
          {experience.company}
        </p>
        <p className="preview-text">
          {experience.position}
        </p>
        <p className="preview-text">
          {experience.responsibilities}
        </p>
      </div>
    </>
  )
}