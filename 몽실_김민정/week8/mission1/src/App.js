import { useState } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import "./App.css";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "공부 야무지게 하기" },
  ]);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if (text !== "")
      setTodos((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 100) + 2, task: text },
      ]);
    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => id !== todo.id));
  };

  const editTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) =>
        id === item.id && text !== "" ? { ...item, task: text } : item
      )
    );
  };

  return (
    <div className='container'>
      <h1 className='title'> ✏️ UMC TODO LIST ✏️</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input-wrapper'>
          <Input
            type='text'
            value={text}
            onChange={handleInputChange}
            placeholder='제목을 입력해주세요'
          />
          <Input
            type='text'
            value={text}
            onChange={handleInputChange}
            placeholder='내용을 입력해주세요'
          />
        </div>
        <Button onClick={addTodo} type='submit'>
          Todo 생성
        </Button>
      </form>
      <div className='list'>
        {todos.map((todo) => (
          <ListItem
            id={todo.id}
            task={todo.task}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
