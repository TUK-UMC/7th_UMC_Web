import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { tmdbAxiosInstance } from '../../apis/axios-instance';

const Container = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

const fetchMovieDetails = async (movieId) => {
  const response = await tmdbAxiosInstance.get(`/movie/${movieId}`, {
    params: {
      language: 'ko-KR',
    },
  });
  return response.data;
};

function MovieDetailPage() {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useQuery(['movieDetails', movieId], () => fetchMovieDetails(movieId));

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>Error fetching movie details.</Container>;
  }

  return (
    <Container>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      {/* 영화 상세 정보 추가 */}
    </Container>
  );
}

export default MovieDetailPage;
