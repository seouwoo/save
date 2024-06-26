import React from 'react'
import { TbTrashOff } from "react-icons/tb";

function Todo({todo,onUpdate,ondelete}) {
    // console.log(props)
    // const {todo,onUpdate}
    console.log(todo)//{id,text,status}
    const {id,text,status}=todo;
    const handlechange=(e)=>{
      const status=e.target.checked?'complted':'actactive'
      onUpdate({...todo,status})
    }
    const handleDelete=()=>{ondelete(todo)}
  return (
    <li>
        <input type="checkbox" id={id} 
        checked={status === 'complted'}
        onChange={handlechange}
        
        />{/*checked={true} checked 기본값 */}
        <label htmlFor={id}>{text}</label>
        <button onClick={handleDelete}><TbTrashOff /></button>
    </li>
  )
}



export default Todo

