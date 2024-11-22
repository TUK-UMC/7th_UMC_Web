import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMovieDetails, fetchMovieCredits } from "../apis/movieAPI";

const Container = styled.div`
  padding: 20px;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const {
    data: movie,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useQuery(["movieDetails", movieId], () => fetchMovieDetails(movieId));

  const {
    data: credits,
    isLoading: isCreditsLoading,
    isError: isCreditsError,
  } = useQuery(["movieCredits", movieId], () => fetchMovieCredits(movieId));

  if (isMovieLoading || isCreditsLoading) {
    return <Container>Loading...</Container>;
  }

  if (isMovieError || isCreditsError) {
    return <Container>영화 정보를 불러오는 중 오류가 발생했습니다.</Container>;
  }

  return (
    <Container>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h2>출연진</h2>
      {credits.cast.slice(0, 10).map((actor) => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
        </div>
      ))}
    </Container>
  );
};

export default MovieDetailPage;
