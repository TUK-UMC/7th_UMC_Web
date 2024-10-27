import React from 'react';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import styled from 'styled-components';

const MovieDetailContainer = styled.div`
  color: white;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #000;
  padding: 40px;
  margin-bottom: 40px;
`;

const PosterImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-right: 30px;
`;

const InfoContainer = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const CastContainer = styled.div`
  margin-top: 20px;
`;

const CastTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
`;

const CastCard = styled.div`
  text-align: center;
`;

const CastImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

function MovieDetailPage() {
  const { movieId } = useParams();
  const { data: movie, isLoading, isError } = useCustomFetch({
    url: `${process.env.REACT_APP_MOVIE_API_URL}/movie/${movieId}?append_to_response=credits&language=ko-KR`,
  });

  if (isLoading) {
    return <MovieDetailContainer>Loading...</MovieDetailContainer>;
  }

  if (isError) {
    return <MovieDetailContainer>Error loading movie details.</MovieDetailContainer>;
  }

  if (!movie) {
    return <MovieDetailContainer>No movie data available.</MovieDetailContainer>;
  }

  return (
    <MovieDetailContainer>
      <HeaderContainer>
        <PosterImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <InfoContainer>
          <Title>{movie.title}</Title>
          <p>평균 {movie.vote_average}</p>
          <p>{movie.release_date}</p>
          <p>{movie.runtime}분</p>
          <p><em>{movie.tagline}</em></p>
          <Overview>{movie.overview}</Overview>
        </InfoContainer>
      </HeaderContainer>

      <CastContainer>
        <CastTitle>감독/출연</CastTitle>
        <CastGrid>
          {movie.credits && movie.credits.cast && movie.credits.cast.length > 0
            ? movie.credits.cast.slice(0, 12).map((member) => (
                <CastCard key={member.id}>
                  <CastImage
                    src={
                      member.profile_path
                        ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                        : 'https://via.placeholder.com/100x100?text=No+Image'
                    }
                    alt={member.name}
                  />
                  <p>{member.name}</p>
                  <p>{member.character}</p>
                </CastCard>
              ))
            : <p>No cast information available.</p>}
        </CastGrid>
      </CastContainer>
    </MovieDetailContainer>
  );
}

export default MovieDetailPage;
