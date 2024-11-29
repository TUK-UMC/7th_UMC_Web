import * as S from "../styles/Navbar.style";

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.TextWrapper>
        <span className='main-text'>UMC PlayList</span>
        <S.ShoppingCart>
          장바구니
          <S.ShoppingCount>12</S.ShoppingCount>
        </S.ShoppingCart>
      </S.TextWrapper>
    </S.NavbarContainer>
  );
};
