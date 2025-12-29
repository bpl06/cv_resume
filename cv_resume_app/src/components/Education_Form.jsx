export function EducationForm() {

//Should make a reusable component for label/input and move the form itself to one file
//https://www.google.com/search?q=reusable+form+components+in+react+example&sca_esv=672cfb55ba862964&sxsrf=AE3TifOUrOKxx6cF6smuDx7lpzPLuzfqdw%3A1767040498334&ei=8uVSaYuNFNPawN4PrdSXwQE&ved=0ahUKEwiLztPp0uORAxVTLdAFHS3qJRgQ4dUDCBE&uact=5&oq=reusable+form+components+in+react+example&gs_lp=Egxnd3Mtd2l6LXNlcnAiKXJldXNhYmxlIGZvcm0gY29tcG9uZW50cyBpbiByZWFjdCBleGFtcGxlMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBEiuDVCvA1jfC3ABeAGQAQCYAd0BoAHpBqoBBTAuNC4xuAEDyAEA-AEBmAIEoAKEBMICChAAGLADGNYEGEfCAgcQIxiwAhgnwgILEAAYgAQYhgMYigWYAwCIBgGQBgiSBwUxLjIuMaAHmBOyBwUwLjIuMbgH-wPCBwUwLjEuM8gHD4AIAA&sclient=gws-wiz-serp

  return (
    <>
      <div>
        <form action="post" className='form'>
          <div className="form-field">
            <label htmlFor='school'>School</label>
            <input type="text" id='school' name='school'/>
          </div>
          <div className="form-field">
            <label htmlFor='degree'>Degree</label>
            <input type="text" id='degree' name='degree'/>
          </div>
          <div className="form-field">
            <label htmlFor='startDate'>Start</label>
            <input type="text" id='startDate' name='startDate'/>
          </div>
          <div className="form-field">
            <label htmlFor="endDate">End</label>
            <input type="text" id='endDate' name='endDate'/>
          </div>
        </form>
      </div>
    </>
  )
}