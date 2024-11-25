// src/pages/UpcomingPage.jsx
import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import SkeletonCard from "../components/SkeletonCard";

const UpcomingPage = () => {
  const { data, isLoading, isError } = useFetchMovies("upcoming");

  if (isLoading) {
    return (
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ color: "red" }}>
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>개봉 예정</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.results.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
