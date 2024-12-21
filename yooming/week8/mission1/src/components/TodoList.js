import { useEffect, useState } from 'react';
import { fetchTodos } from './todoService'; // API 호출을 위한 함수

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        setIsError(true);
        console.error('할 일 가져오기 실패', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>할 일을 가져오는 데 실패했습니다.</div>;
  }

  return (
    <div>
      {todos.length === 0 ? (
        <div>할 일이 없습니다.</div>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
