import styled from "styled-components";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";
import { useFetch } from "../hooks/useFetch";
import { ReactComponent as Loading } from "../images/loadingIcon.svg";
import { ErrorPage } from "./ErrorPage";

function Home() {
  const { data, error, loading } = useFetch(getPopularMovies);

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
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
