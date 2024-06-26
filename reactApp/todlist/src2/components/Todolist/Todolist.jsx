import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'


function Todolist() {
const [todos,setTodos]=useState([
    {id:123, text:"공부하기", status:"active"},
    {id:456, text:"청소하기", status:"active"},
])

const handleAdd=(todo)=>{
  setTodos([...todos,todo])
  
}
const handleUpdate=(updated)=>{
    setTodos(todos.map((t)=>{
      return t.id == updated.id?updated:t
    }))
}
const handledelete=(deleted)=>{
  setTodos(todos.filter((t)=>{
    return t.id !== deleted.id
  }))
}
  return (
    <section>
      <ul>
        {todos.map((item)=>{
          return (<Todo key={item.id} 
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handledelete}
            ></Todo>)
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}

export default Todolist