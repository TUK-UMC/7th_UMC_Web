import axios from "axios";
import { LoginDataType, RegisterDataType } from "../types/authTypes";

const BASE_URL = process.env.REACT_APP_AUTH_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const postRegister = async ({
  email,
  password,
  passwordCheck,
}: RegisterDataType) => {
  try {
    const response = await instance.post(`${BASE_URL}/auth/register`, {
      email,
      password,
      passwordCheck,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogin = async ({ email, password }: LoginDataType) => {
  try {
    const response = await instance.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await instance.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
