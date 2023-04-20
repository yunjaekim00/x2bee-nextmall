import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  isLogin: boolean;
  // loginResponse: LoginResponse;
  totalBasketCount: number;
};

const initialState: stateType = {
  isLogin: false,
  // loginResponse: {},
  totalBasketCount: 0,
};

const signInInfoSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    setLogin: (state: stateType, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    // setTokenInfo: (state: stateType, action: PayloadAction<LoginResponse>) => {
    // state.loginResponse = { ...action.payload };
    // },
    setBasketCount: (state: stateType, action: PayloadAction<number>) => {
      state.totalBasketCount = action.payload;
    },
  },
});

export const { setLogin, setBasketCount } = signInInfoSlice.actions;

export default signInInfoSlice.reducer;
