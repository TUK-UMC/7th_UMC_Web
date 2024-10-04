import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "화면 해원 배운 건 판민" },
  ]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: editText } : item))
    );
    setEditingId(null);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일 입력"
        />
        <Button onClick={addTodo} type="submit" text="할 일 등록" />
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {/* 수정 중이 아닐 때 */}
            {editingId !== todo.id && (
              <>
                <p className="todo-text">
                  {todo.id}. {todo.task}
                </p>
                <Button
                  onClick={() => setEditingId(todo.id)}
                  text="수정"
                  className="edit-btn"
                />
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  text="삭제"
                  className="delete-btn"
                />
              </>
            )}

            {/* 수정 중일 때 */}
            {editingId === todo.id && (
              <>
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <Button
                  onClick={() => updateTodo(todo.id)}
                  text="수정 완료"
                  className="update-btn"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Button.css";

const Button = ({ onClick, text, className = "", type = "button" }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} type={type}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import "./Input.css";

const Input = ({ value, onChange, type = "text", placeholder = "", defaultValue }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="input"
    />
  );
};

export default Input;

