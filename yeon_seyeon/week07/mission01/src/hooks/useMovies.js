import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMovies = (category) => {
  return useQuery(["movies", category], async () => {
    const { data } = await axios.get(`/api/movies/${category}`);
    return data;
  });
};
