export default interface LoginResponse {
  accessToken?: string;
  refreshToken?: string;
  mbrNo?: string;
  ciCtacValYn?: string;
  mbrMgrCd?: string;
  pwdChgYn?: string;
  tmpPwdIssuYn?: string;
  loginId?: string;
  resultMessage?: string;
  resultCode?: string;
  dormCode?: string;
  otpId?: string;
  mcustNo?: string;
  thmJoinYn?: string;
  hpSsoAuthCd?: any;
  hpMcustNo?: any;
  mcustId?: any;
  ssoMcustNo?: any;
}
