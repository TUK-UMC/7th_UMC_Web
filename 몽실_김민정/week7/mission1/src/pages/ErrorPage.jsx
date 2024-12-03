import { styled } from "styled-components";

export const ErrorPage = () => {
  return (
    <Container>
      <h1>ERROR</h1>
      페이지를 불러오는데 오류가 발생하였습니다.
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 55px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
