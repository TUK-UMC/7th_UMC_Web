import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NowPlayingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
      );
      setMovies(response.data.results);
    };
    fetchNowPlayingMovies();
  }, []);

  return (
    <div className="movies-page">
      <h2>현재 상영 중인 영화</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NowPlayingMovies;
