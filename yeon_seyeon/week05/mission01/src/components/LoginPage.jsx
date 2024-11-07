// src/components/LoginPage.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    border-color: #ff007f;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: #ff007f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff66a3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError("올바른 이메일 형식이 아닙니다. 다시 입력해주세요!");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError("비밀번호는 8~16자 사이로 입력해주세요!");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      // 로그인 로직 수행
      console.log("로그인 성공");
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <Button type="submit">로그인</Button>
      </form>
    </Container>
  );
};

export default LoginPage;
