import { axiosConfig } from "../axiosConfig";

export default async function apiCategoryMenu() {
  const { api } = axiosConfig();

  const API_URL = "api/display/1/ko/category/categoryList";

  const paramsCategory = {
    params: {
      dispCtgNo: "mainDispCtgNo",
    },
  };

  try {
    const { data } = await api.get(API_URL, paramsCategory);
    // console.log("data", data);
    return data?.payload;
  } catch (error: any) {
    return error;
  }
}
