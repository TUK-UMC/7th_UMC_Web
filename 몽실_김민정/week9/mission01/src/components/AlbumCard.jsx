import * as S from "../styles/AlbumCard.style";
import { ChevronDown } from "../assets/ChevronDown";
import { ChevronUp } from "../assets/ChevronUp";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";

export const AlbumCard = ({ data }) => {
  const dispatch = useDispatch();
  const { img, title, singer, price, id, amount } = data;
  return (
    <S.AlbumCardWrapper>
      <img src={img} />
      <S.InfoWrapper>
        <span>
          {title} | {singer}
        </span>
        <br />
        <span className='price-text'>₩ {price}</span>
      </S.InfoWrapper>
      <S.QuantityButtonWrapper>
        <ChevronUp className='button' onClick={() => dispatch(increase(id))} />
        <span>{amount}</span>
        <ChevronDown
          className='button'
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItem(id));
            }
            dispatch(decrease(id));
          }}
        />
      </S.QuantityButtonWrapper>
    </S.AlbumCardWrapper>
  );
};
