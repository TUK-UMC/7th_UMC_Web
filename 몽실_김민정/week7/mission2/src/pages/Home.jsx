import styled from "styled-components";
import { useRef, useEffect } from "react";
import { getPopularMovies } from "../apis/movieAPI";
import { Poster } from "../components/Poster";
import { useInfinityScroll } from "../hooks/useInfinityScroll";

function Home() {
  const lastMovieItemRef = useRef(null);

  const { data, lastMovieId, observeLastElement } = useInfinityScroll({
    queryFn: getPopularMovies,
    queryKey: ["homePageMovies"],
  });

  useEffect(() => {
    if (observeLastElement && lastMovieItemRef?.current) {
      observeLastElement(lastMovieItemRef.current);
    }
  }, [lastMovieItemRef, observeLastElement]);

  return (
    <Container>
      <PosterWrapper>
        {data?.pages.map((pageData) =>
          pageData.results.map((movie, idx) => (
            <Poster
              movieData={movie}
              key={movie.id}
              ref={idx === lastMovieId ? lastMovieItemRef : null}
            />
          ))
        )}
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
