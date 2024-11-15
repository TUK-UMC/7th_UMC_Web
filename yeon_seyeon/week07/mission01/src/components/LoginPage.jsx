import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 유효성 검사 스키마 설정
const schema = yup.object().shape({
  email: yup
    .string()
    .email("유효한 이메일 형식이 아닙니다.")
    .required("이메일을 반드시 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(16, "비밀번호는 16자 이하여야 합니다.")
    .required("비밀번호를 입력해주세요."),
});

// 스타일링
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #222;
  color: white;
  border-radius: 8px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff007f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff66a3;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #aaa;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // 로그인 요청 함수
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        // 토큰을 localStorage에 저장
        localStorage.setItem("AccessToken", response.data.accessToken);
        localStorage.setItem("RefreshToken", response.data.refreshToken);

        // 메인 페이지로 이동
        navigate("/");
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>이메일</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="이메일" />}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Label>비밀번호</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="비밀번호" />
          )}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
    </Container>
  );
};

export default LoginPage;
