import { styled } from "styled-components";
import { object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/Input";
import { ERROR_MESSAGE } from "../constants/errorMessage";
import { postRegister } from "../apis/authAPI";
import { PrimaryButton } from "../components/PrimaryButton";

export const Signup = () => {
  const navigation = useNavigate();

  const userSchema = object().shape({
    email: string()
      .email(ERROR_MESSAGE.EMAIL.INVALID)
      .required(ERROR_MESSAGE.EMAIL.REQUIRED),
    password: string()
      .required(ERROR_MESSAGE.PASSWORD.REQUIRED)
      .min(8, ERROR_MESSAGE.PASSWORD.LENGTH)
      .max(16, ERROR_MESSAGE.PASSWORD.LENGTH),
    passwordCheck: string()
      .required(ERROR_MESSAGE.PASSWORD_CHECK.REQUIRED)
      .oneOf([ref("password")], ERROR_MESSAGE.PASSWORD_CHECK.INVALID),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });

  const registers = {
    email: register("email"),
    password: register("password"),
    passwordCheck: register("passwordCheck"),
  };

  const onSubmit = async (data) => {
    try {
      await postRegister({
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck,
      });
      navigation("/login");
    } catch (error) {
      const errorMessage = error?.response?.data.message;
      alert(errorMessage);
    }
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='EMAIL'
          errorMessage={errors.email?.message}
          {...registers.email}
        />
        <Input
          type='PASSWORD'
          errorMessage={errors.password?.message}
          {...registers.password}
        />
        <Input
          type='PASSWORD_CHECK'
          errorMessage={errors.passwordCheck?.message}
          {...registers.passwordCheck}
        />
        <PrimaryButton
          $isSubmitting={isSubmitting}
          $isValid={isValid}
          disabled={!isValid}
        >
          제출
        </PrimaryButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  & > h1 {
    font-size: 34px;
  }
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
