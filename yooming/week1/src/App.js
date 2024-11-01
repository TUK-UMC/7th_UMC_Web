import './App.css';
import TodoEditer from "./component/TodoEditer.js";
import Header from "./component/Header.js";
import TodoList from "./component/TodoList.js";
import { useState } from 'react';

function App() {
  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
    },
    {
      id: 1,
      isDone: false,
      content: "빨래 널기",
    },
    {
      id: 2,
      isDone: false,
      content: "노래 연습하기",
    },
  ];

  const DoneTodo = [
    {
      id: 0,
      isDone: true,
      content: "React 공부하기",
    },
    {
      id: 1,
      isDone: true,
      content: "빨래 널기",
    },
    {
      id: 2,
      isDone: true,
      content: "노래 연습하기",
    },
  ];
  
  const [todo, setTodo] = useState(mockTodo);
  const [Donetodo, setDoneTodo] = useState(DoneTodo);

  return (
    <div className="App">
      <Header />
      <TodoEditer mockTodo={todo}/>
      <TodoList mockTodo={todo} DoneTodo={Donetodo} />
    </div>
  );
}

export default App;
