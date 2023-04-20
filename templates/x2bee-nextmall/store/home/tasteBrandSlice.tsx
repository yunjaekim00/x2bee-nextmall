import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiGetTasteBrandRecommend from "@/pages/api/display/tasteBrand/apiGetTasteBrandRecommend";
// import * as Types from "@/models/tasteBrandType";

// action creator -> createAsyncThunk
export const fetchTasteBrandData = createAsyncThunk(
  "tasteBrandData/getData",
  async () => {
    const { brandList } = await apiGetTasteBrandRecommend();
    return brandList as Array<object>;
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

export const tasteBrandSlice = createSlice({
  name: "tasteBrandData",
  initialState,
  reducers: {},
  // extraReducers는 async용 Thunk => 왜냐면 reducers는 action creator 자동 생성
  extraReducers: (builder) => {
    builder.addCase(fetchTasteBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = [...action.payload];
    });
    builder.addCase(fetchTasteBrandData.pending, (state) => {
      state.loading = true;
    });
    // builder.addCase(fetchAsyncData.rejected, (state, { payload }) => {
    //   state.error = "error";
    //   state.loading = false;
    // });
  },
});

export default tasteBrandSlice.reducer;
