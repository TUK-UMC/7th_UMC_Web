import React, { useState, useEffect } from "react";
import { fetchPopularMovies, searchMovies } from "./api/tmdbApi";
import GlobalStyles from "./styles/GlobalStyles";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      const data = await fetchPopularMovies();
      setMovies(data);
    } else {
      const data = await searchMovies(query);
      setMovies(data);
    }
  };

  return (
    <>
      <GlobalStyles />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
};

export default App;
