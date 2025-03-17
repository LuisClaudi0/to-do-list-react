import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList'
import Form from './components/Form/Form'
import Search from './components/Filter/Search'

// rafce

function App() {

  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: 'Regar plantas',
      category: 'Pessoal',
      status: false
    }, 
    {
      id: 2,
      text: 'Estudar React',
      category: 'Estudos',
      status: false
    }, 
    {
      id: 3,
      text: 'Fazer relatório',
      category: 'Trabalho',
      status: false
    }
  ])

  const [search, setSearch] = useState('');

  return (
    <div className='App'>
      <div className='todo-list'>
        <h1>Lista de tarefas:</h1>
        <Search search={search} setSearch={setSearch} />
        {toDos
          .filter(toDo => toDo.text.toLowerCase().includes(search.toLowerCase()))
          .map((toDo) => ( <ToDoList key={toDo.id} toDo={toDo} setToDos={setToDos} toDos={toDos} /> ))}
        <Form  toDos={toDos} setToDos={setToDos}/>
      </div>
    </div>
  )
}

export default App
