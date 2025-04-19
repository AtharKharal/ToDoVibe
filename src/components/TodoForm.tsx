import React, { useState } from 'react'

interface Props {
  onAdd: (text: string) => void
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="border rounded p-2 flex-1"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  )
}

export default TodoForm
