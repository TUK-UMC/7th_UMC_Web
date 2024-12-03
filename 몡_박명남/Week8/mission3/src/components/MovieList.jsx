import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieList = ({ movies }) => {
  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieList;
