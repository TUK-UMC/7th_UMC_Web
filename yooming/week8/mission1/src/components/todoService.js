import axiosInstance from './axiosInstance';  // axios 인스턴스 사용

export const fetchTodos = async () => {
  try {
    const response = await axiosInstance.get('/todo');
    return response.data;
  } catch (error) {
    console.error('할 일 가져오기 실패', error);
    throw error;
  }
};

export const addTodo = async (title, content) => {
  try {
    const response = await axiosInstance.post('/todo', { title, content });
    return response.data;
  } catch (error) {
    console.error('할 일 추가 실패', error);
    throw error;
  }
};

export const updateTodo = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/todo/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('할 일 수정 실패', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axiosInstance.delete(`/todo/${id}`);
  } catch (error) {
    console.error('할 일 삭제 실패', error);
    throw error;
  }
};
