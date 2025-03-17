import { useState } from 'react'
import './ToDoList.css'
import { MdDeleteForever, MdOutlineDownloadDone } from "react-icons/md"
import hexToRgba from "hex-to-rgba"

const ToDoList = ({ toDo, setToDos, toDos }) => {

  const completeTask = (id) => {
    setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, status: !toDo.status } : toDo ))
  }

  const deleteTask = (id) => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const [color, setColor] = useState(hexToRgba('#000', 0.6));


  return (
    <div className='todo' style={{backgroundColor: hexToRgba(color, 0.5)}}>
      <div className='todo-content' style={toDo.status ? {textDecoration: 'line-through'} : {}}>
        <p>{toDo.text}</p>
        <p className='category'>({toDo.category})</p>
      </div>
      <div className='buttons'>
        <input className='color' type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button className='complete' onClick={() => completeTask(toDo.id)}><MdOutlineDownloadDone size={20} /></button>
        <button className='remove' onClick={() => deleteTask(toDo.id)} ><MdDeleteForever size={20} /></button>
      </div>
    </div>
  )
}

export default ToDoList
