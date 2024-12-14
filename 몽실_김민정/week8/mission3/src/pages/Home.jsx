import styled from "styled-components";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";
import { ErrorPage } from "./ErrorPage";
import { useQuery } from "@tanstack/react-query";
import { SkeletonPosterGrid } from "../components/SkeletonPosterGrid";
import { Carousel } from "../components/Carousel";

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["homePageMovies"],
    queryFn: () => getPopularMovies(1),
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
      <Carousel>
        {data?.map((movie) => (
          <Poster movieData={movie} key={movie.id} size={"m"} />
        ))}
      </Carousel>
    </Container>
  );
}

const Container = styled.div``;

export default Home;
