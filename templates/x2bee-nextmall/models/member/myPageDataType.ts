interface BenefitInfo {
  crrtMlg?: number;
  hpAvalPnt?: number;
  emoneyAvalAmt?: number;
  cpnAvalCnt?: number;
}

export default interface MyPageDataType {
  stafYn?: string;
  chrgMbrYn?: string;
  nknm?: string;
  mbrNm?: string;
  loginIdUseYn?: string;
  imgFileNm?: string;
  imgPathNm?: string;
  recomIdInsrtTgtYn?: string;
  onoffInfo?: object;
  onlineInfo?: object;
  thePlusInfo?: object;
  careSvcInfo?: object;
  codyList?: Array<object>;
  benefitInfo?: BenefitInfo;
  ordInfo?: object;
  actInfo?: object;
  bkmkMenuList?: Array<object>;
  stafInfo?: object;
}
