import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Types
import NewProductList from "@/models/display/newArrivalType";
import LrgCtgListItemType from "@/models/display/headerCtgList";
// fetch API
import apiGetCategoryList from "@/pages/api/display/newArrival/apiGetCategoryList";
import apiGetRecommendList from "@/pages/api/display/newArrival/apiGetRecommendList";

export const fetchFirstData = createAsyncThunk(
  "newArrivalData/getFirstData",
  async () => {
    const { lrgCtgList } = await apiGetCategoryList();

    const arrCtgNos = lrgCtgList.map(
      (category: LrgCtgListItemType) => category.dispCtgNo
    );
    const dispCtgNos = arrCtgNos.join(",");

    return dispCtgNos as string; // dispCtgNos = "605,2071"
  }
);

// action creator -> createAsyncThunk
export const fetchNewArrivalData = createAsyncThunk(
  "newArrivalData/getData",
  async (dispCtgNos: string) => {
    const data2 = await apiGetRecommendList(dispCtgNos);
    return data2 as Array<NewProductList>;
  }
);

export interface InitialStateType {
  dispCtgNos: string;
  entities: Array<NewProductList>;
  // error: string;
  loading: boolean;
}

const initialState: InitialStateType = {
  dispCtgNos: "",
  entities: [],
  // error: "",
  loading: false,
};

export const newArrivalSlice = createSlice({
  name: "newArrivalData",
  initialState,
  reducers: {},
  // extraReducers는 async용 Thunk => 왜냐면 reducers는 action creator 자동 생성
  extraReducers: (builder) => {
    builder.addCase(fetchFirstData.fulfilled, (state, action) => {
      state.loading = false;
      state.dispCtgNos = action.payload;
      // console.log("ACTION", action.payload);
    });
    builder.addCase(fetchFirstData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNewArrivalData.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = [...action.payload];
    });
    builder.addCase(fetchNewArrivalData.pending, (state) => {
      state.loading = true;
    });
    // builder.addCase(fetchAsyncData.rejected, (state, { payload }) => {
    //   state.error = "error";
    //   state.loading = false;
    // });
  },
});

export default newArrivalSlice.reducer;
