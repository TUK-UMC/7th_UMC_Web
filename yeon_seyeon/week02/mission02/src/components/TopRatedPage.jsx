import React from "react";
import { MOVIES } from "../mocks/movies";

const TopRatedPage = () => {
  const topRatedMovies = MOVIES.results.filter(
    (movie) => movie.vote_average >= 7.5
  ); // 높은 평가 기준 (예: vote_average >= 7.5)

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>높은 평가를 받은 영화</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {topRatedMovies.map((movie) => (
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

export default TopRatedPage;
