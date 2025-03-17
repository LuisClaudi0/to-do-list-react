import React from 'react'
import './ToDoList.css'

const ToDoList = ({ toDo, setToDos, toDos }) => {

  const completeTask = (id) => {
    setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, status: !toDo.status } : toDo ))
  }

  const deleteTask = (id) => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  return (
    <div className='todo'>
      <div className='todo-content' style={toDo.status ? {textDecoration: 'line-through'} : {}}>
        <p>{toDo.text}</p>
        <p className='category'>({toDo.category})</p>
      </div>
      <div className='buttons'>
        <button className='complete' onClick={() => completeTask(toDo.id)}>Completar</button>
        <button className='remove' onClick={() => deleteTask(toDo.id)} >x</button>
      </div>
    </div>
  )
}

export default ToDoList
