import styled from "styled-components";
import { getPopularMovies } from "../apis/movieAPI";
import { ErrorPage } from "./ErrorPage";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SkeletonPosterGrid } from "../components/SkeletonPosterGrid";
import { Poster } from "../components/Poster";

function Home() {
  const { data, error, isLoading } = useInfiniteQuery({
    queryKey: ["homePageMovies"],
    queryFn: ({ pageParam }) => getPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return !lastPage?.data ? undefined : nextPage;
    },
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
        {data?.pages[0].map((movie) => (
          <Poster movieData={movie} key={movie.id} />
        ))}
      </PosterWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PosterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 15px 20px;
`;

export default Home;
