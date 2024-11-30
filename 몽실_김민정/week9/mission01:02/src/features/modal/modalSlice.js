import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clearCartModalVisiblity: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openClearCartModal: (state, { payload }) => {
      state.clearCartModalVisiblity = payload;
    },
  },
});

export const { openClearCartModal } = modalSlice.actions;

export default modalSlice.reducer;
