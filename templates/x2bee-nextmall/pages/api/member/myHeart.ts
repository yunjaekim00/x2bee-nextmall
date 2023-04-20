import { axiosConfig } from "../axiosConfig";

export default async function getMyHeart(accessToken: any) {
  const { api } = axiosConfig();

  const API_MYHEART_URL = "/api/member/1/ko/front/wishlistAll";

  const paramsMyHeart = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      wishListGbCd: "10",
      crntPageNo: "1",
      rowsPerPage: "20",
      filter: "01", // 위시리스트구분코드가 '상품' 인경우 필수 01: 전체, 02: 세일, 03: 아울렛,04:세일/아울렛
    },
  };

  try {
    const { data } = await api.get(API_MYHEART_URL, paramsMyHeart);
    // console.log("data", data);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
