import { useParams } from "react-router-dom";
import { getMovieCredits, getMovieDetail } from "../apis/movieAPI";
import { useFetch } from "../hooks/useFetch";
import { formatImageURL } from "../apis/utils/formatImageURL";
import styled from "styled-components";
import { CircleProfile } from "../components/CircleProfile";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movieInfo } = useFetch(getMovieDetail, movieId);
  const { data: credits } = useFetch(getMovieCredits, movieId);
  const { title, tagline, vote_average, overview, poster_path, genres } =
    movieInfo;

  console.log(credits);

  // credits.cast.map((cast) => {
  //   return console.log(cast);
  // });

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
          <img src={formatImageURL(poster_path)} alt='영화 포스터' />
        </ImageWrapper>
      </MovieInfoWrapper>
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const InfoWrapper = styled.div`
  width: 40%;
  font-size: 18px;

  h1 {
    font-size: 50px;
  }
`;

const SubInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const TagLine = styled.h2`
  font-size: 30px;
`;

const ImageWrapper = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 1) 16%,
      rgba(0, 0, 0, 0) 76%
    );
    margin-left: auto;
    object-fit: cover;
  }
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
  gap: 20px;
`;
