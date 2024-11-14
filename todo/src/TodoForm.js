import React, { useState } from "react";
import { useTodos } from "./TodoContext";

function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className="todo-button" type="submit">
        추가
      </button>
    </form>
  );
}

export default TodoForm;
