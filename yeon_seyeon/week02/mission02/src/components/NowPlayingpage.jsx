import React from "react";
import { MOVIES } from "../mocks/movies";

const NowPlayingPage = () => {
  const nowPlayingMovies = MOVIES.results.filter((movie) => {
    // 현재 상영중인 영화로 간주할 기준을 설정 (예: 날짜로 필터링)
    const today = new Date();
    const releaseDate = new Date(movie.release_date);
    return releaseDate <= today; // 현재 날짜 이전에 개봉한 영화
  });

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>현재 상영중인 영화</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {nowPlayingMovies.map((movie) => (
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
