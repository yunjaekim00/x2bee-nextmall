import { axiosConfig } from "../axiosConfig";

export default async function apiCategoryGoodsList(ctgNum: any) {
  const { api } = axiosConfig();

  const API_GOODS_URL = "/api/display/1/ko/category/categoryGoodsList";

  const paramsCategory = {
    params: {
      dispMediaCd: 10,
      sortGbn: 10,
      norOutletGbCd: "J",
      filterYn: "N",
      productListLayout: 4,
      dispCtgNo: ctgNum, // 카테고리 번호
      pageSize: 20, // 한 페이지에 몇 개 보이느냐
      pageNo: 1,
    },
  };

  try {
    const { data } = await api.get(API_GOODS_URL, paramsCategory);
    // console.log("data", data);
    return data?.payload;
  } catch (error: any) {
    return error;
  }
}
