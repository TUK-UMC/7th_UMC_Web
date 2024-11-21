import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import "./ListItem.css";

export const ListItem = ({ id, task, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const handleDoneButton = () => {
    editTodo(id, editText);
    setIsEditing(false);
  };

  return (
    <div className='listitem-container'>
      <input type='checkbox' />
      <div key={id} className='todo-wrapper'>
        {isEditing || (
          <div className='list-item'>
            <div className='todo-content-wrapper'>
              <span className='todo-title'>{task}</span>
              <span className='todo-content'>{task}</span>
            </div>
          </div>
        )}
        {isEditing && (
          <div key={id} className='list-item'>
            <div className='todo-content-wrapper'>
              <Input
                defaultValue={task}
                onChange={(e) => setEditText(e.target.value)}
              />
              <Input
                defaultValue={task}
                onChange={(e) => setEditText(e.target.value)}
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
              <Button
                onClick={() => deleteTodo(id)}
                className='listItem-button'
              >
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
