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
    <div key={id} className='todo-wrapper'>
      {/**수정이 아닐 때 */}
      {isEditing || (
        <div className='list-item'>
          <p>{id}.</p>
          <p className='todo-title'>{task}</p>
        </div>
      )}
      {/** 수정 중 */}
      {isEditing && (
        <div key={id} className='list-item'>
          <p>{id}</p>
          <Input
            defaultValue={task}
            onChange={(e) => setEditText(e.target.value)}
          />
        </div>
      )}
      <div className='button-wrapper'>
        <Button onClick={() => deleteTodo(id)}>삭제하기</Button>
        {isEditing ? (
          <Button onClick={handleDoneButton}>수정 완료</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>수정 진행</Button>
        )}
      </div>
    </div>
  );
};
