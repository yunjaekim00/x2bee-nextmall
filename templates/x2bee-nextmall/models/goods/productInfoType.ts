interface coordGoodsItem {
  adveWrd?: any;
  brandNm?: string;
  contFilePathNm?: string;
  erpColorCd?: string;
  erpSzCd?: string;
  erpSzNo?: string;
  goodsNm?: string;
  goodsNo?: string;
  itmNo?: string;
  itmSaleStatCd?: string;
  koreaSz?: string;
  norPrc?: number;
  norPrcUsd?: number;
  onlColorCd?: string;
  onlColorNm?: string;
  onlSzCd?: string;
  salePrc?: number;
  salePrcUsd?: number;
  saleRate?: number;
  wishGoodsYn?: string;
}

interface ColorList {
  itmNo?: string;
  erpColorCd?: string;
  repItmYn?: string;
  rgbVal?: string;
  onlColorCd?: string;
  onlColorNm?: string;
  hotItmYn?: string;
  optnCatNo1?: number | string;
  optnNo1?: string;
  optnNm1?: string;
  norPrc?: number;
  salePrc?: number;
  saleRate?: number;
  statCd?: number;
  imgGbCd?: string;
  contFilePathNm?: string;
  contFileNm?: null;
  contentList?: Array<object>;
  sizeList?: Array<object>;
  norPrcUsd?: number;
  salePrcUsd?: number;
}

interface DispCtgList {
  depth?: string;
  dispCtgNm?: string;
  dispCtgNo?: string;
}

export default interface ProductInfoType {
  acsrNm?: string;
  addDesc?: any;
  addInfoList?: Array<object>;
  adveWrd?: any;
  aeEvtList?: any;
  aplyEndDt?: any;
  aplyStrDt?: any;
  assocGoodsList?: any;
  avgScr?: number;
  benefitList?: Array<object>;
  brandNm?: string;
  brandNo?: string;
  chlDtlNo?: any;
  colorList?: Array<ColorList>;
  coordGoodsList?: Array<coordGoodsItem>;
  deliveryFeeList?: Array<object> | any;
  dispCtgList?: Array<DispCtgList>;
  erpArtcCd?: string;
  erpBrandNo?: string;
  fitGuideDispYn?: string;
  fitGuideList?: any;
  fitGuidePhotoYn?: string;
  goodsCompCd?: string;
  goodsDesc1?: string;
  goodsDesc2?: string;
  goodsDesc3?: string;
  goodsDtlDesc?: any;
  goodsNm?: string;
  goodsNo?: string;
  goodsTypCd?: string;
  gvgfPsbYn?: string;
  hsCd?: string;
  isFittingInfo?: string;
  isLaundry?: string;
  isRepair?: string;
  isSizeRcmd?: string;
  itemFilePathNm?: any;
  itemGbCd?: string;
  ldryMarkList?: any;
  lowrBrandNm?: string;
  lowrBrandNo?: string;
  noDataAcmantSzYn?: string;
  norOutletGbCd?: string;
  notiItemList?: Array<object>;
  pkgContentList?: any;
  prestImgPathNm?: any;
  prestMsg?: any;
  prestNm?: any;
  qquckDeliPsbGoodsYn?: string;
  relGoodsList?: any;
  revTotCnt?: number;
  saleStatCd?: string;
  shopRcvDvsnGoodsYn?: string;
  snCd?: string;
  spareAcmantSzList?: Array<object>;
  stdCtgNm?: string;
  stdCtgNo?: string;
  styleRevList?: any;
  styleRevTotCnt?: number;
  totScr?: number;
  wishGoodsYn?: any;
}
