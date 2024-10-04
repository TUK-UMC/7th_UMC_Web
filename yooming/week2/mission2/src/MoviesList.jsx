import React, { useEffect, useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([]); // 상태를 정의
  const [loading, setLoading] = useState(true); // 로딩 상태 정의
  const [error, setError] = useState(null); // 에러 상태 정의

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('YOUR_API_URL'); // API URL을 입력하세요
        if (!response.ok) {
          throw new Error('Network response was not ok'); // 응답이 정상적이지 않으면 에러 발생
        }
        const data = await response.json(); // JSON 형태로 변환
        setMovies(data.results); // 결과를 상태에 저장
      } catch (error) {
        setError(error); // 에러 발생 시 에러 상태에 저장
      } finally {
        setLoading(false); // 로딩이 끝났음을 표시
      }
    };

    fetchMovies(); // 함수 호출
  }, []); // 빈 배열을 넣어 최초 렌더링 시에만 호출하도록 설정

  if (loading) return <p>Loading...</p>; // 로딩 중일 때
  if (error) return <p>Error: {error.message}</p>; // 에러 발생 시

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average} / 10</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
