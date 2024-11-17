import { useQuery } from '@tanstack/react-query';

const fetchMovies = async (category) => {
  const response = await fetch(`https://api.example.com/movies/${category}`);
  if (!response.ok) {
    throw new Error(`${category} 데이터를 가져오는 데 실패했습니다.`);
  }
  return response.json();
};


export const useFetchMovies = (category) => {
  return useQuery([`${category}-movies`], () => fetchMovies(category), {
    retry: 1,  
  });
};
