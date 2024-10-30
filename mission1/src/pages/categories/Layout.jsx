import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Poster } from "../../components/Poster";

export const Layout = ({ func }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await func();
      setMovies(movieData); // 상태에 영화 데이터를 저장
    };

    fetchMovies();
  }, [func]);
  return (
    <Container>
      {movies?.map((movie) => (
        <PosterWrapper key={movie.id}>
          <Poster movieData={movie} />
          <span>{movie.title}</span>
          <span>{movie.release_date}</span>
        </PosterWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px 10px;
  padding: 15px 20px;
`;

const PosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & :nth-child(2) {
    margin: 3px 0px;
  }

  & :nth-child(3) {
    font-size: 10px;
  }
`;
