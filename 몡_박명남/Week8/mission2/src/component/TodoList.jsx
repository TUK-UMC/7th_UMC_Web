import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../api/todoApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const queryClient = useQueryClient();


    const { data: todos, isLoading, error } = useQuery(["todos"], fetchTodos);

    const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
    queryClient.invalidateQueries(["todos"]); 
    },
    });

    const deleteTodoMutation = useMutation(deleteTodo, {
    onMutate: async (id) => {
    await queryClient.cancelQueries(["todos"]); 
        const previousTodos = queryClient.getQueryData(["todos"]);
        queryClient.setQueryData(["todos"], (old) =>
        old.filter((todo) => todo.id !== id)
        );
        return { previousTodos };
    },
    onError: (err, id, context) => {
    queryClient.setQueryData(["todos"], context.previousTodos); 
    },
    onSettled: () => {
        queryClient.invalidateQueries(["todos"]);
    },
    });

    const updateTodoMutation = useMutation(updateTodo, {
    onMutate: async ({ id, updatedTodo }) => {
        await queryClient.cancelQueries(["todos"]);
        const previousTodos = queryClient.getQueryData(["todos"]);
        queryClient.setQueryData(["todos"], (old) =>
        old.map((todo) =>
            todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
        );
        return { previousTodos };
    },
    onError: (err, variables, context) => {
        queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {
        queryClient.invalidateQueries(["todos"]);
    },
    });

    const handleAddTodo = () => {
    const title = prompt("Enter new todo:");
    if (title) {
        addTodoMutation.mutate({ title, completed: false });
    }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
    <div>
        <h1>To-Do List</h1>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodoMutation.mutate}
            onUpdate={updateTodoMutation.mutate}
            />
        ))}
        </ul>
    </div>
    );
};

export default TodoList;
