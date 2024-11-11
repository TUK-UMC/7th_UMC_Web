import styled from "styled-components";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ERROR_MESSAGE } from "../constants/errorMessage";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PrimaryButton } from "../components/PrimaryButton";

export const Login = () => {
  const navigation = useNavigate();
  const { login, userData } = useContext(AuthContext);

  if (userData) {
    navigation("/");
  }

  const userSchema = object().shape({
    email: string()
      .email(ERROR_MESSAGE.EMAIL.INVALID)
      .required(ERROR_MESSAGE.EMAIL.REQUIRED),
    password: string()
      .required(ERROR_MESSAGE.PASSWORD.REQUIRED)
      .min(8, ERROR_MESSAGE.PASSWORD.LENGTH)
      .max(16, ERROR_MESSAGE.PASSWORD.LENGTH),
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
  };

  const onSubmit = async (data) => {
    try {
      login({ email: data.email, password: data.password });
      navigation("/", { replace: true });
    } catch (error) {
      const errorMessage = error?.response?.data.message;
      alert(errorMessage);
    }
  };

  return (
    <Container>
      <h1>로그인</h1>
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
        <PrimaryButton
          $isSubmitting={isSubmitting}
          $isValid={isValid}
          disabled={!isValid}
        >
          로그인
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
