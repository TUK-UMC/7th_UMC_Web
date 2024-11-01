import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignupForm.css';
import Input from './Input';

// 유효성 검사 스키마 정의
const schema = yup.object().shape({
  email: yup
    .string()
    .email('유효한 이메일 형식이어야 합니다.')
    .required('이메일을 반드시 입력해 주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(16, '비밀번호는 16자 이하여야 합니다.')
    .required('비밀번호를 입력해 주세요.'),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력해 주세요.'),
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="signup-form">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="이메일을 입력해 주세요!"
          register={register}
          name="email"
          error={errors.email}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요!"
          register={register}
          name="password"
          error={errors.password}
        />
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요!"
          register={register}
          name="passwordCheck"
          error={errors.passwordCheck}
        />
        <button type="submit" className="submit-button">제출</button>
      </form>
    </div>
  );
};

export default SignupForm;