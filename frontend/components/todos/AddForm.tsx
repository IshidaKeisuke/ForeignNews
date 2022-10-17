import { useState } from "react";
import Link from 'next/link'

interface Props {
  addTodo: (title: string, description: string) => {

  }
}

const TodoForm = ({ addTodo }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="form">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="Description">Description:</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
        </div>
      <button onClick={() => addTodo(title, description)}>追加</button>
    </div>
  )
}

export default TodoForm
