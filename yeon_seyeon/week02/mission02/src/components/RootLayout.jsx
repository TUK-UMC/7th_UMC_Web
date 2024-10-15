import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaFilm } from "react-icons/fa"; // react-icons에서 아이콘 임포트

// 전체 레이아웃 스타일
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 사이드바 스타일
const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

// 각 링크 스타일링
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    color: #ff66a3;
  }
`;

// 메인 컨텐츠 (Outlet이 들어가는 영역)
const MainContent = styled.div`
  flex-grow: 1;
  background-color: black;
  color: white;
  padding: 20px;
`;

// RootLayout 컴포넌트
const RootLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar>
        <NavLink to="/search">
          <FaSearch /> 찾기
        </NavLink>
        <NavLink to="/movies">
          <FaFilm /> 영화
        </NavLink>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default RootLayout;
