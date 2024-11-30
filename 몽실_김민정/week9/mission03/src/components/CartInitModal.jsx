import * as S from "../styles/CartInitModal.style";
import useCartStore from "../store/cartStore";
import useModalStore from "../store/modalStore";

export const CartInitModal = () => {
  const { clearCart } = useCartStore((state) => state);
  const { openClearCartModal } = useModalStore((state) => state);

  const handleClickYes = () => {
    clearCart();
    openClearCartModal(false);
  };

  const handleClickNo = () => {
    openClearCartModal(false);
  };

  return (
    <S.ModalOverlay>
      <S.Modal>
        담아두신 모든 음반을 삭제하시겠습니까?
        <S.ButtonWrapper>
          <button onClick={handleClickYes} className='yes-button'>
            yes
          </button>
          <button onClick={handleClickNo} className='no-button'>
            no
          </button>
        </S.ButtonWrapper>
      </S.Modal>
    </S.ModalOverlay>
  );
};
