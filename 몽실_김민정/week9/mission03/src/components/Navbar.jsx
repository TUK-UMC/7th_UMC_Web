import * as S from "../styles/Navbar.style";
import useCartStore from "../store/cartStore";

export const Navbar = () => {
  const { amount } = useCartStore((state) => state);

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
