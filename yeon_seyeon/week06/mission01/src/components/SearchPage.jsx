// src/components/SearchPage.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "./MovieCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #ff007f;
  }
`;

const SearchButton = styled.button`
  padding: 12px 20px;
  margin-left: 10px;
  background-color: #ff007f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff66a3;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #aaa;
  margin-top: 20px;
`;

const Skeleton = styled.div`
  width: 200px;
  height: 300px;
  background-color: #333;
  border-radius: 5px;
  margin: 10px;
`;

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setNoResults(false);

    try {
      const response = await axios.get(`http://localhost:3000/movies/search`, {
        params: { query },
      });
      setMovies(response.data.results);
      if (response.data.results.length === 0) setNoResults(true);
    } catch (error) {
      console.error("검색 실패:", error);
      setNoResults(true);
    }

    setLoading(false);
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchInput
          type="text"
          placeholder="영화 제목을 입력해주세요..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </div>

      {loading && (
        <ResultsContainer>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </ResultsContainer>
      )}

      {!loading && noResults && (
        <Message>
          해당하는 검색어 "{query}"에 해당하는 데이터가 없습니다.
        </Message>
      )}

      {!loading && !noResults && movies.length > 0 && (
        <ResultsContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ResultsContainer>
      )}

      {!loading && movies.length === 0 && !noResults && (
        <Message>영화 제목을 입력해주세요...</Message>
      )}
    </Container>
  );
};

export default SearchPage;
