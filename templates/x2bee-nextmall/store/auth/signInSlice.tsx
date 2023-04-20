import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import LoginResponse from "@/models/member/authType";
import apiSignIn from "@/pages/api/member/apiSignIn";

type loginInfo = {
  loginId: string;
  password: string;
};
// action creator -> createAsyncThunk
export const signingIn = createAsyncThunk(
  "signingIn/postData",
  async ({ loginId, password }: loginInfo) => {
    const loginResponse = await apiSignIn(loginId, password);
    return loginResponse as LoginResponse;
  }
);

export interface InitialStateType {
  loginResponse: LoginResponse;
  // error: string;
  loading: boolean;
}

const initialState: InitialStateType = {
  loginResponse: {},
  // error: "",
  loading: false,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setTokenInfo: (
      state: InitialStateType,
      action: PayloadAction<LoginResponse>
    ) => {
      state.loginResponse = { ...action.payload };
    },
  },
  // extraReducers는 async용 Thunk => 왜냐면 reducers는 action creator 자동 생성
  extraReducers: (builder) => {
    builder.addCase(signingIn.fulfilled, (state, action) => {
      state.loginResponse = { ...action.payload };
      state.loading = false;
    });
    builder.addCase(signingIn.pending, (state) => {
      state.loading = true;
    });
    // builder.addCase(fetchAsyncData.rejected, (state, { payload }) => {
    //   state.error = "error";
    //   state.loading = false;
    // });
  },
});

export const { setTokenInfo } = signInSlice.actions;

export default signInSlice.reducer;
