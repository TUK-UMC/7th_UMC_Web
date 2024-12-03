// src/components/NowPlayingPage.jsx
import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import SkeletonCard from "./SkeletonCard";
import MovieCard from "./MovieCard";

const NowPlayingPage = () => {
  const { data, isLoading, isError } = useFetchMovies("now-playing");

  if (isLoading) {
    return (
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[...Array(10)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default NowPlayingPage;
