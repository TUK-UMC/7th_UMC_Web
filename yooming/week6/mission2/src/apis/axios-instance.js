import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API_URL, // TMDB API의 baseURL (예: 'https://api.themoviedb.org/3')
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`, // TMDB API의 인증 토큰
  },
});

export { axiosInstance };
