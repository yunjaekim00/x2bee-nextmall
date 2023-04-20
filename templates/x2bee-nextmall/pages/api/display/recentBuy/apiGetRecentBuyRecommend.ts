import { axiosConfig } from "../../axiosConfig";

export default async function apiGetRecentBuyRecommend() {
  const { api } = axiosConfig();

  const API_URL = "/api/display/1/ko/recommend/recentBuyRecommend";

  const paramsCategoryList = {
    params: { dispMediaCd: "10" },
  };

  try {
    const { data } = await api.get(API_URL, paramsCategoryList);
    // console.log("data", data);
    return data?.payload;
  } catch (error: any) {
    return error;
  }
}
