import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../components/MovieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
import { useNavigate } from 'react-router-dom';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

function MovieListPage({ apiEndpoint }) {
  const { data: movies, isLoading, isError } = useCustomFetch({ url: apiEndpoint });
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies.</div>;
  }

  if (!movies || !movies.results) {
    return <div>No movies available.</div>;
  }

  return (
    <MovieGrid>
  {movies.results.map((movie) => (
    <MovieCard
      key={movie.id}
      imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      title={movie.title}
      releaseDate={movie.release_date}
      onClick={() => handleMovieClick(movie.id)}
    />
  ))}
</MovieGrid>

  );
}


export default MovieListPage;