import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { deleteTodo, patchEditTodo } from "../../apis/todoAPI";

import "./ListItem.css";

export const ListItem = ({ id, todo }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const [editCheck, setEditCheck] = useState(todo.checked);

  const patchTodoMutation = useMutation({
    mutationFn: () =>
      patchEditTodo(id, {
        title: editTitle,
        content: editContent,
        checked: editCheck,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const handleDoneButton = () => {
    setIsEditing(false);
    patchTodoMutation.mutate();
  };

  const handleDeleteButton = () => {
    deleteTodoMutation.mutate();
  };

  return (
    <div className='listitem-container'>
      <input
        type='checkbox'
        checked={editCheck}
        onChange={() => setEditCheck((prev) => !prev)}
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
