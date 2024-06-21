import React, { useState } from 'react'

function AddTodo({onAdd}) {
    const[text,setText]=useState("");
    const hadleChange=(e)=>setText(e.target.value);

    const hadleSubmit=(e)=>{
        e.preventDefault();//새로고침 막는거
        if(text.trim().length === 0){
            return;
        }
        // onAdd({id:789, text:text, status:"active"})
        // onAdd({id:789, text, status:"active"})//줄이기 가능
        onAdd({id:789, text:text + `하기`, status:"active"})
        setText("")
    }
  return (
    <form onSubmit={hadleSubmit}>
        <input type="text" placeholder='Add Todo' 
        value={text}
        onChange={hadleChange}/>
        <button>Add</button>
    </form>
  )
}

export default AddTodo