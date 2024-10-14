import axios from "axios";

const TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getNowPlayingMovies = async () => {
  try {
    const movies = await axios.get(
      `${BASE_URL}now_playing?language=ko-US&page=1}`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getPopularMovies = async () => {
  try {
    const movies = await axios.get(`${BASE_URL}popular?language=ko-US&page=1`, {
      headers: {
        Authorization: TOKEN,
      },
    });
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getTopRatedMovies = async () => {
  try {
    const movies = await axios.get(
      `${BASE_URL}top_rated?language=ko-US&page=1`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getUpComingMovies = async () => {
  try {
    const movies = await axios.get(
      `${BASE_URL}upcoming?language=ko-US&page=1`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};
