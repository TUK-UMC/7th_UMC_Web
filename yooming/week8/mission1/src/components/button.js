import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #87cefa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e90ff;
  }
`;

function Button({ children, onClick, type = 'button' }) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
