import axios from "axios";

const BASE_URL = process.env.REACT_APP_AUTH_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const postRegister = async ({ email, password, passwordCheck }) => {
  try {
    const response = await instance.post(`${BASE_URL}/register`, {
      email,
      password,
      passwordCheck,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
