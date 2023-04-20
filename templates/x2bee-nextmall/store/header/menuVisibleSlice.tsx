import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  categoryVisible: boolean;
};

const initialState: stateType = {
  categoryVisible: false,
};

const menuVisibleSlice = createSlice({
  name: "categoryVisible",
  initialState,
  reducers: {
    setCtgVisible: (state: stateType, action: PayloadAction<boolean>) => {
      state.categoryVisible = action.payload;
    },
  },
});

export const { setCtgVisible } = menuVisibleSlice.actions;

export default menuVisibleSlice.reducer;
