import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { deleteTodo, patchEditTodo } from "../../apis/todoAPI";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import "./ListItem.css";

export const ListItem = ({ id, todo, getMovies }) => {
  const navigate = useNavigate();
  const { mutate: patchEditTodoMutate } = useFetch(patchEditTodo, false);
  const { mutate: deleteTodoMutate } = useFetch(deleteTodo, false);

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const [editCheck, setEditCheck] = useState(todo.checked);

  const handleDoneButton = async () => {
    setIsEditing(false);
    try {
      await patchEditTodoMutate(id, {
        title: editTitle,
        content: editContent,
        checked: editCheck,
      });
      getMovies();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteButton = async () => {
    try {
      await deleteTodoMutate(id);
      getMovies();
    } catch (error) {
      console.error();
    }
  };

  return (
    <div className='listitem-container'>
      <input
        type='checkbox'
        checked={editCheck}
        onChange={() => setEditCheck((prev) => !prev)}
        disabled={!isEditing}
      />
      <div key={id} className='todo-wrapper'>
        {isEditing || (
          <div className='list-item'>
            <div
              className='todo-content-wrapper'
              onClick={() => navigate(`todo/${id}`)}
            >
              <span className='listItem-title'>{todo.title}</span>
              <span className='listItem-content'>{todo.content}</span>
            </div>
          </div>
        )}
        {isEditing && (
          <div key={id} className='list-item'>
            <div className='todo-content-wrapper'>
              <Input
                defaultValue={todo.title}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <Input
                defaultValue={todo.content}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className='button-wrapper'>
          {isEditing ? (
            <Button onClick={handleDoneButton} className='listItem-button'>
              수정 완료
            </Button>
          ) : (
            <>
              <Button onClick={handleDeleteButton} className='listItem-button'>
                삭제
              </Button>
              <Button
                onClick={() => setIsEditing(true)}
                className='listItem-button'
              >
                수정
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
