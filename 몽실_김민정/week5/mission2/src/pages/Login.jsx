import styled from "styled-components";
import { ERROR_MESSAGE } from "../constants/errorMessage";
import { useForm } from "../hooks/useForm";
import { validateLogin } from "../utils/validate";

export const Login = () => {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  return (
    <Container>
      <h1>로그인</h1>
      <Form>
        <InputWrapper>
          <Input
            type='email'
            placeholder={ERROR_MESSAGE.EMAIL.REQUIRED}
            error={login.errors.email && login.touched.email}
            {...login.getTextInputProps("email")}
          />
          {login.touched.email && (
            <ErrorMessage>{login.errors.email}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            placeholder={ERROR_MESSAGE.PASSWORD.REQUIRED}
            error={login.errors.password && login.touched.password}
            {...login.getTextInputProps("password")}
          />
          {login.touched.password && (
            <ErrorMessage>{login.errors.password}</ErrorMessage>
          )}
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

  border: ${({ error, theme }) =>
    error ? "2px solid red" : `1px solid ${theme.colors.gray_100}`};
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
