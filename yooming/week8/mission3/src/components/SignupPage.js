import React from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { axiosInstance } from '../apis/axios-instance';

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

const validationSchema = yup.object().shape({
  email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일은 필수 항목입니다.'),
  password: yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.').required('비밀번호는 필수 항목입니다.'),
});

function SignupPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const signupMutation = useMutation(
    async (userData) => {
      const response = await axiosInstance.post('/signup', userData);
      return response.data;
    },
    {
      onSuccess: (data) => {
        alert('회원가입 성공!');
        console.log('회원가입 성공:', data);
      },
      onError: (error) => {
        alert('회원가입 실패');
        console.error('회원가입 에러:', error);
      },
    }
  );

  const onSubmit = (data) => {
    signupMutation.mutate(data);
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="이메일" {...register('email')} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Input type="password" placeholder="비밀번호" {...register('password')} />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <Button type="submit" disabled={!isValid || signupMutation.isLoading}>
          {signupMutation.isLoading ? 'Loading...' : '회원가입'}
        </Button>
      </Form>
    </Container>
  );
}

export default SignupPage;
