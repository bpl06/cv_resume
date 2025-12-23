import { useState } from 'react';

export function Form() {
  // const [input, setInput] = useState('');
  return (
    <>
      <div>
        <div>
         <form action="post" className='form'>
           <input type="text" />
           <input type="text" />
           <input type="text" />
         </form>
        </div>
        <div>
          <form action="post" className='form'>
           <input type="text" />
           <input type="text" />
           <input type="text" />
           <input type="text" />
          </form>
        </div>
        <div>
          <form action="post" className='form'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </>
  )
} 
