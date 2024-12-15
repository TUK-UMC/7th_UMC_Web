import { useState } from "react";
import { styled } from "styled-components";
import { Poster } from "../../components/Poster";
import { useQuery } from "@tanstack/react-query";
import { SkeletonPosterGrid } from "../../components/SkeletonPosterGrid";
import { PaginationButton } from "../../components/PaginationButton";
import { movieDataType } from "src/types/movieTypes";

interface propsType {
  func: (page?: number) => Promise<{ results: movieDataType[] }>;
  queryKey: string;
}

export const Layout = ({ func, queryKey }: propsType) => {
  const [page, setPage] = useState(1);

  const handleClickNextButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickPreviousButton = () => {
    setPage((prev) => prev - 1);
  };

  const { isLoading, data: movies } = useQuery({
    queryKey: [queryKey, page],
    queryFn: () => func(page),
  });

  if (isLoading) {
    return <SkeletonPosterGrid />;
  }

  return (
    <Container>
      <GridContainer>
        {movies?.results?.map((movie: movieDataType) => (
          <PosterWrapper key={movie.id}>
            <Poster movieData={movie} />
            <span>{movie.title}</span>
            <span>{movie.release_date}</span>
          </PosterWrapper>
        ))}
      </GridContainer>
      <PaginationButton
        handleClickNextButton={handleClickNextButton}
        handleClickPreviousButton={handleClickPreviousButton}
        page={page}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px 25px;
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
