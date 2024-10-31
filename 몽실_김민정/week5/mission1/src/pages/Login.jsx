import { useForm } from "react-hook-form";
import { object, string } from "yup";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const userSchema = object().shape({
    email: string().email().required("이메일을 입력해주세요."),
    password: string().required("비밀번호를 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(userSchema),
  });

  const registers = {
    email: register("email"),
    password: register("password"),
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input placeholder='아이디를 입력해주세요' {...registers.email} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder='비밀번호를 입력해주세요'
            {...registers.password}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </InputWrapper>
        <Button $isSubmitting={isSubmitting} $isValid={isValid}>
          로그인
        </Button>
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
