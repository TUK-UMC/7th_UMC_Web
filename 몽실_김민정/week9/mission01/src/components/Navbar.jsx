import { useSelector } from "react-redux";
import * as S from "../styles/Navbar.style";

export const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <S.NavbarContainer>
      <S.TextWrapper>
        <span className='main-text'>UMC PlayList</span>
        <S.ShoppingCart>
          장바구니
          <S.ShoppingCount>{amount}</S.ShoppingCount>
        </S.ShoppingCart>
      </S.TextWrapper>
    </S.NavbarContainer>
  );
};
