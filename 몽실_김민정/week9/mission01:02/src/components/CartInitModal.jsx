import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openClearCartModal } from "../features/modal/modalSlice";
import * as S from "../styles/CartInitModal.style";

export const CartInitModal = () => {
  const dispatch = useDispatch();

  const handleClickYes = () => {
    dispatch(clearCart());
    dispatch(openClearCartModal(false));
  };

  const handleClickNo = () => {
    dispatch(openClearCartModal(false));
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
