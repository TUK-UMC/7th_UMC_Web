import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getPopularMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);
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
