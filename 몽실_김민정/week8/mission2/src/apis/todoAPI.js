import axios from "axios";

const BASE_URL = process.env.REACT_APP_TODO_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/todo`,
});

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get();
    return response.data[0];
  } catch (error) {
    console.error(error.message);
  }
};

export const postTodo = async (payload) => {
  try {
    const response = await axiosInstance.post(``, payload);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const patchEditTodo = async (id, payload) => {
  try {
    const response = await axiosInstance.patch(`/${id}`, payload);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const getDetailTodoInfo = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
