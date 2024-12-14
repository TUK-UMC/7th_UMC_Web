import { forwardRef } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { formatImageURL } from "../utils/formatImageURL";

export const Poster = forwardRef(({ movieData, topText = null }, ref) => {
  return (
    <PosterImage to={`/movies/${movieData.id}`} ref={ref}>
      {movieData.poster_path ? (
        <img src={formatImageURL(movieData.poster_path)} alt='포스터' />
      ) : (
        <DefaultImage />
      )}
      {!isNaN(topText) && <TopText topText={topText}>{topText}</TopText>}
    </PosterImage>
  );
});

const PosterImage = styled(Link)`
  cursor: pointer;
  position: relative;
  width: max-content;
  border-radius: 10px;
  height: 300px;
  filter: brightness(100%);
  border: ${({ ref }) => ref && "1px solid red"};
  img {
    border-radius: 10px;
    object-fit: cover;
    height: 300px;
  }

  &:hover {
    filter: brightness(50%);
  }
`;

const DefaultImage = styled.div`
  width: 100%;
  height: 270px;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;

const TopText = styled.span`
  position: absolute;
  font-size: 110px;
  left: ${({ topText }) => (topText >= 10 ? "-100px" : "-60px")};
  bottom: 0px;
  color: ${({ theme }) => theme.colors.primary};
  z-index: -10;
  font-family: "양진체";
`;
