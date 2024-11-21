import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { ListItem } from "../components/ListItem/ListItem";
import { getTodos } from "../apis/todoAPI";
import "./Home.css";

function Home() {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    console.log("할일 추가히기");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const deleteTodo = (id) => {
    console.log("할일 삭제");
  };

  const editTodo = (id, text) => {
    console.log("할일 수정");
  };

  return (
    <div className='container'>
      <h1 className='title'> ✏️ UMC TODO LIST ✏️</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input-wrapper'>
          <Input
            type='text'
            value={text}
            onChange={handleInputChange}
            placeholder='제목을 입력해주세요'
          />
          <Input
            type='text'
            value={text}
            onChange={handleInputChange}
            placeholder='내용을 입력해주세요'
          />
        </div>
        <Button onClick={addTodo} type='submit'>
          Todo 생성
        </Button>
      </form>
      <div className='list'>
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
