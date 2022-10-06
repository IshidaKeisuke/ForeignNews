import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props, todos) => {
  return(
    <div>
      <h2>
        Todo一覧
      </h2>
      <table>
        {todos.map((todo: any) => (
          <tr>
            <td>{todo.id}.</td>
            <td>{todo.title}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/todos/", {method: "GET"});
  var json = await response.json();
  var json_arr = [json]

  return {
    props: {
      todos: json_arr
    },
  };
}

export default Home;