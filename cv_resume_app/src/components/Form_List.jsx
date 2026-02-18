import { getArrayItem } from "../storage"
import { collapseList } from "../dom" 

export function FormList({ onChange, onSubmit, form, setForm, draft, setDraft, selected, setSelected, FormComponent, emptyDraft, KEY }) {

  const handleClick = (id) => {
    collapseList(id, form, setForm) 
    if (id === 'add-button') {
      setDraft(emptyDraft)
    }
    else {
      const obj = getArrayItem(KEY, id)[0];
      setDraft(prev => ({ ...prev, ...obj }))
    }
    setSelected(true) //once state updates it should render form
  }

  return (
    <>
    <div className="test">
    {form.map(item => {
      if (item.display) {
        return (
        <button 
          key={item.id} 
          id={item.id} 
          onClick={(event) => (handleClick(event.target.id))}
        >
          {item.name}
        </button>
        )
      }
    })}
      <button id="add-button"
      onClick={(event) => (handleClick(event.target.id))}
      >
      Add
      </button>
    </div>

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
    </>
  )
}