import * as S from "../styles/AlbumCard.style";
import { ChevronDown } from "../assets/ChevronDown";
import { ChevronUp } from "../assets/ChevronUp";

export const AlbumCard = ({ data }) => {
  return (
    <S.AlbumCardWrapper>
      <img src={data.img} />
      <S.InfoWrapper>
        <span>
          {data.title} | {data.singer}
        </span>
        <br />
        <span className='price-text'>₩ {data.price}</span>
      </S.InfoWrapper>
      <S.QuantityButtonWrapper>
        <ChevronUp />
        <span>12</span>
        <ChevronDown />
      </S.QuantityButtonWrapper>
    </S.AlbumCardWrapper>
  );
};
