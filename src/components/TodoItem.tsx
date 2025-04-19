import React from 'react'
import { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-100 p-2 rounded">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
