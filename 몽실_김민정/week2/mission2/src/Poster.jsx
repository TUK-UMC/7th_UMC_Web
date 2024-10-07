import { useState } from "react";

export const Poster = ({ movieData }) => {
  const [isHover, setIsHover] = useState();
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
        alt='포스터'
        key={movieData.id}
        style={{ filter: isHover ? "brightness(50%)" : "brightness(100%)" }}
        className='poster'
      />
    </div>
  );
};
