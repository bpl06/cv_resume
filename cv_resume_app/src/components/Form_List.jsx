import { getArrayItem, deleteObject } from "../storage"
import { collapseList, hideAddButton } from "../dom" 

export function FormList({ onChange, onSubmit, form, setForm, draft, setDraft, selected, setSelected, FormComponent, emptyDraft, KEY, label }) {

  const handleClick = (id) => {
    collapseList(form, setForm) 
    if (id === 'add-button') {
      setDraft(emptyDraft)
    }
    else {
      const obj = getArrayItem(KEY, id)[0];
      setDraft(prev => ({ ...prev, ...obj }))
    }
    setSelected(true); //once state updates it should render form
    hideAddButton(true);
  }

  const handleDelete = (id) => {
    setForm(prev => 
      prev.filter(item =>  
        item.id !== id
      )
    )
    deleteObject(KEY, id)
  }

  return (
    <>
    <div className="formlist-container">
    {form.map(item => {
      if (item.display) {
        return (
        <div className="entry-container">
          <button 
            key={item.id} 
            id={item.id} 
            className="formlist-button"
            onClick={(event) => (handleClick(event.target.id))}
          >
            {item.name}
          </button>
          <button className="delete-button"
          onClick={() => (handleDelete(item.id))}
          >
            <svg className='svg-icon delete-svg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
        </div>
        )
      }
    })}
    </div>
    <div className="add-button-container">
      <button id="add-button"
      onClick={(event) => (handleClick(event.target.id))}
      >
      <svg className="svg-icon add-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>  
      Add {label}
      </button>
    </div>
    <div className="form-fields">
    {selected && ( //conditional render, if selected is true
      <FormComponent
        onChange={onChange}
        form={form}
        draft={draft}
        setDraft={setDraft}
        setForm={setForm}
        onSubmit={onSubmit}
        setSelected={setSelected}
      />
    )}
    </div>
    </>
  )
}