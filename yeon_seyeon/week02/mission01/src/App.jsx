import { useState } from "react";
import "./App.css";

function App() {
  //투두리스트, 화면에 출력되는 (추가,삭제,수정)
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "화면 해원 배운 건 판민" },
  ]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //1.추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  //2.삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //3.수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.filter((item) => (item.id !== id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTodo()} type="submit">
          할 일 등록
        </button>
      </form>
      <div>
        {todos.map((todo, _) => (
          // eslint-disable-next-line react/jsx-key
          <div style={{ display: "flex", gap: "20px" }}>
            {/*수정이 아닐 때 */}
            {editingId === false && (
              <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/*수정중 상태일때 */}
            {editingId === true && (
              <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}.</p>
                <input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <h4 key={todo.id}>
              {todo.id}. {todo.task}
            </h4>
            <button onClick={() => updateTodo(editingId, text)}>
              수정완료
            </button>
            <button onClick={() => setEditingId(todo.id)}>수정진행</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
