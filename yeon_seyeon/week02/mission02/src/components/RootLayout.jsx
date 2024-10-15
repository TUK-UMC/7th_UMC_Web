// src/components/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #000;
  color: white;
`;

const RootLayout = () => {
  return (
    <div className="LayoutContainer">
      <Sidebar /> {/* 사이드바 */}
      <div className="MainContent">
        <Outlet /> {/* 페이지 내용 */}
      </div>
    </div>
  );
};

export default RootLayout;
