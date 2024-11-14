import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="todo-container">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
