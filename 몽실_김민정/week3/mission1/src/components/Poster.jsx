import { styled } from "styled-components";

export const Poster = ({ movieData }) => {
  return (
    <div>
      <PosterImage>
        <img
          src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
          alt='포스터'
        />
      </PosterImage>
    </div>
  );
};

const PosterImage = styled.div`
  cursor: pointer;
  height: 270px;
  border-radius: 10px;
  overflow: hidden;
  filter: brightness(100%);

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: brightness(50%);
  }
`;
