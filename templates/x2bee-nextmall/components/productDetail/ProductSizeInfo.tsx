import * as Types from "@/models/display/tasteBrandType";
import ProductInfoType from "@/models/goods/productInfoType";
import { ReviewTotalType } from "@/models/goods/productReviewTotal";
import styles from "./productsizeinfo.module.scss";
import { Rating } from "@mui/material";

type PropsType = {
  productData: Types.GoodsListItem;
  productInfo: ProductInfoType;
  reviewTotal: ReviewTotalType;
};

const ProductSizeInfo = ({
  productData,
  productInfo,
  reviewTotal,
}: PropsType) => {
  // 숫자 3자리 수마다 콤마
  const formatter = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "krw",
  });

  const shipping: Array<object> = productInfo.deliveryFeeList || [];
  // const ship1: object | undefined = shipping[0];

  console.log("shipping", shipping[0]);

  // console.log("stars", reviewTotal.goodsRevSummery?.avgScr);

  return (
    <div className={styles.infos}>
      <h1>{`${productData.goodsNm}`}</h1>
      <h2>상품 번호 : {`${productData.goodsNo}`}</h2>
      <h2>브랜드 : {`${productData.brandNm}`}</h2>
      <h1>가격 : {`${formatter.format(productData.norPrc || 0)}`}</h1>
      <div className={styles.infos__stars}>
        <Rating
          value={reviewTotal.goodsRevSummery?.avgScr || 0}
          precision={0.5}
          size="large"
          readOnly
          style={{ color: "#FACF19" }}
        />{" "}
        총 {reviewTotal.goodsRevSummery?.revTotCnt} 개의 리뷰
      </div>

      <div className={styles.border} />
      {/* <h2>배송비: {`${shipping[0]?.dlexCmt}`}</h2> */}
      {/* <div className={styles.border} /> */}
      <h3>상세 설명 : {`${productData.goodsDesc}`}</h3>
      <div className={styles.border} />
    </div>
  );
};

export default ProductSizeInfo;
