import { useState } from "react";
import { getArray, getArrayItem, EDUCATION_KEY } from "../storage"
import { EducationForm } from "./Education_Form";
import '../styles/form.css'



export const collapseList = (id, state, stateUpdater) => {
  const newState = state.map(x => {
    if (x.id === id) {
      console.log('display set to true')
      x.display = true;
      return x;
    }
    console.log('display set to false')
    x.display = false;
    return x;
  })
  stateUpdater(newState)
}

export function EducationList({ onChange, onSubmit, education, setEducation, draftEducation, setDraftEducation, isVisible }) {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleClick = (id) => {
    collapseList(id, education, setEducation) //START HERE, this works but setSelectedEducation isnt doing anything
    if (id === 'add-button') {
      setDraftEducation(prev => ({ 
        ...prev,
        id: '',
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
      }))
      setSelectedEducation(false)
    }
    else {
      const obj = getArrayItem(EDUCATION_KEY, id)[0];
      setDraftEducation(prev => ({
        ...prev,
        id: obj.id,
        school: obj.school,
        degree: obj.degree,
        startDate: obj.startDate,
        endDate: obj.endDate
      }))
    }
    setSelectedEducation(true)  //once state updates it should render EducationForm
  }

  return (
    <>
    <div className="test">
    {education.map(item => {
      console.log('map ran')
      if (item.display) {
        console.log(item)
        return (
        <button 
          key={item.id} 
          id={item.id} 
          // className='Active-display'
          onClick={(event) => (handleClick(event.target.id))}
        >
          {item.school}
        </button>
        )
      }
      // <button 
      //   key={item.id} 
      //   id={item.id} 
      //   className='nonActive-display'
      //   onClick={(event) => (handleClick(event.target.id))}
      // >
      //   {item.school}
      // </button>
    })}
    <button id="add-button"
      onClick={(event) => (handleClick(event.target.id))}
      >
      Add
    </button>
    </div>

    {selectedEducation && ( //conditional render, if selectedEducation is true
            <EducationForm
              onChange={onChange}
              education={education}
              draftEducation={draftEducation}
              setDraftEducation={setDraftEducation}
              setEducation={setEducation}
              isVisible={isVisible}
              onSubmit={onSubmit}
              selectedEducation={selectedEducation}
              setSelectedEducation={setSelectedEducation}
            />
    )}
    </>
  )
}