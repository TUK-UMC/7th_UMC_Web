// TodoContext.js
import { createContext, useState, useEffect } from "react";
import { useTodoApi } from "../hook/useTodoApi";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const loadTodosFromLocalStorage = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(loadTodosFromLocalStorage());
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(0);
  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');
  const [search, setSearch] = useState(''); // 검색어 상태 추가
  const [filteredTodos, setFilteredTodos] = useState(todos); // 필터링된 todos 상태
  const isFormFilled = title.trim() && text.trim(); // 제목과 내용 모두 입력되었을 때 true

  const { addTodo, updateTodo, deleteTodo, isLoading, error } = useTodoApi();

  // todos 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    fetch('http://localhost:3000/todo')
      .then((response) => response.json())
      .then((data) => {
        // 데이터가 정상적인지 확인하고, 유효한 항목만 상태에 저장
        setTodos(data.filter(todo => todo.exists)); // 예시로 exists 필드를 사용하여 유효한 항목만 필터링
      })
      .catch((error) => {
        console.error("데이터 로딩 오류:", error);
      });
  }, []);

  useEffect(() => {
    setFilteredTodos(todos); // todos가 변경될 때마다 filteredTodos를 업데이트
  }, [todos]);
  
  

  const handleAddTodo = async () => {
    if (!title.trim() || !text.trim()) return;

    const newTodo = { title, content: text };
    try {
      const savedTodo = await addTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, savedTodo]);
      setTitle('');
      setText('');
    } catch {
      // 에러 처리는 useTodoApi 내부에서 관리
    }
  };

  const handleUpdateTodo = async (id) => {
    const updatedTodo = { title: editTitle, content: editText };
    try {
      const updatedData = await updateTodo(id, updatedTodo);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo))
      );
      setEditingId('');
      setEditTitle('');
      setEditText('');
    } catch {
      // 에러 처리는 useTodoApi 내부에서 관리
    }
  };

  const handleDeleteTodo = async (id) => {
    const todoExists = todos.some(todo => todo.id === id); // 클라이언트에서 해당 항목이 있는지 확인
    if (!todoExists) {
      console.log('삭제할 항목이 존재하지 않습니다.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/todo/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('삭제 실패');
      }

      // 서버에서 삭제된 후, todos에서 해당 항목을 삭제하고 filteredTodos도 갱신
      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.filter(todo => todo.id !== id);
        // 삭제 후 filteredTodos도 갱신
        setFilteredTodos(updatedTodos);
        return updatedTodos;
      });
    } catch (error) {
      console.error('삭제 실패:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        title,
        setTitle,
        editingId,
        setEditingId,
        editText,
        setEditText,
        editTitle,
        setEditTitle,
        handleSubmit,
        addTodo: handleAddTodo,
        updateTodo: handleUpdateTodo,
        deleteTodo: handleDeleteTodo,
        isLoading,
        error,
        search,
        setSearch,
        filteredTodos,
        setFilteredTodos,
        isFormFilled
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
