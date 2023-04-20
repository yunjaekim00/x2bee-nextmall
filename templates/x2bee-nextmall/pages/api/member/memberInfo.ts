import { axiosConfig } from "../axiosConfig";

export default async function apiMemberInfo(accessToken: any) {
  const { api } = axiosConfig();

  const API_MYINFO_URL = "/api/member/1/ko/front/memberInfo";

  const paramsMyInfo = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const { data } = await api.get(API_MYINFO_URL, paramsMyInfo);
    // console.log("data", data);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
