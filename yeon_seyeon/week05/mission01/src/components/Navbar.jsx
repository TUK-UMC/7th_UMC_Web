import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 로고 스타일링
const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #ff007f; /* 로고 색상 */
  text-decoration: none;
  &:hover {
    color: #ff66a3; /* hover 시 색상 변경 */
  }
`;

// 네비게이션 바 전체 레이아웃
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between; /* 좌우 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 10px 20px;
  background-color: #333;
`;

// 로그인/회원가입 버튼들을 담는 컨테이너
const NavLinks = styled.div`
  display: flex;
  gap: 15px; /* 버튼 사이의 간격 */
  margin-left: auto; /* 버튼들을 오른쪽 끝으로 밀기 */
`;

// 로그인 버튼 스타일링
const LoginButton = styled(Link)`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  text-decoration: none;
  &:hover {
    background-color: #555;
  }
`;

// 회원가입 버튼 스타일링
const SignupButton = styled(Link)`
  background-color: #ff007f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  text-decoration: none;
  &:hover {
    background-color: #ff66a3;
  }
`;

// Navbar 컴포넌트
const Navbar = () => (
  <NavbarContainer>
    <Logo to="/">YONGCHA</Logo> {/* 로고는 왼쪽에 위치 */}
    <NavLinks>
      <LoginButton to="/login">로그인</LoginButton>
      <SignupButton to="/signup">회원가입</SignupButton>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
