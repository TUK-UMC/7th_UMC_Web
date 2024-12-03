// src/hooks/useInfiniteMovies.js
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useInfiniteMovies = (category) => {
  const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `http://localhost:3000/movies/${category}`,
      {
        params: { page: pageParam },
      }
    );
    return response.data;
  };

  return useInfiniteQuery({
    queryKey: ["movies", category],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
  });
};
