import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import { tmdbAxiosInstance } from '../../apis/axios-instance';
import Spinner from '../../components/Spinner'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.disabled ? '#555' : '#ff3366')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#555' : '#ff0055')};
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: #fff;
`;

const fetchMovies = async (page, apiEndpoint) => {
  const response = await tmdbAxiosInstance.get(`/movie/${apiEndpoint}`, {
    params: {
      language: 'ko-KR',
      page: page,
    },
  });
  return response.data;
};

function MovieListPage({ apiEndpoint }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery(
    ['movies', apiEndpoint, currentPage],
    () => fetchMovies(currentPage, apiEndpoint),
    { keepPreviousData: true }
  );

  const handleNextPage = () => {
    if (data) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Spinner /> 
      ) : isError ? (
        <div>Error fetching movies.</div>
      ) : (
        <>
          <MovieGrid>
            {data.results.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard
                  imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  releaseDate={movie.release_date}
                />
              </Link>
            ))}
          </MovieGrid>
          <PaginationControls>
            <PaginationButton
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              이전
            </PaginationButton>
            <PageIndicator>
              {currentPage} 페이지
            </PageIndicator>
            <PaginationButton
              onClick={handleNextPage}
            >
              다음
            </PaginationButton>
          </PaginationControls>
        </>
      )}
    </Container>
  );
}

export default MovieListPage;
