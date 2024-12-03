import React from "react";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
    const handleToggle = () => {
    onUpdate({ id: todo.id, updatedTodo: { completed: !todo.completed } });
    };

    const handleDelete = () => {
    onDelete(todo.id);
    };

    return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <span onClick={handleToggle}>{todo.title}</span>
        <button onClick={handleDelete}>Delete</button>
    </li>
    );
};

export default TodoItem;
