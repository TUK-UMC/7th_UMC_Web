import axios from 'axios';

export const tmdbAxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  },
});


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbAxiosInstance.get('/movie/popular', {
      params: {
        language: 'ko-KR',
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
