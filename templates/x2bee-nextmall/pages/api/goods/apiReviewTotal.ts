import { axiosConfig } from "../axiosConfig";

export default async function apiReviewTotal(goodsNo: any) {
  const { api } = axiosConfig();

  const API_URL = `/api/goods/1/ko/goods/` + `${goodsNo}` + `/revTotalInfo`;

  try {
    const { data } = await api.get(API_URL);
    // console.log("data", data);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
