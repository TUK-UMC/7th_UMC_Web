import styled from "styled-components";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";
import { useGetMovies } from "../hooks/useGetMovies";

function Home() {
  const movies = useGetMovies(getPopularMovies);
  return (
    <PosterWrapper>
      {movies?.map((movie) => (
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
