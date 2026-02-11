import { EDUCATION_KEY, setArrayItem, updateObject } from "../storage";

export function CloseSubmitButtons({ education, setEducation, draftEducation, selectedEducation, setSelectedEducation }) {
 
  const handleClose = (event) => { //THIS WORKS NOW
    event.preventDefault();
    setSelectedEducation(false)
    setEducation(prev => 
      prev.map(item => ({
        ...item,
        display: true
      }))
    )  
    console.log(education)
  }

  const handleSubmit = (event, property, key, setState) => { //NOT SETTING ALL EDUCATINO ITEMS BACK TO VISIBLE. FIX IT
    event.preventDefault();                               
    if (draftEducation.id) {
      setEducation(prev => ([
        ...prev,
        {...draftEducation, display: true}
      ]))
      updateObject(EDUCATION_KEY, {...draftEducation, display: true}, draftEducation.id) 
    }
    else {
      draftEducation.id = crypto.randomUUID();
      setEducation(prev => ([
        ...prev,
        {...draftEducation, display: true}
      ]))
      setArrayItem(EDUCATION_KEY, {...draftEducation, display: true})
    }
  }
  
  return (
    <>
      <button className="close-button" type="button"
      onClick={(event) => (handleClose(event))}
      >
      Close
      </button>
      <button className="submit-button" type="submit"
      onClick={(event) => (handleSubmit(event))}
      
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