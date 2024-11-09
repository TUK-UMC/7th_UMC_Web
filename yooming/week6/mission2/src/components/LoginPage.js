import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  email: yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일은 필수 항목입니다.'),
  password: yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.').required('비밀번호는 필수 항목입니다.'),
});

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: data.email,
        password: data.password,
      });
      console.log('로그인 성공:', response.data);

      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      onLogin(response.data.accessToken, data.email);
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error('로그인 실패:', error.response.data);
      } else if (error.request) {
        console.error('서버에 도달하지 못했습니다:', error.request);
      } else {
        console.error('요청 설정 중 오류:', error.message);
      }
    }
  };

  return (
    <Container>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" disabled={!isValid}>로그인</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
