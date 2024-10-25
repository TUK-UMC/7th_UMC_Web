import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { formatImageURL } from "../utils/formatImageURL";

export const Poster = ({ movieData }) => {
  return (
    <div>
      <PosterImage to={`/movies/${movieData.id}`}>
        <img src={formatImageURL(movieData.poster_path)} alt='포스터' />
      </PosterImage>
    </div>
  );
};

const PosterImage = styled(Link)`
  cursor: pointer;
  height: max-content;
  border-radius: 10px;
  overflow: hidden;
  filter: brightness(100%);

  img {
    width: 100%;
    height: 270px;
  }

  &:hover {
    filter: brightness(50%);
  }
`;
