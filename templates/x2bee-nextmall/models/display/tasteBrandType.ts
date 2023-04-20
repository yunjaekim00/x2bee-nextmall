export interface BrandList {
  brandNm?: string;
  brandNo?: string;
  brandIntroImgUrl?: string;
  goodsList?: Array<GoodsListItem>;
}

export interface GoodsListItem {
  adveWrd?: string;
  brandIntroImgUrl?: string;
  brandNm?: string;
  brandNo?: string;
  colorInfo?: Array<ColorInfoItem>;
  dcRate?: number;
  dispGoodsContUrl?: any;
  dispSeq?: number;
  flag?: string;
  goodsCompCd?: any;
  goodsDesc?: string;
  goodsNm?: string;
  goodsNo?: string;
  goodsRevCnt?: number;
  hndDeliveryYn?: string;
  lowrBrandNm?: any;
  lowrBrandNo?: any;
  mainImage?: string;
  norPrc?: number;
  norPrcUsd?: number;
  salePrc?: number;
  salePrcUsd?: number;
  soutYn?: string;
  stkrBtmWrd?: any;
  stkrColorCd?: any;
  stkrDispEndDt?: any;
  stkrDispStrDt?: any;
  stkrDispYn?: any;
  stkrWrd?: any;
  tgtGoodsList?: any;
  videoFilePath?: any;
  videoYn?: any;
  wishGoodsYn?: string;
}

export interface ColorInfoItem {
  colorChipUrl?: string;
  colorContInfo?: Array<ColorContInfoItem>;
  colorSizeInfo?: Array<ColorSizeInfoItem>;
  dispSeq?: number;
  goodsNo?: string;
  key?: string;
  onlColorCd?: string;
  optnNo?: string;
  repItmNo?: string;
  repYn?: string;
  soutYn?: string;
}

interface ColorContInfoItem {
  dispGoodsContGbCd?: string;
  dispGoodsContUrl?: string;
  dispSeq?: number;
  imgGbCd?: string;
}

interface ColorSizeInfoItem {
  itmSaleStatCd?: string;
  erpSzNo?: string;
  erpSzCd?: string;
}
