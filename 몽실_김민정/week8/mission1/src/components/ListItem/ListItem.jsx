import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { usePatchEditTodoMutation } from "../../hooks/usePatchEditTodoMutation";

import "./ListItem.css";
import { useFetch } from "../../hooks/useFetch";
import { deleteTodo } from "../../apis/todoAPI";

export const ListItem = ({ id, todo }) => {
  const navigate = useNavigate();
  const { mutate: patchEditTodoMutate } = usePatchEditTodoMutation();
  const { mutate: deleteTodoMutate } = useFetch(deleteTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const [editCheck, setEditCheck] = useState(todo.checked);

  const handleDoneButton = () => {
    setIsEditing(false);
    patchEditTodoMutate({
      id,
      data: {
        title: editTitle,
        content: editContent,
        checked: editCheck,
      },
    });
  };

  const handleDeleteButton = () => {
    deleteTodoMutate(id);
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
