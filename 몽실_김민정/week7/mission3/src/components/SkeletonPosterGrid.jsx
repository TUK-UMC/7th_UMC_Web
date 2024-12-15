import { styled } from "styled-components";
import { SkeletonPoster } from "./SkeletonPoster";

export const SkeletonPosterGrid = () => {
  return (
    <MoviesGridWrapper>
      {Array.from({ length: 30 }).map((_, index) => (
        <SkeletonPoster key={index} />
      ))}
    </MoviesGridWrapper>
  );
};

const MoviesGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px 10px;
  padding: 15px 20px;
`;
