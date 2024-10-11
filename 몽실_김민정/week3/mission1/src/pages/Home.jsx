import React from "react";
import { MOVIES } from "../mocks/movies";
import styled from "styled-components";
import { Poster } from "../components/Poster";

function Home() {
  const movies = MOVIES.results;
  return (
    <PosterWrapper>
      {movies.map((movie) => (
        <Poster movieData={movie} key={movie.id} />
      ))}
      ;
    </PosterWrapper>
  );
}

const PosterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 15px 20px;
`;

export default Home;
