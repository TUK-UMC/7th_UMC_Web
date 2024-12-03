import axios from "axios";

const BASE_URL = "https://api.example.com";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});

export const getTodos = async (query = "") => api.get(`/todo?title=${query}`);
export const getTodoById = async (id) => api.get(`/todo/${id}`);
export const createTodo = async (data) => api.post("/todo", data);
export const updateTodo = async (id, data) => api.patch(`/todo/${id}`, data);
export const deleteTodo = async (id) => api.delete(`/todo/${id}`);
