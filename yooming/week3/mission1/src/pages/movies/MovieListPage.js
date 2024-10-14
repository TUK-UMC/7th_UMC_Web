import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from '../../components/MovieCard';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

function MovieListPage({ apiEndpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  return (
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
  );
}

export default MovieListPage;
