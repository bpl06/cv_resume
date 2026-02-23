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
              <hr></hr>
      <div className='resume-container'>
        <div className='resume-header'>
          <h1 className='header-text'>Education</h1>
        </div>

        <div className='resume-section'>
          {education.map(x => 
            <>
              <div className='resume-entry'>
                <div className='entry-names'>
                  <p key={crypto.randomUUID()} className="preview-text">{x.name}</p>
                  <p key={crypto.randomUUID()} className="preview-text">{x.degree}</p>
                </div>
                <div className='entry-dates'>
                  <p key={crypto.randomUUID()} className="preview-text">{x.startDate}</p>
                  <p key={crypto.randomUUID()} className="preview-text">{x.endDate}</p>
                </div>
              </div>
            </>
          )}
      </div>
      </div>
      <div className="resume-container">
        <div className='resume-header'>
          <h1 className='header-text'>Experience</h1>
        </div>
        <hr></hr>
        <div className='resume-section'>
          {experience.map(x =>
            <>
              <p key={crypto.randomUUID()} className="preview-text">{x.name}</p>
              <p key={crypto.randomUUID()} className="preview-text">{x.position}</p>
              <p key={crypto.randomUUID()} className="preview-text">{x.responsibilities}</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}