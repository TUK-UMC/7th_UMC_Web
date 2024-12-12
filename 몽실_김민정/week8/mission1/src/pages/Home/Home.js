import { useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { getTodos, postTodo } from "../../apis/todoAPI";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ListItem } from "../../components/ListItem/ListItem";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";

import "./Home.css";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: todos, loading, error, mutate: getMutate } = useFetch(getTodos);
  const { mutate: postMutate } = useFetch(postTodo, false);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTodo();
      getMutate();
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = () => {
    if (title !== "" && content !== "") {
      postMutate({ title, content });
      setTitle("");
      setContent("");
    }
    getMutate();
  };

  return (
    <div className='container'>
      <h1 className='title'> ✏️ UMC TODO LIST ✏️</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input-wrapper'>
          <Input
            type='text'
            placeholder='제목을 입력해주세요'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type='text'
            placeholder='내용을 입력해주세요'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button type='submit' active={title !== "" && content !== ""}>
          Todo 생성
        </Button>
      </form>
      <div className='list'>
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            getMovies={getMutate}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
