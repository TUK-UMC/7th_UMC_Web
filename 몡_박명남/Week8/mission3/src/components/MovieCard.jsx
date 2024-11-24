import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  margin: 10px;
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Poster
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <Title>{movie.title}</Title>
    </Card>
  );
};

export default MovieCard;
