import { create } from "zustand";

const useModalStore = create((set) => ({
  clearCartModalVisibility: false,
  openClearCartModal: (visibility) =>
    set(() => {
      return { clearCartModalVisibility: visibility };
    }),
}));

export default useModalStore;
