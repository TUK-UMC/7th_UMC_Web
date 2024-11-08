import { createContext } from "react";
import { useState } from "react";
import { getUserData, postLogin } from "../apis/authAPI";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );
  const [userData, setUserData] = useState(null);

  const login = async (data) => {
    try {
      const postLoginResponse = await postLogin({
        email: data.email,
        password: data.password,
      });
      const accessToken = postLoginResponse.accessToken;
      const refreshToken = postLoginResponse.refreshToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setIsAuthenticated(true);
      getUser();
    } catch (error) {
      const errorMessage = error?.response?.data.message;
      alert(errorMessage);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  };

  const getUser = async () => {
    const response = await getUserData();
    setUserData(response);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        getUser,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
