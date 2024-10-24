import styled from "styled-components";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, error, loading } = useFetch(getPopularMovies);
  return (
    <Container>
      <PosterWrapper>
        {data?.map((movie) => (
          <Poster movieData={movie} key={movie.id} />
        ))}
      </PosterWrapper>
      {error ? (
        <h1>데이터를 불러오는 데 문제가 발생했습니다.</h1>
      ) : (
        loading && <h1>로딩 중</h1>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const PosterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 15px 20px;
`;

export default Home;
