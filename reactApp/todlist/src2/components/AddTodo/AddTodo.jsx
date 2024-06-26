import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function AddTodo({onAdd}) {
    const[text,setText]=useState("");
    const handleChange=(e)=>setText(e.target.value);

    const handleSubmit=(e)=>{
        e.preventDefault();//새로고침 막는거
        if(text.trim().length === 0){
            return;
        }
        // onAdd({id:789, text:text, status:"active"})
        // onAdd({id:789, text, status:"active"})//줄이기 가능
        onAdd({id:uuidv4(), text:text, status:"active"})
        setText("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add Todo' 
        value={text}
        onChange={handleChange}/>
        <button>Add</button>
    </form>
  )
}

export default AddTodo