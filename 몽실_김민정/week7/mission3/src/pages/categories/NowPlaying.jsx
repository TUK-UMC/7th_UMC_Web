import { getNowPlayingMovies } from "../../apis/movieAPI";
import { Layout } from "./Layout";

export const NowPlaying = () => {
  return <Layout func={getNowPlayingMovies} queryKey='nowPlaying' />;
};
