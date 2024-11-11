import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../apis/axios-instance';
import MovieCard from '../components/MovieCard';
import debounce from 'lodash/debounce';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 300px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axiosInstance.get(`/search/movie`, {
        params: {
          query,
          language: 'ko-KR', // 언어 설정을 한국어로 추가
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearch = useCallback(debounce((query) => handleSearch(query), 500), []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <Container>
      <h2>검색 페이지</h2>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={handleChange}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching search results. Please try again.</p>}
      {!isLoading && !isError && movies.length === 0 && searchTerm && (
        <p>해당하는 검색어 "{searchTerm}" 에 해당하는 데이터가 없습니다.</p>
      )}
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
          />
        ))}
      </MovieGrid>
    </Container>
  );
}

export default Search;
