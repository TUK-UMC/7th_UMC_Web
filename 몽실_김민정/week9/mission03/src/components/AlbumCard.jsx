import * as S from "../styles/AlbumCard.style";
import { ChevronDown } from "../assets/ChevronDown";
import { ChevronUp } from "../assets/ChevronUp";
import useCartStore from "../store/cartStore";
import PropTypes from "prop-types";

export const AlbumCard = ({ data }) => {
  const { increase, decrease, removeItem } = useCartStore();
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
        <ChevronUp className='button' onClick={() => increase(id)} />
        <span>{amount}</span>
        <ChevronDown
          className='button'
          onClick={() => {
            if (amount === 1) {
              return removeItem(id);
            }
            decrease(id);
          }}
        />
      </S.QuantityButtonWrapper>
    </S.AlbumCardWrapper>
  );
};

AlbumCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
};
