import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  showSearchModal: boolean;
};

const initialState: stateType = {
  showSearchModal: false,
};

const showModalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    setShowSearchModal: (state: stateType, action: PayloadAction<boolean>) => {
      state.showSearchModal = action.payload;
    },
  },
});

export const { setShowSearchModal } = showModalSlice.actions;

export default showModalSlice.reducer;
