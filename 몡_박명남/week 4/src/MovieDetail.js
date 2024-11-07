import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './MovieDetail.css';

function MovieDetail() {
  const { movieId } = useParams();

  // 영화 상세 정보와 로딩 상태
  const { data: movie, loading: movieLoading, error: movieError } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  );

  // 출연진 정보와 로딩 상태
  const { data: credits, loading: creditsLoading, error: creditsError } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  );

  if (movieLoading || creditsLoading) return <div>Loading...</div>;
  if (movieError || creditsError) return <div>데이터를 가져오는 중 오류가 발생했습니다.</div>;

  // 감독 및 출연진 정보 추출
  const director = credits.crew.find(person => person.job === 'Director');
  const cast = credits.cast.slice(0, 5);

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-detail-poster"
      />
      <div className="movie-detail-info">
        <h2>{movie.title}</h2>
        <p><strong>개봉일:</strong> {movie.release_date}</p>
        <p><strong>평점:</strong> {movie.vote_average} / 10</p>
        <p><strong>줄거리:</strong> {movie.overview}</p>

        {director && (
          <p><strong>감독:</strong> {director.name}</p>
        )}

        <div className="movie-cast">
          <h3>출연진</h3>
          <ul>
            {cast.map(actor => (
              <li key={actor.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className="actor-profile"
                />
                <p>{actor.name} - <span className="character">{actor.character}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
