import "./App.css";
import React from "react";
import { MOVIES } from "./mocks/movies";
import { Poster } from "./Poster";

function App() {
  const movies = MOVIES.results;
  return (
    <div className='poster-wrapper'>
      {movies.map((movie) => (
        <Poster movieData={movie} key={movie.id} />
      ))}
      ;
    </div>
  );
}

export default App;
