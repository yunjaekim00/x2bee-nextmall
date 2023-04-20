import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiGetRecentBuyRecommend from "@/pages/api/display/recentBuy/apiGetRecentBuyRecommend";
// import * as Types from "@/models/tasteBrandType";

// action creator -> createAsyncThunk
export const fetchRecentBuyData = createAsyncThunk(
  "fetchRecentBuyData/getData",
  async () => {
    const response = await apiGetRecentBuyRecommend();
    const data = response.goodsList;
    return data as Array<object>;
  }
);

export interface InitialStateType {
  entities: Array<object>;
  // error: string;
  loading: boolean;
}

const initialState: InitialStateType = {
  entities: [],
  // error: "",
  loading: false,
};

export const recentBuySlice = createSlice({
  name: "recentBuyData",
  initialState,
  reducers: {},
  // extraReducers는 async용 Thunk => 왜냐면 reducers는 action creator 자동 생성
  extraReducers: (builder) => {
    builder.addCase(fetchRecentBuyData.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = [...action.payload];
    });
    builder.addCase(fetchRecentBuyData.pending, (state) => {
      state.loading = true;
    });
    // builder.addCase(fetchAsyncData.rejected, (state, { payload }) => {
    //   state.error = "error";
    //   state.loading = false;
    // });
  },
});

export default recentBuySlice.reducer;
