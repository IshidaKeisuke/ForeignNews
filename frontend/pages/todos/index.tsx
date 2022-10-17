import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import TodoForm from '../../components/todos/AddForm'
import { Todo } from '../../types'
import { title } from 'process'

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = async (title: string, description: string) => {
    const res = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title, description})
    });
    const json = await res.json();
  }

  const deleteTodo = async (id: number) => {
    const res = await fetch('http://localhost:3000/todos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id})
    })
    const json = await res.json();
    console.log(json)
  }

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const todos = await res.json();
	  setTodos(todos)
    })()
  }, [todos])

  return (
    <>
      <div>
        <h2>Todo追加</h2>
          <TodoForm addTodo={addTodos} />
        <h2>Todo一覧</h2>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <Link href={`/todos/${todo.id}`}>
                <p>{todo.title}</p>
              </Link>
              <span onClick={() => deleteTodo(todo.id)}>削除</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Home;
