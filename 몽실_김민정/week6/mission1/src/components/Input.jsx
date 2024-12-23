import styled from "styled-components";
import { PLACEHOLDER } from "../constants/placeholder";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({ type = "text", errorMessage, ...rest }, ref) => {
    return (
      <InputWrapper>
        <StyledInput
          ref={ref}
          type={type === "PASSWORD_CHECK" ? "password" : type}
          placeholder={PLACEHOLDER[type]}
          {...rest}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputWrapper>
    );
  }
);

const InputWrapper = styled.div`
  height: 50px;
  width: 100%;
`;

const StyledInput = styled.input`
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
