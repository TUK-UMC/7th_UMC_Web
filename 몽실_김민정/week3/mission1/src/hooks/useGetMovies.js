import { useEffect, useState } from "react";

export const useGetMovies = (func) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await func();
      setMovies(movies);
    };
    fetchMovies();
  }, [func]);

  return movies;
};
