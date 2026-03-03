export function InputWithLabel({
  divClass = "form-field",
  htmlFor,
  desc,
  inputType = "text",
  onChange,
  value,
  placeholder,
}) {
  return (
    <div className={divClass}>
      <label htmlFor={htmlFor}>{desc}</label>
      <input
        type={inputType}
        id={htmlFor}
        name={htmlFor}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
