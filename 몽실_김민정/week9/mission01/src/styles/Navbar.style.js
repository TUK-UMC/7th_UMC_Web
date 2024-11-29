import styled from "styled-components";
import { Link } from "react-router";

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
`;

export const TextWrapper = styled.div`
  margin: auto;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  font-size: 35px;
  font-weight: 800;
  justify-content: space-between;
  align-items: center;
`;

export const ShoppingCart = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ShoppingCount = styled.div`
  position: absolute;
  border-radius: 10px;
  background-color: gray;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -20px;
  padding: 3px;
`;
