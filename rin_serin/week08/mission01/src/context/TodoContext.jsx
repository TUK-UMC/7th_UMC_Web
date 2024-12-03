// src/context/TodoContext.jsx
import { createContext, useState } from "react";
import { useTodoApi } from "../hook/useTodoApi";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState(0);
    const [editTitle, setEditTitle] = useState('');
    const [editText, setEditText] = useState('');

    // useTodoApi를 활용
    const { addTodo, updateTodo, deleteTodo, isLoading, error } = useTodoApi();

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
        try {
            await deleteTodo(id);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
            console.log(todos);
        } catch {
            // 에러 처리는 useTodoApi 내부에서 관리
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
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
