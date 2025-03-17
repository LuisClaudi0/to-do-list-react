import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

const Form = ({ toDos, setToDos }) => {

  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const newTask = (value, category) => {

    if(!value || !category) return

    const newTodos = [...toDos, 
      {
        id: uuidv4(),
        text: value,
        category: category,
        status: false
      }
    ]

    setToDos(newTodos)
    setValue('')
    setCategory('')
  }

  return (
    <div className='form'>
      <h2>Adicionar tarefa:</h2>
      <input value={value} placeholder='Titulo da tarefa...' onChange={(e) => setValue(e.target.value)}/>
      <select className='category' value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Selecione uma categoria</option>
        <option value="Estudos">Estudos</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
      </select>
      <button onClick={() => newTask(value, category)}>Adicionar tarefa</button>
    </div>
  )
}

export default Form