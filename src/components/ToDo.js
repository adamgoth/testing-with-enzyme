import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

import './ToDo.css'

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: 'clean the house' },
    { id: 2, text: 'buy milk' },
  ])
  const [toDo, setToDo] = useState('')

  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      alert('Please enter a todo!')
      return
    }
    const newId = Math.max(...list.map((t) => t.id)) + 1
    const newToDo = { id: newId, text: toDo }
    setList([...list, newToDo])
    setToDo('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      createNewToDoItem()
    }
  }

  const handleInput = (e) => {
    setToDo(e.target.value)
  }

  const deleteItem = (todo) => {
    setList(list.filter((item) => item !== todo))
  }

  return (
    <div className='ToDo'>
      <h1 className='ToDo-Header'>React To Do</h1>
      <div className='ToDo-Container'>
        <ul className='ToDo-Content'>
          {list.map((item) => {
            return (
              <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />
            )
          })}
        </ul>

        <div className='ToDoInput'>
          <input
            type='text'
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button
            aria-label='add'
            className='ToDo-Add'
            onClick={createNewToDoItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToDo
