import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const addTodo = (text) => {
    if (text.trim().length === 0) {
      alert('빈 문자는 입력할 수 없습니다');
      return;
    }
    setTodos((prev) => [
      ...prev, 
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    if (text.trim().length === 0) {
      alert('빈 문자는 입력할 수 없습니다');
      return;
    }
    setTodos((prev) => 
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      editingId,
      setEditingId,
      editText,
      setEditText,
      addTodo,
      deleteTodo,
      updateTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodoContext);
};
