import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: ${(props) => (props.disabled ? '#999' : '#ff3366')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#999' : '#ff0055')};
  }
`;

const ErrorMessage = styled.div`
  color: #ffcccb;
  font-size: 12px;
`;

const validationSchema = yup.object({
  name: yup.string().required('이름은 필수 항목입니다.'),
  email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일은 필수 항목입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(16, '비밀번호는 최대 16자이어야 합니다.')
    .required('비밀번호는 필수 항목입니다.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인은 필수 항목입니다.'),
});

function SignupPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('회원가입 성공:', data);
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="이름"
          {...register('name')}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Input
          type="email"
          placeholder="이메일"
          {...register('email')}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호"
          {...register('password')}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호 확인"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
        <Button type="submit" disabled={!isValid}>회원가입</Button>
      </Form>
    </Container>
  );
}

export default SignupPage;
