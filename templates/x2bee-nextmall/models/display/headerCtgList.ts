export default interface LrgCtgListItemType {
  brandNo?: string;
  ctgLevel?: any;
  dispCtgNm?: string;
  dispCtgNo?: string;
  dispSeq?: number;
  leafYn?: string;
  midCtgList?: Array<MidCtgListItem>;
  selectShopYn?: any;
  uprDispCtgNo?: any;
}

interface MidCtgListItem {
  brandGubun?: any;
  brandNo?: any;
  ctgLevel?: any;
  dispCtgNm?: string;
  dispCtgNo?: string;
  dispSeq?: number;
  leafYn?: string;
  likeYn?: any;
  linkUrlAddr?: any;
  prtTypCd?: any;
  smlCtgList?: any;
  uprDispCtgNo?: any;
}
