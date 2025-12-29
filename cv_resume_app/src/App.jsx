import { useState } from 'react'
import './App.css'
import { GeneralForm } from './components/General_Form';
import { EducationForm } from './components/Education_Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cv/Resume</h1>
      <GeneralForm/>
      <EducationForm/>
    </>
  )
}

export default App
