import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import "./LoginForm.css";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        login(result.user, result.tokens);
        alert("로그인 성공!");
      } else {
        alert("로그인 실패. 이메일 또는 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password")}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
