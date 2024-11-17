import React from 'react';
import { useQuery } from '@tanstack/react-query';
const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`https://api.example.com/movies/${movieId}`);
  if (!response.ok) {
    throw new Error('영화 상세 정보를 가져오는 데 실패했습니다');
  }
  return response.json();
};

const MovieDetails = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(['movie-details', movieId], () => fetchMovieDetails(movieId));

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p>에러 발생: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      <p>개봉일: {data.release_date}</p>
    </div>
  );
};

export default MovieDetails;
