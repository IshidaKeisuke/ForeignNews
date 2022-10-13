import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import fetch from 'node-fetch'

import styles from '../styles/Home.module.css'
import TodoForm from '../components/todos/TodoForm'

export interface Todo {
  ID: number;
  Title: string;
  Description: string;
}
interface Props {
  todos: Todo[]
}

const Home: NextPage<Props> = ({todos}) => {

  return (
    <>
      <div>
        <h2>
          Todo一覧
          {/* <TodoForm /> */}
        </h2>
        <ul>
          {todos?.map((todo, index) => (
            <li key={todo.ID}>
              <Link 
                href={{
                  pathname: '/todos/[id]',
                  query: {id: todo.ID},
                }}
              >
                <p>{todo.Title}</p>
              </Link>
              <p>{todo.Description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/todos", {method: "GET"});
  const todos = await response.json();
  return {
    props: {
      todos
    },
  }
}
export default Home;
