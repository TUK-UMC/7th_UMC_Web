import { useState, createContext } from "react";

// 데이터를 담고 있음.
export const TodoContext = createContext();

// 접근을 허락해주는 하나의 우산을 생성
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "공부 야무지게 하기" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

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

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => id !== todo.id));
  };

  const editTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) =>
        id === item.id && text !== "" ? { ...item, task: text } : item
      )
    );
    setEditingId("");
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        handleSubmit,
        addTodo,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
