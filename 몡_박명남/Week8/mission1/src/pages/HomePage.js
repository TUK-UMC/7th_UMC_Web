import React, { useState } from "react";
import { useCustomFetch } from "../hooks/useCustomFetch";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const { data: todos, loading, error } = useCustomFetch(() => getTodos(query), [query]);

    const handleCreate = async (todo) => {
    await createTodo(todo);
    setQuery(""); // Refetch data
    };

    const handleUpdate = async (id, updatedData) => {
    await updateTodo(id, updatedData);
    setQuery(""); // Refetch data
    };

    const handleDelete = async (id) => {
    await deleteTodo(id);
    setQuery(""); // Refetch data
    };

    return (
    <div>
        <h1>UMC ToDoList</h1>
        <TodoForm onCreate={handleCreate} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {todos && <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />}
    </div>
    );
};

export default HomePage;
