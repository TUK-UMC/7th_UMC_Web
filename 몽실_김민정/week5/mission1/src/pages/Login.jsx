import styled from "styled-components";

export const Login = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <Form>
        <Input placeholder='아이디를 입력해주세요' />
        <Input placeholder='비밀번호를 입력해주세요' />
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
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 15px;
  border-radius: 7px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 13px 15px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;
