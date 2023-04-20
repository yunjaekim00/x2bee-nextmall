import { axiosConfig } from "../axiosConfig";

export default async function apiSignIn(loginId: string, password: string) {
  const { api } = axiosConfig();

  const API_URL_MEMBER = "api/member/1/ko/front/login";

  const requestBody = {
    loginId,
    loginMediaCd: "10",
    loginType: "10",
    otp: "",
    pwd: password,
  };

  try {
    const { data } = await api.post(API_URL_MEMBER, requestBody);
    // console.log("data", data);
    return data.payload;
  } catch (error: any) {
    return error;
  }
}
