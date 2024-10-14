import './App.css'
import styled from 'styled-components'
import { useState } from 'react'
import Button from './components/Button';
import InputBox from './components/Inputbox';

const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Todos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32%;
`
const EachTodo = styled.div`
  display: flex;
  align-items: center;
`

const TodoForms = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`

function App() {
  //todo에 올리기
  const [todos, setTodos] = useState([]);
  
  //input value 값
  const [text,setText] = useState('');

  //수정 하는 버튼
  const [editingId, setEditingId] = useState(0);
  const [editText, setEditText] = useState('')

  //추가하기
  const addTodo = () => {
    setTodos((prevValue)=> [
      ...prevValue,
      {id: Math.floor(Math.random()*100)+2, task : text}
    ])
    setText('')
  };

  //삭제하기
  const deleteTodo = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((item) => item.id !== id))
  };

  //수정하기
  const updateTodo = (id, text) => {
    console.log(id)
    setTodos((prev) => 
      prev.map((item) => item.id === id? {...item, task : text}:item)
    );
    setEditingId('');
  };

  //새로고침(렌더링) 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
    

  return (
    <All>
    <TodoForms onSubmit={handleSubmit}>{/* <Input/><Button></Button> */}
      <InputBox 
      type='text' 
      width = "30%"
      value={text} 
      onChange={(e)=>setText(e.target.value)}/>
      <Button 
      onClick = {() => addTodo()} 
      type='submit' 
      backgroundColor = "#e4e4e4"
      buttonName= '할 일 등록'/>
    </TodoForms>
    <Todos>
      {todos.map((todo)=>(
        <EachTodo key={todo.id}  style={{display:'flex', gap:'2px'}}>
          {/* 수정이 아닐 때 */}
          {editingId!== todo.id && (
            <div key={todo.id} style={{display:'flex', gap:'5px'}}>
              <p>{todo.id}.</p>
              <p>{todo.task}</p>
            </div>
          )}
          {/* 수정 중 상태일 때 */}
          {editingId=== todo.id && (
            <div key={todo.id} style={{display:'flex', alignItems:'center', gap:'5px'}}>
              <p>{todo.id}.</p>
              <InputBox width="100%" value={editText} onChange={(e) => setEditText(e.target.value)}/>
            </div>
          )}
        <Button onClick={()=> deleteTodo(todo.id)} backgroundColor = "#ff9b9b" buttonName= '삭제하기'/>
        {editingId === todo.id ?(
          // isEditiong === todo.id 수정 중인 상태
          <Button onClick={() => updateTodo(editingId,editText)} backgroundColor = "#4abdff" buttonName= '수정완료'/>
        ) :(
          // isEditiong !== todo.id 수정 아닌 상태
          <Button onClick={() => setEditingId(todo.id)} backgroundColor = "#e4e4e4" buttonName= '수정하기'/>
        )}
      </EachTodo>
      ))}
    </Todos>
    </All>
  )
}

export default App
