import { EDUCATION_KEY } from "../storage";

export function CloseSubmitButtons({ education, setEducation }) {
 
  const handleCloseClick = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event, property, key, setState) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log(data)
    setEducation(prev => [
      ...prev,
      { id: crypto.randomUUID(),
        school: event.school.value,
        degree: event.degree.value,
        startDate: event.startDate.value,
        endDate: event.endDate.value
      }
    ])
    console.log(education)
  }




  return (
    <>
      <button className="close-button" type="button"
      onClick={(event) => (handleCloseClick(event))}
      >
      Close
      </button>
      <button className="submit-button" type="submit"
      // onClick={(event) => (handleSubmitClick(event))}
      
      >
      Submit

      </button>
    </>
  )
}

export function AddButton() {

  return (
    <>
    <p>tet</p>
    </>
  )
}

export function deleteButton() {

  return (
    <>
    </>
  )
}