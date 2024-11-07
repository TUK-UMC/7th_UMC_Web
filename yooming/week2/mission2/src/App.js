import React from 'react';
import { MOVIES } from './mocks/movies';
import './App.css';

const App = () => {
  return (
    <div className="container">
      {MOVIES.results.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default App;
