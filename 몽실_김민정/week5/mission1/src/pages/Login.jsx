import styled from "styled-components";
import { ERROR_MESSAGE } from "../constants/errorMessage";
import { useState } from "react";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  return (
    <Container>
      <h1>로그인</h1>
      <Form>
        <InputWrapper>
          <Input
            placeholder={ERROR_MESSAGE.EMAIL.REQUIRED}
            onBlur={() => handleBlur("email")}
            onChange={(e) => handleChangeInput("email", e.target.value)}
          />
          <ErrorMessage></ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder={ERROR_MESSAGE.PASSWORD.REQUIRED}
            onBlur={() => handleBlur("password")}
            onChange={(e) => handleChangeInput("password", e.target.value)}
          />
          <ErrorMessage></ErrorMessage>
        </InputWrapper>
        <Button>로그인</Button>
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

const InputWrapper = styled.div`
  height: 50px;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 15px;
  border-radius: 7px;
  border: none;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 7px 2px;
`;

const Button = styled.button`
  width: 100%;
  padding: 13px 15px;
  border-radius: 7px;
  border: none;
  background-color: ${({ theme, $isSubmitting, $isValid }) =>
    $isSubmitting || !$isValid ? theme.colors.gray_100 : theme.colors.primary};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $isValid }) =>
      $isValid && theme.colors.primary_100};
  }
`;
