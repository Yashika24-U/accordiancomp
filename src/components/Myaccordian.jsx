import React, { useState } from 'react'
import './Accordion.jsx'

const Myaccordian = ({question,answer}) => {
  const[show,setShow] = useState(false);
  return (
    <>
    <div className='my-accordiandiv'>
      <p onClick={()=>setShow(!show)}>➕</p>
      <h3>{question}</h3>
    </div>
    {
      show && 
    
    <div className='answer'>
    <p>{answer}</p>
    </div>}
    </>
  )
}

export default Myaccordian