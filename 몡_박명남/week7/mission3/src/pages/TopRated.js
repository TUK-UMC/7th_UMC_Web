import React from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import Skeleton from '../components/Skeleton';

const TopRated = () => {
  const { data, isLoading, isError, error } = useFetchMovies('top-rated');

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p>에러발생: {error.message}</p>;
  }

  return (
    <div>
      <h1>최고 평점 영화</h1>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopRated;
