import styled from 'styled-components';

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }

  &::placeholder {
    color: #bbb;
  }
`;

function Input({ value, onChange, placeholder }) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
