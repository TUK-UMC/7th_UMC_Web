// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 로고 스타일링
const Logo = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: #c00000; /* 로고 색상 */
  text-decoration: none;
  &:hover {
    color: #ff66a3; /* hover 시 색상 변경 */
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 세로 중앙 정렬 */
  padding: 20px 20px;
  background-color: #333;
`;

// 로그인 버튼 스타일링
const LoginButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

// 회원가입 버튼 스타일링
const SignupButton = styled.button`
  background-color: #a00020;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff66a3;
  }
`;

// Navbar 컴포넌트
const Navbar = () => (
  <NavbarContainer>
    <Logo to="/">YONGCHA</Logo>
    <div>
      <Link to="/login">
        <LoginButton>로그인</LoginButton>
      </Link>
      <Link to="/signup">
        <SignupButton>회원가입</SignupButton>
      </Link>
    </div>
  </NavbarContainer>
);

export default Navbar;
