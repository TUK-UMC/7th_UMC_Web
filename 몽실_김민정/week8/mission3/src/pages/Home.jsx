import { useState } from "react";
import styled from "styled-components";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";
import { PaginationButton } from "../components/PaginationButton";
import { ErrorPage } from "./ErrorPage";
import { useQuery } from "@tanstack/react-query";
import { SkeletonPosterGrid } from "../components/SkeletonPosterGrid";

function Home() {
  const [page, setPage] = useState(1);

  const handleClickNextButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickPreviousButton = () => {
    setPage((prev) => prev - 1);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["homePageMovies", page],
    queryFn: () => getPopularMovies(page),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <SkeletonPosterGrid />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Container>
      <PosterWrapper>
        {data?.map((movie) => (
          <Poster movieData={movie} key={movie.id} />
        ))}
      </PosterWrapper>
      {/* <PaginationButton
        handleClickNextButton={handleClickNextButton}
        handleClickPreviousButton={handleClickPreviousButton}
        page={page}
      /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PosterWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  padding: 15px 20px;
`;

export default Home;
