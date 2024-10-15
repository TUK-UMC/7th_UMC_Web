// src/pages/MoviesPage.jsx
import React from "react";
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
        <MovieCard>현재 상영중인</MovieCard>
        <MovieCard>인기있는</MovieCard>
        <MovieCard>높은 평가를 받은</MovieCard>
        <MovieCard>개봉 예정중인</MovieCard>
      </MoviesContainer>
    </div>
  );
};

export default MoviesPage;
