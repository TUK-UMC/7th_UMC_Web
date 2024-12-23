import { Layout } from "./Layout";
import { getTopRatedMovies } from "../../apis/movieAPI";

export const TopRated = () => {
  return <Layout func={getTopRatedMovies} queryKey='topRated' />;
};
