import * as Types from "./tasteBrandType";

export default interface NewProductList {
  ctgNo?: string;
  ctgNm?: string;
  dispSeq?: number;
  goodsList?: Array<Types.GoodsListItem>;
}
