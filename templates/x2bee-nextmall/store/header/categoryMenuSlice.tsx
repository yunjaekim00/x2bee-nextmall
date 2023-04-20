import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LrgCtgListItemType from "@/models/display/headerCtgList";
import apiCategoryMenu from "@/pages/api/display/apiCategoryMenu";

// action creator -> createAsyncThunk
export const fetchCategoryMenu = createAsyncThunk(
  "fetchCategoryMenu/getData",
  async () => {
    const response = await apiCategoryMenu();
    const data = await response.lrgCtgList;
    return data as Array<LrgCtgListItemType>;
  }
);

export interface InitialStateType {
  ctgList: Array<LrgCtgListItemType>;
  // error: string;
  loading: boolean;
}

const initialState: InitialStateType = {
  ctgList: [],
  // error: "",
  loading: false,
};

export const categoryMenuSlice = createSlice({
  name: "categoryMenu",
  initialState,
  reducers: {},
  // extraReducers는 async용 Thunk => 왜냐면 reducers는 action creator 자동 생성
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.ctgList = [...action.payload];
    });
    builder.addCase(fetchCategoryMenu.pending, (state) => {
      state.loading = true;
    });
    // builder.addCase(fetchAsyncData.rejected, (state, { payload }) => {
    //   state.error = "error";
    //   state.loading = false;
    // });
  },
});

export default categoryMenuSlice.reducer;
