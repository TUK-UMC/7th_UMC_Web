import styled from 'styled-components';
import { useState } from 'react';
import { useTodos } from './TodoContext';
import Button from './button';

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

function TodoForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addTodo(title, content);  // 할 일 추가
      setTitle('');
      setContent('');
    } else {
      alert('제목과 내용을 입력해주세요!');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <Button type="submit">추가</Button>
    </FormContainer>
  );
}

export default TodoForm;
