import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ListItem } from "../../components/ListItem/ListItem";
import { getTodos, postTodo } from "../../apis/todoAPI";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import "./Home.css";

function Home() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const postTodoMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      setTitle("");
      setContent("");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const addTodo = () => {
    if (title !== "" && content !== "") {
      postTodoMutation.mutate({ title, content });
    }
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
          <ListItem key={todo.id} id={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Home;
