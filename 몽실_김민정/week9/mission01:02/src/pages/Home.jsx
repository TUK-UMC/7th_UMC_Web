import { useDispatch, useSelector } from "react-redux";
import { AlbumCard } from "../components/AlbumCard";
import { CartInitModal } from "../components/CartInitModal";
import { openClearCartModal } from "../features/modal/modalSlice";
import * as S from "../styles/Home.style";

const Home = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const { clearCartModalVisiblity } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openClearCartModal(true));
  };

  return (
    <>
      {clearCartModalVisiblity && <CartInitModal />}
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
        <S.DeleteAllButton onClick={handleOpenModal}>
          장바구니 초기화
        </S.DeleteAllButton>
      </S.HomePageContainer>
    </>
  );
};

export default Home;
