import { axiosConfig } from "../axiosConfig";

export default async function apiSignOut(accessToken: any, refreshToken: any) {
  const { api } = axiosConfig();

  const API_URL_MEMBER = "/api/member/1/ko/front/logout";

  const requestBody = {
    refreshToken: refreshToken,
  };
  const headers = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const { data } = await api.post(API_URL_MEMBER, requestBody, headers);
    // console.log("data", data);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
