import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Todo } from '../../types'

const Todo = () => {
  const router = useRouter()
  const { id } = router.query
  const [todo, setTodo] = useState<Omit<Todo, 'id'>>({title: '', description: '', createdAt: '', updatedAt: ''})
  console.log(id)

//   useEffect(() => {
// 	(async () => {
// 		const res = await fetch(`http://localhost:3000/todos/${param.id}`, {
// 			method: 'GET',
// 			headers: { 'Content-Type': 'application/json' }
// 		});
// 		const todo = res.json();

// 	})
//   }, [])
  

  return (
    <div>
      <div>
        <h1>{todo.title}</h1>
        <p>詳細</p>
        <p>{todo.description}</p>
        <p>作成日</p>
        <p>{todo.createdAt}</p>
        {todo.createdAt !== todo.updatedAt && (
          <>
            <p>更新日</p>
            <p>{todo.updatedAt}</p>
          </>
        )}
      </div>
      <Link href="/todos">
        <a>Back</a>
      </Link>
    </div>
  )
}

export default Todo;
