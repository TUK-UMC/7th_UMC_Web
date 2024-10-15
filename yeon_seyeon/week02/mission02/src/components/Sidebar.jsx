// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilm } from "react-icons/fa"; // 아이콘 가져오기
import "./Sidebar.css"; // CSS 파일로 스타일 정의

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/search" className="sidebar-link">
        <FaSearch /> 찾기
      </Link>
      <Link to="/movies" className="sidebar-link">
        <FaFilm /> 영화
      </Link>
    </div>
  );
};

export default Sidebar;
