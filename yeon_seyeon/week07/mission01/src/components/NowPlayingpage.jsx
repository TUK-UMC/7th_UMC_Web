import React from "react";
import { useNowPlayingQuery } from "../hooks/useNowPlayingQuery"; // useNowPlayingQuery 커스텀 훅
import Skeleton from "../components/Skeleton"; // Skeleton 컴포넌트
import MovieCard from "../components/MovieCard"; // MovieCard 컴포넌트

const NowPlayingPage = () => {
  const { data, isLoading, error } = useNowPlayingQuery();

  if (isLoading) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>현재 상영중인 영화</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {[...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              style={{ width: "200px", height: "300px", borderRadius: "10px" }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p style={{ color: "red" }}>오류가 발생했습니다. 다시 시도해주세요.</p>
    );
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>현재 상영중인 영화</h1>
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

export default NowPlayingPage;
