import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// MovieCard 스타일링
const MovieCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: auto; /* 자동 높이 설정으로 이미지 아래로 공간이 늘어나도록 */
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
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

const MovieTitle = styled.h3`
  font-size: 16px;
  color: white;
  margin: 10px 0 5px 0;
  text-align: center;
`;

const MovieReleaseDate = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0;
  text-align: center;
`;

// MovieCard 컴포넌트
const MovieCard = ({ movie }) => (
  <MovieCardContainer>
    <MovieImage
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <MovieTitle>{movie.title}</MovieTitle>
    <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>{" "}
    {/* 개봉 날짜 추가 */}
    <Overlay>
      <h3>{movie.title}</h3>
    </Overlay>
  </MovieCardContainer>
);

// PropTypes로 movie prop 검증
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
