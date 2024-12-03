import React from "react";
import { useMovies } from "../hooks/useMovies";

const TopRatedPage = () => {
  const { data, isLoading, isError } = useMovies("top_rated");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movies</p>;

  const topRatedMovies = data.results;

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
