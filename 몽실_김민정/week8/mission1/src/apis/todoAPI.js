import axios from "axios";

const BASE_URL = process.env.REACT_APP_TODO_BASE_URL;

export const getTodos = async () => {
  try {
    const response = await axios(`${BASE_URL}/todo`);
    return response.data[0];
  } catch (error) {
    console.error(error.message);
  }
};

export const postTodo = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/todo`, payload);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
