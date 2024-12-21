import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Slider = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 20px;
  gap: 10px;
`;

const MovieSlider = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Slider>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
