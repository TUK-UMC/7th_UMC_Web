// src/components/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Sidebar 컴포넌트 가져오기
import ".."; // CSS 파일을 활용해 스타일 적용

const RootLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar /> {/* 사이드바 */}
      <div className="main-content">
        <Outlet /> {/* 페이지 내용 */}
      </div>
    </div>
  );
};

export default RootLayout;
