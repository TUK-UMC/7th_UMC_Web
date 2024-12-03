import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// 스타일 컴포넌트 정의
const Container = styled.div`
  padding: 20px;
  color: white;
  background-color: #111;
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
`;

const LoadingText = styled.h2`
  text-align: center;
  color: #ff007f;
`;

const MovieTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const MovieInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const MoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const MovieDetails = styled.div`
  flex: 1;
`;

const MovieDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 10px;
`;

const DirectorAndCast = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const CastMember = styled.div`
  text-align: center;
  width: 100px;
`;

const CastImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const CastName = styled.p`
  font-size: 14px;
  color: #ddd;
`;

// MovieDetailPage 컴포넌트
const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 영화 정보 가져오기
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY&language=ko-KR`
        );
        setMovie(movieResponse.data);

        // 영화 출연진 가져오기
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=YOUR_API_KEY&language=ko-KR`
        );
        setCredits(creditsResponse.data.cast);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <LoadingText>Loading...</LoadingText>;
  }

  if (!movie) {
    return <LoadingText>영화 정보를 찾을 수 없습니다.</LoadingText>;
  }

  return (
    <Container>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfo>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDetails>
          <h3>평균 평점: {movie.vote_average}</h3>
          <h4>개봉일: {movie.release_date}</h4>
          <MovieDescription>{movie.overview}</MovieDescription>
        </MovieDetails>
      </MovieInfo>

      <h2>감독/출연</h2>
      <DirectorAndCast>
        {credits.slice(0, 12).map((cast) => (
          <CastMember key={cast.cast_id}>
            <CastImage
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            />
            <CastName>{cast.name}</CastName>
            <p>{cast.character}</p>
          </CastMember>
        ))}
      </DirectorAndCast>
    </Container>
  );
};

export default MovieDetailPage;
