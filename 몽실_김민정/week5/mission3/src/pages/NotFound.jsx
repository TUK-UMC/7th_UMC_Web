import { styled } from "styled-components";

export const NotFound = () => {
  return (
    <Container>
      <h1>NotFound</h1>
      페이지를 찾을 수 없습니다. 경로를 다시 확인해주세요.
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
