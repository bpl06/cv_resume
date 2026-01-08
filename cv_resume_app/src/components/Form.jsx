export function InputWithLabel({divClass = 'form-field', htmlFor, desc, inputType = 'text', onChange}) {
  return (
    <div className={divClass}>
      <label htmlFor={htmlFor}>{desc}</label>
      <input type={inputType} id={htmlFor} name={htmlFor} onChange={onChange}/>
    </div>
  )
}


