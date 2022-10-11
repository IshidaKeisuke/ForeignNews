import type { NextPage } from 'next'
import { useState } from "react";

import Link from 'next/link'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TodoForm from '../components/todos/TodoForm'

export interface Message {
  message: string;
}
interface Props {
  messages: Message[]
}

const Home: NextPage<Props> = ({messages}) => {

  return (
    <>
      <div>
        <h2>
          Todo一覧
          {/* <TodoForm /> */}
        </h2>
        <ul>
          {messages.map((message, index) => (
            <li>
                {/* <Link 
                  href={{
                    pathname: '/todos/[id]',
                    query: {id: todo.id},
                  }}
                >
                  <p>{todo.id}</p>
                </Link> */}
                  <p>{message.message}</p>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8080/", {method: "GET"});
  const messages = await response.json();
  console.log(messages)
  return {
    props: {
      messages,
    },
  }
}
export default Home;
