import * as S from "../styles/CartInitModal.style";

export const CartInitModal = ({ onClose, onDelete }) => {
  return (
    <S.ModalOverlay>
      <S.Modal>
        담아두신 모든 음반을 삭제하시겠습니까?
        <S.ButtonWrapper>
          <button onClick={onDelete} className='yes-button'>
            yes
          </button>
          <button onClick={onClose} className='no-button'>
            no
          </button>
        </S.ButtonWrapper>
      </S.Modal>
    </S.ModalOverlay>
  );
};
