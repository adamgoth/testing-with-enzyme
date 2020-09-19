import React from 'react'

const ToDoItem = (props) => {
  const { item, deleteItem } = props

  return (
    <li className='ToDoItem'>
      <p className='ToDoItem-Text'>{item.text}</p>
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
