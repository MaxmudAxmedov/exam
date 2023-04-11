import React, { useState, useRef } from 'react';
import Button from './components/Button';
import "./main.css"
export default function App() {
  const [value, setValue] = useState('');
  const inputRef = useRef('');
  const textRef = useRef('');

  function handleSubmit(){
    setValue(inputRef.current.value);

  }
  function handleBold(){
    textRef.current.classList.toggle("italic");
  }

  return (
    <div className='container'>
      <form className='w-50 m-auto mt-5 d-flex justify-content-between'  >
        <input className='form-control w-75' type='text' ref={inputRef} onChange={handleSubmit}/>
        <button className='btn btn-success'>submit</button>
      </form>
      <div>
        <Button className="btn btn-success">Bold</Button>
        <Button className="btn btn-danger">Italic</Button>
        <Button className="btn btn-info">Underline</Button>
      </div>
      <h2 ref={textRef}>{value}</h2>
    </div> 
  )
}
