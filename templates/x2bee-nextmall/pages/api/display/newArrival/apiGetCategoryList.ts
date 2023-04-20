import { axiosConfig } from "../../axiosConfig";

export default async function apiGetCategoryList() {
  const { api } = axiosConfig();

  const API_URL_CATEGORY_LIST = "/api/display/1/ko/category/categoryList";

  const paramsCategoryList = { params: { dispCtgNo: "mainDispCtgNo" } };

  try {
    const { data } = await api.get(API_URL_CATEGORY_LIST, paramsCategoryList);
    // console.log("data", data);
    return data?.payload;
  } catch (error: any) {
    return error;
  }
}
