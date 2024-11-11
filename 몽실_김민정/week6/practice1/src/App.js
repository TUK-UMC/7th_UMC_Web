import "./App.css";
import { useContext } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { ListItem } from "./components/ListItem/ListItem";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { text, setText, handleSubmit, addTodo, todos, deleteTodo, editTodo } =
    useContext(TodoContext);

  return (
    <div className='container'>
      <h1 className='title'>할일을 등록하세요!</h1>
      <form onSubmit={handleSubmit} className='form' d>
        <Input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={addTodo} type='submit'>
          할 일 등록
        </Button>
      </form>
      <div className='list'>
        {todos.map((todo) => (
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

export default App;
