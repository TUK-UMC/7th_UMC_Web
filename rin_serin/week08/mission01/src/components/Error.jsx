import React from 'react';
import styled, { keyframes } from 'styled-components';

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 360px;
  gap: 8px;
  width: 100%;

  p{
    font-size: 16px;
    font-weight: 700;
    color: #212121;
    margin: 0;
  }
`

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
`;

const ErrorCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${shake} 0.5s ease-in-out;
  z-index: 10;

  &::before {
    content: '✕';
    color: white;
    font-size: 28px;
    font-weight: bold;
    padding: 0 0 4px 0;
  }
`;

const Error = () => {
  return <ErrorDiv>
      <ErrorCircle />
      <p>오류가 발생했습니다.</p>
    </ErrorDiv>
};

export default Error;
