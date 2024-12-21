import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { tmdbAxiosInstance } from '../../apis/axios-instance';

const Container = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Info = styled.div`
  margin-bottom: 20px;
  font-size: 1em;
  color: #ccc;
`;

const Overview = styled.p`
  line-height: 1.5;
  font-size: 1.2em;
`;

const Poster = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  border-radius: 10px;
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
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>영화 정보를 불러오는 데 실패했습니다.</Container>;
  }

  return (
    <Container>
      {movie && (
        <>
          <Title>{movie.title}</Title>
          <Info>
            평점: {movie.vote_average} | 개봉일: {movie.release_date}
          </Info>
          <Overview>{movie.overview}</Overview>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </>
      )}
    </Container>
  );
}

export default MovieDetailPage;
