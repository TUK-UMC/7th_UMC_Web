import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as TD from '../page/TodoDetail-styled';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const TodoDetailPage = () => {
  const location = useLocation();
  const todo = location.state; // 전달받은 todo 데이터
  console.log(todo)

  if (!todo) {
    return <DetailContainer>데이터를 찾을 수 없습니다.</DetailContainer>;
  }

  const formattedDate = todo.createdAt.split('T')[0];

  return (
    <DetailContainer>
      <TD.Title>{todo.title}</TD.Title>
      <TD.Content>{todo.content}</TD.Content>
      <TD.Date>{formattedDate}</TD.Date>
      <TD.BackButton onClick={() => window.history.back()}>뒤로가기</TD.BackButton>
    </DetailContainer>
  );
};

export default TodoDetailPage;
