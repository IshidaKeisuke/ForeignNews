import Link from 'next/link'
import { useState } from "react";

const TodoForm = () => {

  // 作成したtodoを入れておくためのstate
  const [todotexts, setTodotext] = useState([]);
  // フォームに入力された値をtodoに登録するまでに入れておくためのstate
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }
    setTodotext([...todotexts, tmpTodo]);
    setTmpTodo("");
  };

  //todoを削除する処理
  const deleteTodo = index => {
    const newTodos = todotexts.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodotext(newTodos);
  }

  return (
    <>
      <div className="form">
        <input
          type="text"
          name="todo"
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todotexts.map((todotext, index) => {
          return (
            <li key={index}>
              {todotext}
              {/* 削除ボタンを追加 */}
              <button onClick={() => deleteTodo(index)}>x</button>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default TodoForm
