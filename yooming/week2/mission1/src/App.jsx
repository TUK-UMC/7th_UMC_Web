import './App.css';
import { useState } from 'react';
import Button from './component/button.jsx';
import Input from './component/input.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, seteditingId] = useState('');
  const [editText, seteditText] = useState('');

  // 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('빈 문자는 입력할 수 없습니다');
      return 0;
    }
    setTodos((prev) => [
      ...prev, 
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
    setText('');
  };

  // 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정하기
  const updateTodo = (id, text) => {
    if (text.trim().length === 0) {
      alert('빈 문자는 입력할 수 없습니다');
      return 0;
    }
    setTodos((prev) => 
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    seteditingId('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Button className="button" onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <p className="todo-id">{todo.id}.</p> {/* 번호를 왼쪽에 위치 */}
            
            {/* 수정 중 아닐 때 */}
            {editingId !== todo.id && (
              <p className="todo-task">{todo.task}</p> 
            )}
  
            {/* 수정 중일 때 */}
            {editingId === todo.id && (
              <Input 
                className="editing-input"
                value={editText}
                onChange={(e) => seteditText(e.target.value)} 
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
                seteditingId(todo.id);
                seteditText(todo.task);
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

export default App;
