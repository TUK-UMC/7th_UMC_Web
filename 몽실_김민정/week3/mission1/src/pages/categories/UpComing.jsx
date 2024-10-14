import React from "react";
import { Layout } from "./Layout";
import { getUpComingMovies } from "../../apis/movieAPI";

export const UpComing = () => {
  return <Layout func={getUpComingMovies} />;
};
