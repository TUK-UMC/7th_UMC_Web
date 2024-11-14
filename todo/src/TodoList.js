import React from "react";
import { useTodos } from "./TodoContext";

function TodoList() {
  const {
    todos,
    deleteTodo,
    updateTodo,
    editingId,
    setEditingId,
    editText,
    setEditText,
  } = useTodos();

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editingId !== todo.id ? (
            <>
              <p className="todo-text">{todo.task}</p>
              <button onClick={() => setEditingId(todo.id)}>수정</button>
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </>
          ) : (
            <>
              <input
                className="edit-input"
                defaultValue={todo.task}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => updateTodo(todo.id, editText)}>
                완료
              </button>
              <button onClick={() => setEditingId(null)}>취소</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
