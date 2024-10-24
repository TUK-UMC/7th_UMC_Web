import axios from "axios";

const TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: TOKEN },
});

export const getNowPlayingMovies = async () => {
  try {
    const movies = await instance.get(`now_playing?language=ko-US&page=1}`);
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getPopularMovies = async () => {
  try {
    const movies = await instance.get(`popular?language=ko-US&page=1`);
    return movies.data.results;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const movies = await instance.get(`top_rated?language=ko-US&page=1`);
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getUpComingMovies = async () => {
  try {
    const movies = await instance.get(`upcoming?language=ko-US&page=1`);
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};
