import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Todo } from '../../types'
const Todo = () => {
  const router = useRouter()
	const { id } = router.query
	const [todo, setTodo] = useState<Omit<Todo, 'id'>>({title: '', description: '', createdAt: '', updatedAt: ''})

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const todo = await res.json();
      setTodo(todo)
    })()
  }, []);

  const [title, setTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)

  const editTodo = async (title: string, description: string) => {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title, description})
    })
    const json = await res.json();
    console.log(res)
  }
  
  
  return (
    <div>
      <div>
      <p>タイトル：<input type="text" defaultValue={todo.title} onChange={(e) => setTitle(e.target.value)}/></p>
      <p>詳細：<input type="text" value={todo.description} onChange={(e) => setDescription(e.target.value)}/></p>
        <p>作成日:{todo.createdAt}</p>
        {todo.createdAt !== todo.updatedAt && (
          <>
            <p>更新日</p>
            <p>{todo.updatedAt}</p>
          </>
        )}
      </div>
      <button onClick={() => editTodo(title, description)}>更新する</button>
      <Link href="/todos">
        <a>Back</a>
      </Link>
    </div>
  )
}

export default Todo;
