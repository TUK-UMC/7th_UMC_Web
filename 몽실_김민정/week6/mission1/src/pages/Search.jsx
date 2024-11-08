import { styled } from "styled-components";
import { useState } from "react";

import { debounce } from "../utils/debounce";
import { getMoviesByKeyword } from "../apis/movieAPI";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { Poster } from "../components/Poster";

export const Search = () => {
  const [movies, setMovies] = useState([]);

  const handleChangeInput = async (e) => {
    try {
      const response = await getMoviesByKeyword(e.target.value);
      setMovies(response.results);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder='검색어를 입력해주세요.'
          onChange={debounce((e) => handleChangeInput(e))}
        />
        <PrimaryButton size='s'>검색</PrimaryButton>
      </InputWrapper>
      <MoviesGridWrapper>
        {movies?.map((movie) => (
          <PosterWrapper key={movie.id}>
            <Poster movieData={movie} />
            <span>{movie.title}</span>
            <span>{movie.release_date}</span>
          </PosterWrapper>
        ))}
      </MoviesGridWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const MoviesGridWrapper = styled.div`
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
