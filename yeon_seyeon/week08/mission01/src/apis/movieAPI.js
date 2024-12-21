import axios from "axios";

// Vite 환경 변수를 사용
const BASE_URL = import.meta.env.VITE_MOVIE_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

// Axios 인스턴스 생성
const tmdbAxiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// 영화 목록 가져오기
export const fetchMovies = async (endpoint) => {
  const response = await tmdbAxiosInstance.get(endpoint);
  return response.data;
};

// 영화 상세 정보 가져오기
export const fetchMovieDetails = async (movieId) => {
  const response = await tmdbAxiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

// 영화 출연진 정보 가져오기
export const fetchMovieCredits = async (movieId) => {
  const response = await tmdbAxiosInstance.get(`/movie/${movieId}/credits`);
  return response.data;
};
