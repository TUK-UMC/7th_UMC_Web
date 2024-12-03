import styled from 'styled-components';
import Button from '../components/Button';
import InputBox from '../components/Inputbox';
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from "../page/Home-styled"
import Error from '../components/Error';
import { useState } from 'react';

function HomePage() {
  const {
    todos,
    text,
    setText,
    title,
    setTitle,
    editingId,
    setEditingId,
    editTitle,
    setEditTitle,
    editText,
    setEditText,
    handleSubmit,
    addTodo,
    deleteTodo,
    updateTodo,
    isLoading,
    error,
  } = useContext(TodoContext);

  const isFormFilled = title.trim() && text.trim(); // 제목과 내용 모두 입력되었을 때 true
  const navigate = useNavigate();

  return (
    <T.All>
      <h3>Todo List</h3>

      <T.TodoForms onSubmit={handleSubmit}>
        <InputBox
          type="text"
          value={title}
          placeholder="제목을 작성해주세요"
          $height="34px"
          $padding="5px 8px"
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputBox
          type="text"
          value={text}
          placeholder="내용을 작성해주세요"
          $height="34px"
          $padding="5px 8px"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={() => addTodo()}
          type="submit"
          $backgroundColor={isFormFilled ? "#4abdff" : "#eee"}
          $colorIs={isFormFilled ? "#fff" : "#bbb"}
          disabled={!isFormFilled || isLoading} // 로딩 중이거나 폼이 비어있으면 비활성화
          buttonName={"ToDo 생성"} 
        />
      </T.TodoForms>

      <T.Todos>
        {todos.map((todo) => (
          <T.EachTodo 
          key={todo.id}
          onClick={()=>navigate(`/todo/${todo.id}`, {state:todo})}
          >
            <T.TodoFront>
              <T.StyledCheckbox  onClick={(e) => e.stopPropagation()}/>
              {/* 수정이 아닐 때 */}
              {editingId !== todo.id && (
                <T.TodoContents>
                  <p>{todo.title}</p>
                  <p style={{ fontSize: "14px", fontWeight: "400" }}>{todo.content}</p>
                </T.TodoContents>
              )}
              {/* 수정 중 상태일 때 */}
              {editingId === todo.id && (
                <T.TodoContents onClick={(e) => e.stopPropagation()}>
                  <InputBox
                    width="100%"
                    $height="24px"
                    $padding="0"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <InputBox
                    width="100%"
                    $height="24px"
                    $padding="0"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </T.TodoContents>
              )}
            </T.TodoFront>
            {editingId === todo.id ? (
              <T.TodoButton  onClick={(e) => e.stopPropagation()}>
                <Button
                  onClick={() => updateTodo(editingId)}
                  $backgroundColor="#4abdff"
                  $colorIs="#fff"
                  buttonName={ "수정완료"} // 로딩 중 텍스트 변경
                  disabled={isLoading} // 로딩 중 비활성화
                />
              </T.TodoButton>
            ) : (
              <T.TodoButtons  onClick={(e) => {e.stopPropagation();;}}> 
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  $backgroundColor="#eee"
                  buttonName={"삭제"} // 로딩 중 텍스트 변경
                  disabled={isLoading} // 로딩 중 비활성화
                />
                <Button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditTitle(todo.title);
                    setEditText(todo.content);
                  }}
                  $backgroundColor="#eee"
                  buttonName="수정"
                />
              </T.TodoButtons>
            )}
          </T.EachTodo>
        ))}
      </T.Todos>
    </T.All>
  );
}

export default HomePage;
