import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../apis/movieAPI";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const TopRatedPage = () => {
  const { data, isLoading, isError } = useQuery(
    ["movies", "top-rated"],
    () => fetchMovies("/movie/top_rated"),
    { staleTime: 5 * 60 * 1000 }
  );

  if (isLoading) {
    return (
      <Container>
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index} height={300} width={200} />
        ))}
      </Container>
    );
  }

  if (isError) {
    return <Container>영화 정보를 불러오는 중 오류가 발생했습니다.</Container>;
  }

  return (
    <Container>
      {data.results.map((movie) => (
        <MovieCard
          key={movie.id}
          imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          releaseDate={movie.release_date}
        />
      ))}
    </Container>
  );
};

export default TopRatedPage;
