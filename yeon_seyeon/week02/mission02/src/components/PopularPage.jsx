import React from "react";
import { MOVIES } from "../mocks/movies";

const PopularPage = () => {
  const popularMovies = MOVIES.results.filter(
    (movie) => movie.popularity > 500
  ); // 인기 있는 영화 기준 (예: popularity > 500)

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>인기있는 영화</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {popularMovies.map((movie) => (
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

export default PopularPage;
