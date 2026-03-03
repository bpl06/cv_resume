import "../styles/preview.css";
import {
  getItem,
  EDUCATION_KEY,
  EXPERIENCE_KEY,
  PERSONAL_KEY,
} from "../storage";

export function Preview({ personal, experience, education }) {
  return (
    <>
      <div className="personal-info">
        <h1 className="preview-text">
          {personal.name ? personal.name : getItem(PERSONAL_KEY, "name")}
        </h1>
        <p className="preview-text">
          {personal.email ? personal.email : getItem(PERSONAL_KEY, "email")} |{" "}
          {personal.phone ? personal.phone : getItem(PERSONAL_KEY, "phone")}
        </p>
        <p className="preview-text"></p>
      </div>
      <h1 className="header-text">Education</h1>
      <hr></hr>
      <div className="resume-container">
        <div className="resume-section">
          {education.map((x) => (
            <>
              <div className="resume-entry">
                <div className="entry-names">
                  <p
                    key={crypto.randomUUID()}
                    className={`preview-text preview-bold`}
                  >
                    {x.name}
                  </p>
                  <p
                    key={crypto.randomUUID()}
                    className={`preview-text preview-italic`}
                  >
                    {x.degree}
                  </p>
                </div>
                <div className="entry-dates">
                  <p key={crypto.randomUUID()} className="preview-text">
                    {x.startDate} - {x.endDate}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <h1 className="header-text">Experience</h1>
      <hr></hr>
      <div className="resume-container">
        <div className="resume-section">
          {experience.map((x) => (
            <>
              <div className="resume-entry">
                <div className="entry-names">
                  <p
                    key={crypto.randomUUID()}
                    className={`preview-text preview-bold`}
                  >
                    {x.name}
                  </p>
                  <p
                    key={crypto.randomUUID()}
                    className={`preview-text preview-italic`}
                  >
                    {x.position}
                  </p>
                  <p
                    key={crypto.randomUUID()}
                    className={`preview-text preview-description`}
                  >
                    {x.responsibilities}
                  </p>
                </div>
                <div className="entry-dates">
                  {" "}
                  {/* START HERE, ITS PLACING X.ENDDATE ON A NEW LINE BAD!!!} */}
                  <p
                    key={crypto.randomUUID()}
                    className="preview-text preview-date"
                  >
                    {x.startDate} - {x.endDate}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
