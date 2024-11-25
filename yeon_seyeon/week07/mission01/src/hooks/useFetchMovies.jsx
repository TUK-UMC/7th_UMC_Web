// src/hooks/useFetchMovies.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchMovies = (category) => {
  return useQuery({
    queryKey: ["movies", category],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/movies/${category}`
      );
      return response.data.results;
    },
  });
};
