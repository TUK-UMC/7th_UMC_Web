import axios from "axios";
import { movieDataType } from "src/types/movieTypes";

const TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: TOKEN },
});

Promise<{
  page: number;
  total_pages: number;
  results: any[];
}>;

export const getNowPlayingMovies = async (
  page = 1
): Promise<{ results: movieDataType[]; page: number; total_pages: number }> => {
  try {
    const movies = await instance.get(
      `movie/now_playing?language=ko-US&page=${page}}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async (
  page: number
): Promise<{
  page: number;
  total_pages: number;
  results: any[];
}> => {
  const response = await fetch(`/movies?page=${page}`);
  return response.json();
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const movies = await instance.get(
      `movie/top_rated?language=ko-US&page=${page}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getUpComingMovies = async (page = 1) => {
  try {
    const movies = await instance.get(
      `movie/upcoming?language=ko-US&page=${page}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = async (movieId: string) => {
  try {
    const movies = await instance.get(
      `movie/${movieId}?language=ko-US&page=1}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (movieId: string) => {
  try {
    const movies = await instance.get(
      `movie/${movieId}/credits?language=ko-US&page=1}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByKeyword = async (keyword: string) => {
  try {
    const movies = await instance.get(
      `/search/movie?query=${keyword}&include_adult=false&language=ko-US&page=1`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};
