import type { NextPage } from 'next'
import { useState } from "react";

import Link from 'next/link'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Todo } from '../types'
import TodoForm from '../components/todos/TodoForm'

interface Props {
  todos: Todo[]
}

const Home: NextPage<Props> = ({todos}) => {

  return (
    <>
      <div>
        <h2>
          Todo一覧
          <TodoForm />
        </h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id}>
                <Link 
                  href={{
                    pathname: '/todos/[id]',
                    query: {id: todo.id},
                  }}
                >
                  <p>{todo.id}</p>
                </Link>
                  <p>{todo.todo}</p>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/todos/", {method: "GET"});
  const todos = await response.json();

  return {
    props: {
      todos,
    },
  }
}
export default Home;
