import { axiosConfig } from "../../axiosConfig";

export default async function apiGetTasteBrandRecommend() {
  const { api } = axiosConfig();

  const API_URL_NEW_BRAND = "/api/display/1/ko/recommend/tasteBrandRecommend";
  const paramsNewBrand = { params: { dispMediaCd: 10 } };

  try {
    const { data } = await api.get(API_URL_NEW_BRAND, paramsNewBrand);
    // console.log("data", data);
    return data?.payload;
  } catch (error: any) {
    return error;
  }
}
