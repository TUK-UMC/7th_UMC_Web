import { useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';  // 항상 보여줄 폼
import TodoList from './TodoList';
import { useTodos } from './TodoContext';

const Container = styled.div`
  background-color: #f7f9fc;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin-top: 20px;
`;

const LoadingMessage = styled.div`
  color: #2c3e50;
  font-size: 16px;
  margin-top: 20px;
`;

const EmptyMessage = styled.div`
  color: #7f8c8d;
  font-size: 16px;
  margin-top: 20px;
`;

function AppContent() {
  const { isLoading, isError, todos, loadTodos } = useTodos();

  useEffect(() => {
    loadTodos();  // 컴포넌트가 마운트 될 때 할 일 목록을 불러옴
  }, [loadTodos]);

  if (isLoading) {
    return (
      <Container>
        <LoadingMessage>로딩 중입니다...</LoadingMessage>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <ErrorMessage>할 일을 불러오는 데 실패했습니다.</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>⚡ UMC ToDoList ⚡</Title>
      <TodoForm /> {/* 할 일 추가 폼은 항상 보이도록 */}
      {todos.length === 0 ? (
        <EmptyMessage>할 일이 없습니다.</EmptyMessage>
      ) : (
        <TodoList />
      )}
    </Container>
  );
}

export default AppContent;
