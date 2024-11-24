import React, { createContext, useState, useContext } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoService';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState({ title: '', content: '' });

  const loadTodos = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      setIsError(true);
      console.error('할 일 가져오기 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addNewTodo = async (title, content) => {
    try {
      const newTodo = await addTodo(title, content);
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error('할 일 추가 실패', error);
    }
  };

  const updateTodoHandler = async (id, updatedData) => {
    try {
      await updateTodo(id, updatedData);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo))
      );
    } catch (error) {
      console.error('할 일 수정 실패', error);
    }
  };

  const deleteTodoHandler = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('할 일 삭제 실패', error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoading,
        isError,
        loadTodos,
        addTodo: addNewTodo,
        updateTodo: updateTodoHandler,
        deleteTodo: deleteTodoHandler,
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

export const useTodos = () => useContext(TodoContext);
