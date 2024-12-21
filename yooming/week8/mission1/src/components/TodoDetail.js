import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTodoById } from './todoService';  // getTodoById 함수 사용

const TodoDetail = () => {
  const { id } = useParams();  // URL에서 id를 가져옵니다.
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const fetchedTodo = await getTodoById(id);  // id를 통해 해당 할 일 데이터를 불러옵니다.
        setTodo(fetchedTodo);
      } catch (error) {
        console.error('할 일 불러오기 실패:', error);
      }
    };
    fetchTodo();
  }, [id]);  // id가 바뀔 때마다 다시 호출됩니다.

  if (!todo) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <p>{todo.checked ? '완료됨' : '진행 중'}</p>
    </div>
  );
};

export default TodoDetail;
