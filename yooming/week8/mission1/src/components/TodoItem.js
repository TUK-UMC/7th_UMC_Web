import styled from 'styled-components';
import Button from './button';
import Input from './input';
import { useTodos } from './TodoContext';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 15px;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const TodoTitle = styled.p`
  font-weight: bold;
  margin: 0;
  color: #2c3e50;
`;

const TodoContent = styled.p`
  margin: 0;
  color: #7f8c8d;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const EditWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

function TodoItem({ todo }) {
  const { editingId, setEditingId, updateTodo, deleteTodo, editText, setEditText } = useTodos();

  const handleEditClick = () => {
    setEditingId(todo.id);
    setEditText({ title: todo.title, content: todo.content });
  };

  const handleSaveClick = () => {
    updateTodo(todo.id, { title: editText.title, content: editText.content });
    setEditingId('');  // 수정 완료 후 수정모드 종료
  };

  return (
    <ItemContainer>
      <ContentWrapper>
        {todo.id === editingId ? (
          // 수정 모드
          <EditWrapper>
            <Input
              value={editText.title}
              onChange={(e) => setEditText({ ...editText, title: e.target.value })}
              placeholder="제목을 입력하세요"
            />
            <Input
              value={editText.content}
              onChange={(e) => setEditText({ ...editText, content: e.target.value })}
              placeholder="내용을 입력하세요"
            />
            <Button onClick={handleSaveClick}>저장</Button>
          </EditWrapper>
        ) : (
          // 일반 모드
          <>
            <TodoTitle>{todo.title}</TodoTitle>
            <TodoContent>{todo.content}</TodoContent>
          </>
        )}
      </ContentWrapper>
      <ButtonWrapper>
        <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
        <Button onClick={handleEditClick}>수정</Button>
        <Button onClick={() => updateTodo(todo.id, { checked: !todo.checked })}>
          {todo.checked ? '완료' : '진행 중'}
        </Button>
      </ButtonWrapper>
    </ItemContainer>
  );
}

export default TodoItem;

