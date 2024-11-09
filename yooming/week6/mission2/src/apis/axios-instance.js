import axios from 'axios';

// 로컬 백엔드 서버용 axios 인스턴스
export const localAxiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // 실제 백엔드 서버 주소로 대체
  headers: {
    'Content-Type': 'application/json',
  },
});

// TMDB API용 axios 인스턴스
export const tmdbAxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // TMDB API 기본 URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`, // Bearer 토큰 추가
  },
});

// 인기 영화 데이터 요청 예시 (TMDB)
export const fetchPopularMovies = async () => {
  try {
    console.log("Bearer Token:", process.env.REACT_APP_TMDB_TOKEN);
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
