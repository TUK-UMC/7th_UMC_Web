// src/pages/MoviesPage.jsx
import React from "react";

const MoviesPage = () => {
  return (
    <div>
      <h1>카테고리</h1>
      <div className="movie-categories">
        <div>현재 상영중인</div>
        <div>인기있는</div>
        <div>높은 평가를 받은</div>
        <div>개봉 예정중인</div>
      </div>
    </div>
  );
};

export default MoviesPage;
