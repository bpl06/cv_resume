import { useState } from 'react'
import './App.css'
import { Form } from './Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cv/Resume</h1>
      <Form/>
    </>
  )
}

export default App
