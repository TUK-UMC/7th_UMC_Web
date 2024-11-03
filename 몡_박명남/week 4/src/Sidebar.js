import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineStar } from 'react-icons/ai';
import { BiMovie } from 'react-icons/bi';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/movies/now-playing">
        <AiOutlineSearch /> 현재 상영중
      </Link>
      <Link to="/movies/popular">
        <AiOutlineStar /> 인기 있는
      </Link>
      <Link to="/movies/top-rated">
        <BiMovie /> 높은 평가
      </Link>
      <Link to="/movies/up-coming">
        <BiMovie /> 개봉 예정
      </Link>
    </div>
  );
}

export default Sidebar;
