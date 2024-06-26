import React from 'react'
import { TbTrashOff } from "react-icons/tb";

function Todo({todo, onUpdate,onDelete}) {
    console.log(todo)//{id, text,status}
    const {id,text,status}=todo;
    const handleChange=(e)=>{
      const status=e.target.checked?"completed":"active"
      onUpdate({...todo,status})
    }
    const handleDelete=()=>{onDelete(todo)}
  return (
   <li>
   <input type="checkbox" id={id}  
   checked={status === 'completed'}
   onChange={handleChange}
   />
    <label htmlFor={id}>{text}</label>
    <button onClick={handleDelete}><TbTrashOff /></button>
   </li>
  )
}

export default Todo
