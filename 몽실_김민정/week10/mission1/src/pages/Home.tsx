import styled from "styled-components";

import { useInfinityScroll } from "../hooks/useInfinityScroll";
import { Poster } from "../components/Poster";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../apis/movieAPI";
import { Carousel } from "../components/Carousel";
import { SkeletonPosterGrid } from "src/components/SkeletonPosterGrid";
import { ErrorPage } from "./ErrorPage";

function Home() {
  const {
    data: popularMovieData,
    lastMovieId: popularLastMovieId,
    setTarget: lastPopularMovieRef,
    isLoading: popularLoading,
    error: popularError,
  } = useInfinityScroll({
    queryFn: getPopularMovies,
    queryKey: ["popurlar"],
  });

  if (popularLoading) {
    return <SkeletonPosterGrid />;
  }
  if (popularError) {
    return <ErrorPage />;
  }

  const {
    data: nowPlayingMovieData,
    lastMovieId: lastNowPlayingMovieId,
    setTarget: lastNowPlayingMovieRef,
  } = useInfinityScroll({
    queryFn: getNowPlayingMovies,
    queryKey: ["nowPlaying"],
  });

  const {
    data: topRatedMovieData,
    isLoading: topRadatedDataLoading,
    error: TopRatedDataError,
  } = useInfinityScroll({
    queryFn: getTopRatedMovies,
    queryKey: ["topRated"],
  });

  if (topRadatedDataLoading) {
    return <SkeletonPosterGrid />;
  }
  if (TopRatedDataError) {
    return <ErrorPage />;
  }

  return (
    <Container>
      <CarouselWrapper>
        <Title>회원님을 위한 인기 콘텐츠</Title>
        <Carousel>
          {popularMovieData?.pages.map((pageData) =>
            pageData.results.map((movieData) => (
              <Poster
                movieData={movieData}
                key={movieData.id}
                ref={
                  movieData.id === popularLastMovieId
                    ? lastPopularMovieRef
                    : null
                }
              />
            ))
          )}
        </Carousel>
      </CarouselWrapper>
      <CarouselWrapper>
        <Title>지금 상영중인 영화</Title>
        <Carousel>
          {nowPlayingMovieData?.pages.map((pageData) =>
            pageData.results.map((movieData) => (
              <Poster
                movieData={movieData}
                key={movieData.id}
                ref={
                  movieData.id === lastNowPlayingMovieId
                    ? lastNowPlayingMovieRef
                    : null
                }
              />
            ))
          )}
        </Carousel>
      </CarouselWrapper>
      <CarouselWrapper>
        <Title>TOP 20 영화</Title>
        <Carousel type='rank'>
          {topRatedMovieData?.pages.map((pageData) =>
            pageData.results.map((movieData, index) => (
              <Poster
                movieData={movieData}
                key={movieData.id}
                topText={index}
              />
            ))
          )}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Title = styled.h1`
  font-size: 35px;
`;

const CarouselWrapper = styled.div``;

export default Home;
