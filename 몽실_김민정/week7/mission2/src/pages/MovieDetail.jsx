import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getMovieCredits, getMovieDetail } from "../apis/movieAPI";
import { formatImageURL } from "../utils/formatImageURL";
import { CircleProfile } from "../components/CircleProfile";
import { ErrorPage } from "./ErrorPage";
import { MovieDetailSkeleton } from "./MovieDetailSkeleton";

export const MovieDetail = () => {
  const { movieId } = useParams();

  const {
    data: movieInfo,
    loading: movieInfoLoading,
    error: movieInfoError,
  } = useQuery({
    queryKey: ["movieDetail"],
    queryFn: () => getMovieDetail(movieId),
  });

  const {
    data: credits,
    loading: creditsLoading,
    error: creditsError,
  } = useQuery({
    queryKey: ["movieCredit"],
    queryFn: () => getMovieCredits(movieId),
  });

  const isLoading =
    movieInfoLoading ||
    creditsLoading ||
    !movieInfo ||
    movieInfo.id !== Number(movieId);

  if (isLoading) {
    return <MovieDetailSkeleton />;
  }

  if (creditsError || movieInfoError) {
    return <ErrorPage />;
  }

  const { title, tagline, vote_average, overview, backdrop_path, genres } =
    movieInfo;

  return (
    <Container>
      <MovieInfoWrapper>
        <InfoWrapper>
          <h1>{title}</h1>
          <SubInfo>
            평균 {vote_average?.toFixed(2)} |
            {genres?.map((genre) => (
              <div key={genre.id}>{genre.name}</div>
            ))}
          </SubInfo>
          <TagLine>{tagline}</TagLine>
          <OverView>{overview}</OverView>
        </InfoWrapper>

        <ImageWrapper>
          <img src={formatImageURL(backdrop_path)} alt='영화 포스터' />
        </ImageWrapper>
      </MovieInfoWrapper>
      <Divider />
      <CreditsWrapper>
        <h3>감독/출연</h3>
        <CreditsScroll>
          {credits?.cast?.map((cast) => (
            <CircleProfile
              name={cast.name}
              key={cast.id}
              department={cast.known_for_department}
              profileImage={formatImageURL(cast.profile_path)}
            />
          ))}
        </CreditsScroll>
      </CreditsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 20px;
`;

const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OverView = styled.p`
  overflow: hidden;
  opacity: 0.6;
  text-overflow: ellipsis;
  height: 200px;
`;

const InfoWrapper = styled.div`
  width: 40%;
  font-size: 18px;

  h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }
`;

const SubInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const TagLine = styled.h2`
  font-size: 25px;
  margin-top: 70px;
`;

const ImageWrapper = styled.div`
  width: 60%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.9) 50%,
        rgba(0, 0, 0, 0) 90%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0) 90%);
    mask-composite: intersect;
    margin-left: auto;
    object-fit: cover;
  }
`;

const Divider = styled.hr`
  color: ${({ theme }) => theme.colors.white};
  width: 40%;
  text-align: left;
  margin-left: 0;
`;

const CreditsWrapper = styled.div`
  h3 {
    font-size: 30px;
  }
`;

const CreditsScroll = styled.div`
  width: 87vw;
  height: 400px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 20px;
`;
