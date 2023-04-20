import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import * as Types from "@/models/display/tasteBrandType";

interface stateType {
  newArrivalData: Array<Types.GoodsListItem>;
  recentBuyData: Array<Types.GoodsListItem>;
  tasteBrandData: Array<Types.GoodsListItem>;
}

const initialState = {
  newArrivalData: [],
  recentBuyData: [],
  tasteBrandData: [],
};

const bannerDataSlice = createSlice({
  name: "bannerData",
  initialState,
  reducers: {
    updateNewArrival: (state: any, { payload }) => {
      for (const arr in state) {
        if (arr === "newArrivalData") {
          state.newArrivalData = [...payload];
        } else {
          state[arr] = [...state[arr]];
        }
      }
    },
    updateRecentBuy: (state: any, { payload }) => {
      for (const arr in state) {
        if (arr === "recentBuyData") {
          state.recentBuyData = [...payload];
        } else {
          state[arr] = [...state[arr]];
        }
      }
    },
    updateTasteBrand: (state: any, { payload }) => {
      for (const arr in state) {
        if (arr === "tasteBrandData") {
          state.tasteBrandData = [...payload];
        } else {
          state[arr] = [...state[arr]];
        }
      }
    },
  },
});

export const { updateNewArrival, updateRecentBuy, updateTasteBrand } =
  bannerDataSlice.actions;

export default bannerDataSlice.reducer;
