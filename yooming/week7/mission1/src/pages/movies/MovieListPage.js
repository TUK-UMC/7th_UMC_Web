import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import MovieCard from '../../components/MovieCard';
import { tmdbAxiosInstance } from '../../apis/axios-instance';

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

const fetchMovies = async (apiEndpoint) => {
  const response = await tmdbAxiosInstance.get(`/movie/${apiEndpoint}`, {
    params: {
      language: 'ko-KR',
      page: 1,
    },
  });
  return response.data;
};

function MovieListPage({ apiEndpoint }) {
  const { data, isLoading, isError } = useQuery(['movies', apiEndpoint], () => fetchMovies(apiEndpoint));

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>Error fetching movies.</Container>;
  }

  return (
    <Container>
      <MovieGrid>
        {data.results.map((movie) => (
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
