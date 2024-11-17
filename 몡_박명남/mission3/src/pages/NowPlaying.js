import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchNowPlayingMovies = async (page) => {
  const response = await fetch(`/api/now-playing?page=${page}`);
  if (!response.ok) throw new Error('Failed to fetch now-playing movies');
  return response.json();
};

const NowPlaying = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError, error, isFetching, isPreviousData } = useQuery(
    ['now-playing', page],
    () => fetchNowPlayingMovies(page),
    { keepPreviousData: true }
  );

  return (
    <div>
      <h1>Now Playing Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}

      <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous
      </button>
      <button
        onClick={() => {
          if (!isPreviousData && data.hasMore) setPage((old) => old + 1);
        }}
        disabled={isPreviousData || !data?.hasMore}
      >
        Next
      </button>
      {isFetching && <p>Loading new data...</p>}
    </div>
  );
};

export default NowPlaying;
