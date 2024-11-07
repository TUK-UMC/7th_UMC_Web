import { Layout } from "./Layout";
import { getPopularMovies } from "../../apis/movieAPI";

export const Popular = () => {
  return <Layout func={getPopularMovies} />;
};
