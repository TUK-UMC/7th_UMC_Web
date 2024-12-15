import styled from "styled-components";

export const PaginationButton = ({
  handleClickNextButton,
  handleClickPreviousButton,
  page,
}) => {
  return (
    <Wrapper>
      <Button onClick={handleClickPreviousButton} disabled={page === 1}>
        이전
      </Button>
      {page} 페이지
      <Button onClick={handleClickNextButton}>다음</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.white : theme.colors.primary};
  border: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray_100 : theme.colors.white};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
