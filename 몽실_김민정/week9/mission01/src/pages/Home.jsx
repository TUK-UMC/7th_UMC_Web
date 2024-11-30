import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlbumCard } from "../components/AlbumCard";
import { CartInitModal } from "../components/CartInitModal";
import { clearCart } from "../features/cart/cartSlice";
import * as S from "../styles/Home.style";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { cartItems, total } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleDelete = () => {
    dispatch(clearCart());
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && (
        <CartInitModal onClose={handleCloseModal} onDelete={handleDelete} />
      )}
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
