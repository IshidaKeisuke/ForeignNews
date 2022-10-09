import Link from 'next/link'
export default ({ todo }) => {
  return (
    <div>
      <h1>{todo.id}</h1>
      <p>{todo.todo}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/todos")
  const todos = await res.json()  

  const paths = todos.map((todo: any) => ({
    params: {
      id: todo.id.toString(),
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({params}: {params: any}) => {  
  const res = await fetch(`http://localhost:3000/todos/${params.id}`)
  const todo = await res.json()  

  // ページコンポーネントにpropsとしてに渡す
  return {
    props: {
      todo
    },
  }
}