import Link from 'next/link'

// todo：getStaticPropsから取得したデータ
export default ({todo}: {todo: any} ) => {
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
  // 外部APIエンドポイントを呼び出しデータ取得
  const res = await fetch("http://localhost:3000/todos")
  const todos = await res.json()  

  // 事前ビルドしたいパスを指定
  const paths = todos.map(({todo}: {todo: any} ) => ({
    params: {
      // ファイル名と合わせる ※文字列指定
      id: todo.id.toString(),
    },
  }))
  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false }
}

// paramsには上記pathsで指定した値が入る（1todoずつ）
export const getStaticProps = async ({params}: {params: any} ) => {  
  // 外部APIエンドポイントを呼び出しデータ取得
  const res = await fetch(`http://localhost:3000/todos/${params.id}`)
  const todo = await res.json()  

  // ページコンポーネントにpropsとしてに渡す
  return {
    props: {
      todo
    },
  }
}