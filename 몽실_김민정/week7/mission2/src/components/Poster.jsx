import { forwardRef } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { formatImageURL } from "../utils/formatImageURL";

export const Poster = forwardRef(({ movieData, isLast }, ref) => {
  return (
    <div ref={ref}>
      <PosterImage to={`/movies/${movieData.id}`} ref={ref} isLast={isLast}>
        {movieData.poster_path ? (
          <img src={formatImageURL(movieData.poster_path)} alt='포스터' />
        ) : (
          <DefaultImage />
        )}
      </PosterImage>
    </div>
  );
});

const PosterImage = styled(Link)`
  cursor: pointer;
  height: max-content;
  border-radius: 10px;
  overflow: hidden;
  filter: brightness(100%);
  border: ${({ isLast }) => isLast && "1px solid red"};

  img {
    width: 100%;
    height: 270px;
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
