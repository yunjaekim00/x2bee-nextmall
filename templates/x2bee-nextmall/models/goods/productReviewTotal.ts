// 여기서부터는 Review Total
export interface GoodsRevSummary {
  avgScr?: number; // 별점
  goodsNm?: string;
  goodsNo?: string;
  normalRevCnt?: string;
  photoVideoRevCnt?: string;
  revTotCnt?: number;
  totScr?: number;
  totalRevCnt?: string;
}

interface RevAllEvltListItem {
  evltItemNm?: string;
  evltItemNo?: string;
  evltValNm?: string;
  evltValNo?: string;
  evltValPrcnt?: string;
  mdtyEvltItemYn?: string;
}

export interface ReviewTotalType {
  goodsRevSummery?: GoodsRevSummary;
  revAllEvltList?: Array<RevAllEvltListItem>;
  revEvltListOfTopPcent?: Array<RevAllEvltListItem>;
}
