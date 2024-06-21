import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
function Todolist() {
const [todos,setTodos]=useState([
    {id:123, text:"공부하기", status:"active"},
    {id:456, text:"청소하기", status:"active"},
])
const hadleAdd=(todo)=>{
  setTodos([...todos,todo])
}
  return (
    <section>
      <ul>
        {todos.map((item)=>{
          return (<li key={item.id}>{item.text}</li>)
        })}
      </ul>
      <AddTodo onAdd={hadleAdd} />
    </section>
  )
}

export default Todolist