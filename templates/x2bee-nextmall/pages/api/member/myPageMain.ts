import { axiosConfig } from "../axiosConfig";

export default async function apiMyPageMain(accessToken: any) {
  const { api } = axiosConfig();

  const API_MYPAGE_URL = "/api/member/1/ko/front/myPageMain";

  const paramsMyPage = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      loginMediaCd: "10",
    },
  };

  try {
    const { data } = await api.get(API_MYPAGE_URL, paramsMyPage);
    // console.log("data", data);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
