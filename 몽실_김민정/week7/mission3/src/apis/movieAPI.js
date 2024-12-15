import axios from "axios";

const TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: TOKEN },
});

export const getNowPlayingMovies = async (page = 1) => {
  try {
    const movies = await instance.get(
      `movie/now_playing?language=ko-US&page=${page}}`
    );
    return movies.data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async (page = 1) => {
  console.log(page);
  try {
    const movies = await instance.get(
      `movie/popular?language=ko-US&page=${page}`
    );
    return movies.data.results;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const movies = await instance.get(
      `movie/top_rated?language=ko-US&page=${page}`
    );
    return movies.data.results;
  } catch (error) {
    throw error;
  }
};

export const getUpComingMovies = async (page = 1) => {
  try {
    const movies = await instance.get(
      `movie/upcoming?language=ko-US&page=${page}`
    );
    return movies.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = async (movieId) => {
  try {
    const movies = await instance.get(
      `movie/${movieId}?language=ko-US&page=1}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const movies = await instance.get(
      `movie/${movieId}/credits?language=ko-US&page=1}`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByKeyword = async (keyword) => {
  try {
    const movies = await instance.get(
      `/search/movie?query=${keyword}&include_adult=false&language=ko-US&page=1`
    );
    return movies.data;
  } catch (error) {
    throw error;
  }
};
