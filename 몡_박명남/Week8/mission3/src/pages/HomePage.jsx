import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdbApi";
import MovieSlider from "../components/MovieSlider";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Movie World</h1>
      <MovieSlider title="Popular Movies" movies={movies} />
    </div>
  );
};

export default HomePage;
