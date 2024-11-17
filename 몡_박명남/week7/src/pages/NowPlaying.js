import React from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import Skeleton from '../components/Skeleton';

const NowPlaying = () => {
  const { data, isLoading, isError, error } = useFetchMovies('now-playing');

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p>에러 발생: {error.message}</p>;
  }

  return (
    <div>
      <h1>지금 상영 중인 영화</h1>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlaying;
