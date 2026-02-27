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
    <>
      <button className="close-button" type="button"
      onClick={(event) => (handleClose(event))}
      >
      Close
      </button>
      <button className="submit-button" type="submit"
      onClick={(event) => (handleSubmit(event))}
      >
      Save
      </button>
    </>
  )
}
