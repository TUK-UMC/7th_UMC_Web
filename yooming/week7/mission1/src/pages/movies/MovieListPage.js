import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import { tmdbAxiosInstance } from '../../apis/axios-instance';
import Spinner from '../../components/Spinner';

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

const fetchMovies = async (pageParam = 1, apiEndpoint) => {
  const response = await tmdbAxiosInstance.get(`/movie/${apiEndpoint}`, {
    params: {
      language: 'ko-KR',
      page: pageParam,
    },
  });
  return { results: response.data.results, nextPage: pageParam + 1, totalPages: response.data.total_pages };
};

function MovieListPage({ apiEndpoint }) {
  const {
    data,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['movies', apiEndpoint],
    ({ pageParam = 1 }) => fetchMovies(pageParam, apiEndpoint),
    {
      getNextPageParam: (lastPage) =>
        lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
    }
  );

  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div>Error fetching movies.</div>
      ) : (
        <>
          <MovieGrid>
            {data.pages.map((page) =>
              page.results.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <MovieCard
                    imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                    releaseDate={movie.release_date}
                  />
                </Link>
              ))
            )}
          </MovieGrid>
          {isFetchingNextPage && <Spinner />}
          <div ref={observerRef} />
        </>
      )}
    </Container>
  );
}

export default MovieListPage;
