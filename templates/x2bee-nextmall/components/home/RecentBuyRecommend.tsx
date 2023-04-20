// 기타
import * as Types from "@/models/display/tasteBrandType";
import styles from "./home.module.scss";
import MainSwiper from "./MainSwiper";
// Redux Thunk
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchRecentBuyData } from "@/store/home/recentBuySlice";
import { updateRecentBuy } from "@/store/home/bannerDataSlice";

// ! 2번째 배너 : "구매하신 상품과, 이 상품 어떠세요?"
export default function RecentBuyRecommend() {
  const { entities, loading } = useSelector(
    (state: RootState) => state.recentBuyData
  ); // Redux State 읽기
  const dispatch = useDispatch<AppDispatch>();

  // data fetch
  useEffect(() => {
    if (entities.length === 0) {
      dispatch(fetchRecentBuyData());
    }
  }, []);

  // console.log("entities", entities);

  const newBrandsTemp: Array<Types.GoodsListItem> = [];

  entities.forEach((goods: Types.GoodsListItem, idx) => {
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

  const newBrands = newBrandsTemp.slice(0, 15);

  useEffect(() => {
    dispatch(updateRecentBuy(newBrands));
  }, [newBrands]);

  return (
    <>
      <div className={styles.title}>
        <h1>이런 상품 어떠세요?</h1>
      </div>
      <MainSwiper
        list={newBrands}
        slidesPerView={5}
        slidesPerGroup={5}
        bannerName={"recentBuyData"}
      />
    </>
  );
}
