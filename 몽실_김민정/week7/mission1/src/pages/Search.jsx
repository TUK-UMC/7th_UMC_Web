import { styled } from "styled-components";
import { useState } from "react";

import { debounce } from "../utils/debounce";
import { getMoviesByKeyword } from "../apis/movieAPI";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { Poster } from "../components/Poster";
import { useFetch } from "../hooks/useFetch";
import { SkeletonPoster } from "../components/SkeletonPoster";

export const Search = () => {
  const [keyword, setKeyword] = useState("");

  const { data, loading, error } = useFetch(
    () =>
      keyword.trim()
        ? getMoviesByKeyword(keyword)
        : Promise.resolve({ results: [] }),
    [keyword]
  );

  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
  };

  const movies = data?.results || [];

  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder='검색어를 입력해주세요.'
          onChange={debounce((e) => handleChangeInput(e))}
        />
        <PrimaryButton size='s'>검색</PrimaryButton>
      </InputWrapper>
      {loading ? (
        <MoviesGridWrapper>
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonPoster key={index} />
          ))}
        </MoviesGridWrapper>
      ) : keyword !== "" && movies.length === 0 ? (
        <NoResultText>
          <strong>{keyword}</strong> 에 해당하는 데이터가 존재하지 않습니다.
        </NoResultText>
      ) : (
        <MoviesGridWrapper>
          {movies?.map((movie) => (
            <PosterWrapper key={movie.id}>
              <Poster movieData={movie} />
              <span>{movie.title}</span>
              <span>{movie.release_date}</span>
            </PosterWrapper>
          ))}
        </MoviesGridWrapper>
      )}
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

const NoResultText = styled.p`
  text-align: center;
  font-size: 30px;

  & > strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
