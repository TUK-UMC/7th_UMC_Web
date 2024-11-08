// src/TodoContext.js
import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Context API 배우기" },
    { id: 2, task: "React로 투두리스트 만들기" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // 할 일 추가
  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 할 일 수정
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        editingId,
        setEditingId,
        editText,
        setEditText,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
