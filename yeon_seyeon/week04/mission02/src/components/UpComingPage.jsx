import React from "react";
import { MOVIES } from "../mocks/movies";

const UpComingPage = () => {
  const upComingMovies = MOVIES.results.filter((movie) => {
    const today = new Date();
    const releaseDate = new Date(movie.release_date);
    return releaseDate > today; // 개봉 예정 영화는 현재 날짜 이후 개봉한 영화
  });

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>개봉 예정중인 영화</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {upComingMovies.map((movie) => (
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

export default UpComingPage;
