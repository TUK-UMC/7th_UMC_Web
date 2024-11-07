import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

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
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 검증 또한 필수 입력요소입니다."),
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

// 회원가입 폼 컴포넌트
const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // 성공적으로 제출된 데이터가 출력됩니다.
  };

  return (
    <Container>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>이메일을 입력해주세요!</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="이메일" />}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Label>비밀번호를 입력해주세요!</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="비밀번호" />
          )}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Label>비밀번호를 다시 입력해주세요!</Label>
        <Controller
          name="passwordCheck"
          control={control}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="비밀번호 확인" />
          )}
        />
        {errors.passwordCheck && (
          <ErrorText>{errors.passwordCheck.message}</ErrorText>
        )}

        <SubmitButton type="submit">제출</SubmitButton>
      </form>
    </Container>
  );
};

export default SignupForm;
