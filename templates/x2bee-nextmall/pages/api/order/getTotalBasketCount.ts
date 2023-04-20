import { axiosConfig } from "../axiosConfig";

export default async function getTotalBasketCount(accessToken: any) {
  // interface Data {
  //   timestamp: string;
  //   code: string;
  //   message: string;
  //   payload: {
  //     totBsketCnt: number;
  //     bsketGbCd: string;
  //   };
  // }

  const { api } = axiosConfig();

  const API_BASKET_COUNT = "/api/order/1/ko/bsket/totBsketCnt";

  const paramsMyInfo = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const { data } = await api.get(API_BASKET_COUNT, paramsMyInfo);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
