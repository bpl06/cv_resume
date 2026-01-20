import { getArrayItem, EDUCATION_KEY } from "../storage"

export function EducationList() {
  const items = getArrayItem(EDUCATION_KEY)

  return (
    <>
    <div className="test">
    {items.map(item => ( //using () instead of {} after arrow function will implicitly return
      <button key={item.id} id={item.id}>
        {item.school}
      </button>
    ))}
    </div>
    </>
  )
}