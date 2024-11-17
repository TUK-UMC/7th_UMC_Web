import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import { tmdbAxiosInstance } from '../../apis/axios-instance';
import Skeleton from 'react-loading-skeleton'; // 스켈레톤 UI 라이브러리

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
  const { data, isLoading, isError } = useQuery(['movies', apiEndpoint], () => fetchMovies(apiEndpoint), {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return (
      <Container>
        <Skeleton height={350} width={200} count={10} />
      </Container>
    );
  }

  if (isError) {
    return <Container>영화 정보를 불러오는 중 오류가 발생했습니다.</Container>;
  }

  return (
    <Container>
      <MovieGrid>
        {data && data.results.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
              releaseDate={movie.release_date}
            />
          </Link>
        ))}
      </MovieGrid>
    </Container>
  );
}

export default MovieListPage;
