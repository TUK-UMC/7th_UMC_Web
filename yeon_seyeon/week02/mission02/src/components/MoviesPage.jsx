import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// MovieCard 스타일링
const MovieCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: #333;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
`;

const MoviesContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MoviesPage = () => {
  return (
    <div>
      <h1>카테고리</h1>
      <MoviesContainer>
        <Link to="/movies/now-playing">
          <MovieCard>현재 상영중인</MovieCard>
        </Link>
        <Link to="/movies/popular">
          <MovieCard>인기있는</MovieCard>
        </Link>
        <Link to="/movies/top-rated">
          <MovieCard>높은 평가를 받은</MovieCard>
        </Link>
        <Link to="/movies/up-coming">
          <MovieCard>개봉 예정중인</MovieCard>
        </Link>
      </MoviesContainer>
    </div>
  );
};

export default MoviesPage;
