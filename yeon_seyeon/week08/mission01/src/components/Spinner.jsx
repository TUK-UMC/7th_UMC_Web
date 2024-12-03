// src/components/Spinner.jsx
import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SpinnerCircle = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: #ff007f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerCircle />
  </SpinnerContainer>
);

export default Spinner;
