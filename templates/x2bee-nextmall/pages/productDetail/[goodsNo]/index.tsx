import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
// Types
import * as Types from "@/models/display/tasteBrandType";
import ProductInfoType from "@/models/goods/productInfoType";
import { ReviewTotalType } from "@/models/goods/productReviewTotal";
// Styles
import styles from "./product.module.scss";
// Component
import Head from "next/head";
import ProductSizeInfo from "@/components/productDetail/ProductSizeInfo";
import ImageGrid from "@/components/productDetail/ImageGrid";
import apiProductDetail from "@/pages/api/goods/apiProductDetail";
import apiReviewTotal from "@/pages/api/goods/apiReviewTotal";
// import InicisPay from "@/components/payment/inicisPay";

const goodsNo = () => {
  const router = useRouter();
  const item = router.query;
  const index = (item.index || 0) as number;

  // 새로 Fetch해 올 data
  const [productInfo, setProductInfo] = useState<ProductInfoType>({});
  const [reviewTotal, setReviewTotal] = useState<ReviewTotalType>({});

  useEffect(() => {
    async function fetchData() {
      const data = await apiProductDetail(item.goodsNo);
      setProductInfo(data);
    }
    fetchData();
    async function fetchReviewTotal() {
      const data = await apiReviewTotal(item.goodsNo);
      setReviewTotal(data);
    }
    fetchReviewTotal();
  }, [item]);

  let productData: Types.GoodsListItem = {};

  if (item.bannerName === "recentBuyData") {
    const arr = useSelector(
      (state: RootState) => state.bannerData.recentBuyData
    );
    productData = arr[index];
  } else if (item.bannerName === "tasteBrandData") {
    const arr = useSelector(
      (state: RootState) => state.bannerData.tasteBrandData
    );
    productData = arr[index];
  } else if (item.bannerName === "newArrivalData") {
    const arr = useSelector(
      (state: RootState) => state.bannerData.newArrivalData
    );
    productData = arr[index];
  }

  // console.log("Review", reviewTotal);
  // console.log("ProductInfo", productInfo);
  // console.log("ProductData", productData);
  // console.log("Review", reviewTotal?.goodsRevSummery);

  // 상단에 카테고리 순서 나열
  const RenderCtg = () => {
    return productInfo.dispCtgList?.map((ctg) => (
      <span key={`${ctg.depth}`}> &gt; {ctg.dispCtgNm}</span>
    ));
  };

  return (
    <>
      {productData.colorInfo && (
        <>
          {" "}
          <Head>
            <title>{productInfo.goodsNm}</title>
          </Head>
          <div className={styles.product}>
            <div className={styles.path}>
              <b>{productInfo.brandNm}</b>
              {RenderCtg()}
            </div>

            <div className={styles.product__container}>
              <div className={styles.product__main}>
                <div>
                  <ImageGrid imagePath={productData.colorInfo} />
                </div>
                <div className={styles.product__main__info}>
                  <ProductSizeInfo
                    productData={productData}
                    productInfo={productInfo}
                    reviewTotal={reviewTotal}
                  />
                  <div className={styles.product__main__info__buttons}>
                    <span className="btn_primary">장바구니에 담기</span>
                    <span className="btn_primary">바로 구매</span>
                    {/* <InicisPay /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default goodsNo;
