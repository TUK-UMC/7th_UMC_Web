import styled from "styled-components";

import { useInfinityScroll } from "../hooks/useInfinityScroll";
import { Poster } from "../components/Poster";
import { getPopularMovies } from "../apis/movieAPI";
import { Carousel } from "../components/Carousel";

function Home() {
  const { data, lastMovieId, setTarget } = useInfinityScroll({
    queryFn: getPopularMovies,
    queryKey: ["homePageMovies"],
  });

  return (
    <Container>
      <Carousel>
        {data?.pages.map((pageData) =>
          pageData.results.map((movieData) => (
            <Poster
              movieData={movieData}
              key={movieData.id}
              ref={movieData.id === lastMovieId ? setTarget : null}
            />
          ))
        )}
      </Carousel>
    </Container>
  );
}

const Container = styled.div``;

export default Home;
