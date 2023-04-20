import { axiosConfig } from "../../axiosConfig";

export default async function apiGetRecommendList(dispCtgNos: string) {
  const { api } = axiosConfig();

  const API_URL_RECOMMEND_LIST =
    "/api/display/1/ko/recommend/lrgCategoryRecommendList";

  const paramsCategoryList = {
    params: { goodsGbn: "20", dispCtgNos, dispMediaCd: "10" },
  };

  try {
    const { data } = await api.get(API_URL_RECOMMEND_LIST, paramsCategoryList);
    // console.log("data", data);
    return data?.payload;
  } catch (error: any) {
    return error;
  }
}
