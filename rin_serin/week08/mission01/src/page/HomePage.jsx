import styled from 'styled-components';
import Button from '../components/Button';
import InputBox from '../components/Inputbox';
import { TodoContext } from '../context/TodoContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as T from "../page/Home-styled";
import Error from '../components/Error';

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
    addTodo,
    deleteTodo,
    updateTodo,
    isLoading,
    error,
    search,
    setSearch,
    filteredTodos,
    setFilteredTodos,
    isFormFilled
  } = useContext(TodoContext);

  const navigate = useNavigate();

  // 검색어 변경 시 실행할 함수
  const handleSearch = (searchTerm) => {
    navigate(`?search=${searchTerm}`); // 쿼리 파라미터에 검색어 반영

    if (searchTerm.trim() === '') {
      setFilteredTodos(todos); // 검색어가 없으면 모든 항목 표시
    } else {
      const lowercasedSearch = searchTerm.toLowerCase();
      const filtered = todos.filter(todo =>
        todo.title.toLowerCase().includes(lowercasedSearch) // 제목에 검색어 포함 여부 확인
      );
      setFilteredTodos(filtered); // 필터링된 항목으로 업데이트
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // 기본 form 제출 동작을 막음
    if (isFormFilled) {
      addTodo(); // addTodo를 호출하여 할 일 추가
    }
  };

  return (
    <T.All>
      <h3>Todo List</h3>
      <T.SearchTodoBox>
        <InputBox
          type="text"
          value={search}
          placeholder="제목을 검색해보세요"
          $height="34px"
          $padding="5px 8px"
          onChange={(e) => setSearch(e.target.value)} // 검색어 입력 시 handleSearch 호출
        />
        <Button
          onClick={() => handleSearch(search)} // 검색 버튼 클릭 시 handleSearch 호출
          type="button"
          width="88px"
          $backgroundColor={search.trim() ? "#4abdff" : "#eee"}
          $colorIs={search.trim() ? "#fff" : "#bbb"}
          disabled={!search.trim() || isLoading} // 로딩 중이거나 폼이 비어있으면 비활성화
          buttonName={"검색"}
        />
      </T.SearchTodoBox>

      {/* form의 onSubmit에 onSubmitHandler 함수 연결 */}
      <T.TodoForms onSubmit={onSubmitHandler}>
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
          type="submit"
          $backgroundColor={isFormFilled ? "#4abdff" : "#eee"}
          $colorIs={isFormFilled ? "#fff" : "#bbb"}
          disabled={!isFormFilled || isLoading} // 로딩 중이거나 폼이 비어있으면 비활성화
          buttonName={"ToDo 생성"}
        />
      </T.TodoForms>

      <T.Todos>
        {/* 필터링된 todos 배열을 사용하여 렌더링 */}
        {filteredTodos.map((todo) => (
          <T.EachTodo
            key={todo.id}
            onClick={() => navigate(`/todo/${todo.id}`, { state: todo })}
          >
            <T.TodoFront>
              <T.StyledCheckbox onClick={(e) => e.stopPropagation()} />
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
              <T.TodoButton onClick={(e) => e.stopPropagation()}>
                <Button
                  onClick={() => updateTodo(editingId)}
                  $backgroundColor="#4abdff"
                  $colorIs="#fff"
                  buttonName={"수정완료"} // 로딩 중 텍스트 변경
                  disabled={isLoading} // 로딩 중 비활성화
                />
              </T.TodoButton>
            ) : (
              <T.TodoButtons onClick={(e) => { e.stopPropagation(); }}>
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  $backgroundColor="#eee"
                  buttonName={"삭제"}
                  disabled={isLoading}
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
