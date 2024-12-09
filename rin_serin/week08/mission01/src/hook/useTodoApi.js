import { useState } from "react";

export const useTodoApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiBaseUrl = "http://localhost:3000/todo";

    const fetchWithHandling = async (url, options) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`API 호출 실패: ${response.statusText}`);
            }
            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const addTodo = async (todo) => {
        return await fetchWithHandling(apiBaseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo),
        });
    };

    const updateTodo = async (id, todo) => {
        return await fetchWithHandling(`${apiBaseUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo),
        });
    };

    const deleteTodo = async(id) => {
        // 서버에 항목 삭제 요청
        fetch(`http://localhost:3000/todo/${id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              // 삭제 성공 시, 로컬 상태에서 항목 제거
              setTodos(todos.filter(todo => todo.id !== id)); // 삭제된 항목 제외
            } else {
              throw new Error("삭제 실패");
            }
          })
          .catch((error) => {
            console.error("삭제 오류:", error);
          });
      };
      
      

    return { addTodo, updateTodo, deleteTodo, isLoading, error };
};
