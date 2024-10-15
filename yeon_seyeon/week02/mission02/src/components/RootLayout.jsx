import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaFilm } from "react-icons/fa";
import Navbar from "./Navbar"; // Navbar 임포트

// 전체 레이아웃 스타일
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면을 채우도록 설정 */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%; /* 부모 높이를 기준으로 전체 높이 설정 */
`;

const Sidebar = styled.div`
  width: 230px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

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

const MainContent = styled.div`
  flex-grow: 1;
  background-color: black;
  color: white;
  padding: 20px;
  overflow-y: auto; /* 세로 스크롤 활성화 */
  overflow-x: hidden; /* 가로로 늘어나는 것을 방지 */
  height: 100%; /* 전체 높이를 차지하도록 */
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
`;

const RootLayout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
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
      </ContentContainer>
    </LayoutContainer>
  );
};

export default RootLayout;
