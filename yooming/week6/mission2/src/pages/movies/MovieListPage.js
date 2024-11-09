import React, { useEffect, useState } from 'react';
import { tmdbAxiosInstance } from '../../apis/axios-instance';
import MovieCard from '../../components/MovieCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;

function MovieListPage({ apiEndpoint }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await tmdbAxiosInstance.get(apiEndpoint, {
          params: {
            language: 'ko-KR',
            page: 1,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [apiEndpoint]);

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching movies. Please try again.</p>}
      {!isLoading && !isError && movies.length === 0 && (
        <p>No movies available.</p>
      )}
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
          />
        ))}
      </MovieGrid>
    </Container>
  );
}

export default MovieListPage;
