import { AlbumCard } from "../components/AlbumCard";
import { CartInitModal } from "../components/CartInitModal";
import * as S from "../styles/Home.style";
import useCartStore from "../store/cartStore";
import useModalStore from "../store/modalStore";

const Home = () => {
  const { cartItems, total } = useCartStore((state) => state);

  const { clearCartModalVisibility, openClearCartModal } = useModalStore(
    (state) => state
  );

  const handleOpenModal = () => {
    openClearCartModal(true);
  };

  return (
    <>
      {clearCartModalVisibility && <CartInitModal />}
      <S.HomePageContainer>
        <h1 className='main-text'>당신이 선택한 음악</h1>
        <S.AlbumCardLists>
          {cartItems.map((album) => (
            <AlbumCard key={album.id} data={album} />
          ))}
        </S.AlbumCardLists>
        <S.Seperator />
        <S.TotalWrapper>
          <span>총 가격</span>
          <span>₩ {total}</span>
        </S.TotalWrapper>
        {cartItems.length > 0 && (
          <S.DeleteAllButton onClick={handleOpenModal}>
            장바구니 초기화
          </S.DeleteAllButton>
        )}
      </S.HomePageContainer>
    </>
  );
};

export default Home;
