import './App.css';
import { useState } from 'react';
import Button from './component/button.jsx';
import Input from './component/input.jsx';
import { TodoProvider, useTodos } from './component/TodoContext.jsx';

function AppContent() {
  const [text, setText] = useState('');
  const { todos, editingId, editText, setEditText, addTodo, deleteTodo, updateTodo, setEditingId } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <Input 
          className="input-field"
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="할 일을 입력하세요"
        />
        <Button className="button" onClick={handleSubmit} type="submit">
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <p className="todo-id">{todo.id}.</p>

            {editingId !== todo.id && (
              <p className="todo-task">{todo.task}</p>
            )}

            {editingId === todo.id && (
              <Input 
                className="editing-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)} 
              />
            )}

            <Button 
              className={`button ${editingId === todo.id ? 'delete-button' : ''}`} 
              onClick={() => deleteTodo(todo.id)}
            >
              삭제하기
            </Button>

            {editingId === todo.id ? (
              <Button className="button" onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </Button>
            ) : (
              <Button className="button" onClick={() => {
                setEditingId(todo.id);
                setEditText(todo.task);
              }}>
                수정 진행
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );  
}

function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}

export default App;
