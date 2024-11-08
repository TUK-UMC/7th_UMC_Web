import React, { useEffect, useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("영화 목록 불러오기 실패:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="main-page">
      <h2>현재 상영중인 영화</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.posterUrl} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
