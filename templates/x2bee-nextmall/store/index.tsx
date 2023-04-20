import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Slices import
import tasteBrandData from "./home/tasteBrandSlice";
import newArrivalData from "./home/newArrivalSlice";
import recentBuyData from "./home/recentBuySlice";
import bannerData from "./home/bannerDataSlice";
import isLogin from "./auth/signInInfoSlice";
import categoryVisible from "./header/menuVisibleSlice";
import categoryMenu from "./header/categoryMenuSlice";
import signIn from "./auth/signInSlice";
import showModal from "./modal/showModalSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: [
    "tasteBrandData",
    "newArrivalData",
    "recentBuyData",
    // "bannerData",
    "isLogin",
    "categoryMenu",
    "signIn",
  ], // will be persisted
  blacklist: [
    "categoryVisible",
    "showModal",
  ], // not persisted
};

const reducers = combineReducers({
  tasteBrandData,
  newArrivalData,
  recentBuyData,
  bannerData,
  isLogin,
  categoryVisible,
  categoryMenu,
  signIn,
  showModal,
});

const reducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }, // persist error debug
    }),
  devTools: process.env.NODE_ENV !== "production",
  // devTools를 development 환경에서는 사용하고 prod에서만 사용 안 한다는 뜻.
  // -> Reduxjs/toolkit에 thunk가 이제는 포함되어있다.
});

// Type 지정해주는 것 (redux toolkit 공식문서)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
