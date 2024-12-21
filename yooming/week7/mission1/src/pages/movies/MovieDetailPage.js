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

const MovieTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const MoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const MovieInfo = styled.div`
  max-width: 600px;
`;

const Overview = styled.p`
  margin-top: 20px;
  line-height: 1.5;
`;

const CrewInfo = styled.div`
  margin-top: 20px;
`;

const CastList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CastItem = styled.li`
  width: 120px;
  text-align: center;
`;

const CastImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

function MovieDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const [movieResponse, creditsResponse] = await Promise.all([
          tmdbAxiosInstance.get(`/movie/${movieId}`, {
            params: {
              language: 'ko-KR',
            },
          }),
          tmdbAxiosInstance.get(`/movie/${movieId}/credits`, {
            params: {
              language: 'ko-KR',
            },
          }),
        ]);

        setMovie(movieResponse.data);
        setCrew(creditsResponse.data.crew.filter((member) => member.job === 'Director'));
        setCast(creditsResponse.data.cast.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>영화 정보를 불러오는 중 오류가 발생했습니다.</Container>;
  }

  return (
    <Container>
      {movie && (
        <>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetails>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieInfo>
              <h3>개봉일: {movie.release_date}</h3>
              <h3>평점: {movie.vote_average}</h3>
              <Overview>{movie.overview}</Overview>
              {crew.length > 0 && (
                <CrewInfo>
                  <h3>감독: {crew.map((member) => member.name).join(', ')}</h3>
                </CrewInfo>
              )}
            </MovieInfo>
          </MovieDetails>
          <h2>출연진</h2>
          <CastList>
            {cast.map((actor) => (
              <CastItem key={actor.id}>
                <CastImage
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p>({actor.character})</p>
              </CastItem>
            ))}
          </CastList>
        </>
      )}
    </Container>
  );
}

export default MovieDetailPage;
