import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authApi";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      alert("로그인 성공!");
      console.log(data);
      localStorage.setItem("token", data.token); // 예시: 토큰 저장
    },
    onError: (error) => {
      alert("로그인 실패: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
