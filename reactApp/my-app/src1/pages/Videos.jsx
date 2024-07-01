import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Videos() {
  const [text,setText]=useState('');
  const navigate=useNavigate();
  const handlechange=(e)=>{
    setText(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/Videos/${text}`)
  }
  return (
    <div>Videos

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='video id' value={text}
        onChange={handlechange}/>
      </form>
    </div>
  )
}

export default Videos