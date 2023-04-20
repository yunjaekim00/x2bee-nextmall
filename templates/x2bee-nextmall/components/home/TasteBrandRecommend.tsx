// 기타
import * as Types from "@/models/display/tasteBrandType";
import MainSwiper from "./MainSwiper";
import styles from "./home.module.scss";
// Redux Thunk
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchTasteBrandData } from "@/store/home/tasteBrandSlice";
import { updateTasteBrand } from "@/store/home/bannerDataSlice";

// !1번째 배너 : 취향 브랜드 신상품@최근 2주 새로 들어온 신상품이에요
export default function TasteBrandRecommend() {
  const { entities, loading } = useSelector(
    (state: RootState) => state.tasteBrandData
  ); // Redux State 읽기
  const dispatch = useDispatch<AppDispatch>();

  // data fetch
  useEffect(() => {
    if (entities.length === 0) {
      dispatch(fetchTasteBrandData());
    }
  }, []);

  const newBrandsTemp: Array<Types.GoodsListItem> = [];
  const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;

  entities.forEach((arr: Types.BrandList) => {
    (arr.goodsList || []).forEach((goods, idx) => {
      (goods.colorInfo || []).forEach((color) => {
        (color.colorContInfo || []).forEach((colorCont) => {
          if (colorCont.imgGbCd === "T01") {
            newBrandsTemp.push({
              mainImage: colorCont.dispGoodsContUrl,
              ...goods,
            });
          }
        });
      });
    });
  });

  const newBrands = newBrandsTemp.slice(0, 15);

  useEffect(() => {
    dispatch(updateTasteBrand(newBrands));
  }, [newBrands]);

  return (
    <>
      <div className={styles.title}>
        <h1>취향 브랜드 신상품</h1>
      </div>
      <MainSwiper
        list={newBrands}
        slidesPerView={5}
        slidesPerGroup={5}
        bannerName={"tasteBrandData"}
      />
    </>
  );
}
