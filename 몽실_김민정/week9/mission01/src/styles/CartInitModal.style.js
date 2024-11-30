import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: inset;
  padding: 30px 40px;
  position: relative;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    width: 70px;
    font-size: 18px;
    background-color: white;
    border-radius: 5px;
    padding: 5px 8px;
    cursor: pointer;
  }

  & > .yes-button {
    border-color: blue;
    color: ${({ theme }) => theme.blue};
  }

  & > .no-button {
    border-color: red;
    color: red;
  }
`;
