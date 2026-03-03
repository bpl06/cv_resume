import { hideAddButton } from "../dom";
import { setArrayItem, updateObject } from "../storage";

export function FormButtons({ setList, draft, setSelected, KEY }) {
 
  const handleClose = (event) => {
    event.preventDefault();
    setSelected(false)
    setList(prev => 
      prev.map(item => ({
        ...item,
        display: true
      }))
    )
    hideAddButton(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();                               
    if (draft.id) {
      setList(prev => 
        prev.map(item => 
          item.id === draft.id ?
          {...draft, display: true} :
          item
        )
      )
      updateObject(KEY, {...draft, display: true}, draft.id) 
    }
    else {
      draft.id = crypto.randomUUID();
      setList(prev => ([
        ...prev,
        {...draft, display: true}
      ]))
      setArrayItem(KEY, {...draft, display: true})
    }
    setSelected(false)
    setList(prev => 
      prev.map(item => ({
        ...item,
        display: true
      }))
    )
    hideAddButton(false);
  }
  
  return (
    <div className="form-close-submit-button">
      <button className="close-button" type="button"
      onClick={(event) => (handleClose(event))}
      >
      <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      Close
      </button>
      <button className="submit-button" type="submit"
      onClick={(event) => (handleSubmit(event))}
      >
      <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
      Save
      </button>
    </div>
  )
}
