import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { getDetailTodoInfo, patchEditTodo } from "../../apis/todoAPI";
import { Loading } from "../Loading/Loading";
import { formatDateToString } from "../../utils/formatDateToString";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

import "./TodoDetail.css";

export const TodoDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);

  const { id } = useParams();
  const { mutate: patchTodoMutate } = useFetch(patchEditTodo);

  const {
    data: todo,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["detailTodoInfo", id],
    queryFn: () => getDetailTodoInfo(id),
  });

  useEffect(() => {
    if (isSuccess) {
      const { title, content, checked } = todo;
      setTitle(title);
      setContent(content);
      setChecked(checked);
    }
  }, [isSuccess, todo]);

  if (isLoading) {
    return <Loading />;
  }

  const handleDoneButton = async () => {
    setIsEditing(false);
    try {
      await patchTodoMutate(id, {
        title,
        content,
        checked,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='todo-detail-container'>
      <h1 className='title'> ✏️ UMC TODO LIST ✏️</h1>
      <div className='todo-card-container'>
        {isEditing ? (
          <>
            <div className='todo-title-wrapper'>
              <input
                className='todo-title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className='edit-button' onClick={handleDoneButton}>
                <CheckIcon />
              </button>
            </div>
            <input
              value={content}
              className='todo-detail-content-wrapper'
              onChange={(e) => setContent(e.target.value)}
            />
            <div className='checkbox-wrapper'>
              <input
                type='checkbox'
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
              ></input>
              할일을 완료했나요?
            </div>
          </>
        ) : (
          <>
            <div className='todo-title-wrapper'>
              <h2 className='todo-title'>{title}</h2>
              <button
                className='edit-button'
                onClick={() => setIsEditing((prev) => !prev)}
              >
                <EditIcon />
              </button>
            </div>
            <div className='todo-detail-content-wrapper'>{content}</div>
            <div className='checkbox-wrapper'>
              <input type='checkbox' checked={checked} disabled></input>
              할일을 완료했나요?
            </div>
          </>
        )}
        <span className='todo-date'>
          {formatDateToString(new Date(todo.updatedAt))}
        </span>
      </div>
    </div>
  );
};
