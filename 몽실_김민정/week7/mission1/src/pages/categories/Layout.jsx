import { styled } from "styled-components";
import { Poster } from "../../components/Poster";
import { useQuery } from "@tanstack/react-query";
import { SkeletonPosterGrid } from "../../components/SkeletonPosterGrid";

export const Layout = ({ func, queryKey }) => {
  const { isLoading, data: movies } = useQuery({
    queryKey: [queryKey],
    queryFn: func,
  });

  if (isLoading) {
    return <SkeletonPosterGrid />;
  }

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
