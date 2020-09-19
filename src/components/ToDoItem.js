import React from 'react'

import './ToDoItem.css'

const ToDoItem = (props) => {
  const { item, deleteItem } = props

  return (
    <li className='ToDoItem'>
      <span className='ToDoItem-Text'>{item.text}</span>
      <button
        aria-label={`delete ${item.text}`}
        className='ToDoItem-Delete'
        onClick={() => deleteItem(item)}
      >
        -
      </button>
    </li>
  )
}

export default ToDoItem
