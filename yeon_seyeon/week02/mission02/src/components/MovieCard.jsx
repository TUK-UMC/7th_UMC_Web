// src/components/MovieCard.jsx
import React from "react";
import styled from "styled-components";

// MovieCard 스타일링
const MovieCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

// MovieCard 컴포넌트
const MovieCard = ({ movie }) => (
  <MovieCardContainer>
    <MovieImage
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <Overlay>
      <h3>{movie.title}</h3>
    </Overlay>
  </MovieCardContainer>
);

export default MovieCard;
