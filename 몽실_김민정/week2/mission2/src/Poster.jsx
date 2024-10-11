import { useState } from "react";
import { styled } from "styled-components";

export const Poster = ({ movieData }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <PosterImage $isHover={isHover}>
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
  filter: ${({ $isHover }) =>
    $isHover ? "brightness(50%)" : "brightness(100%)"};
`;
