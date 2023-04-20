// Interface
import * as Types from "@/models/display/tasteBrandType";
// Redux Thunk
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  fetchFirstData,
  fetchNewArrivalData,
} from "@/store/home/newArrivalSlice";
import { updateNewArrival } from "@/store/home/bannerDataSlice";
// 기타
import MainSwiper from "./MainSwiper";
import styles from "./home.module.scss";

// !3번째 배너 : "새로 들어온 신상품"
export default function NewArrivalRecommend() {
  // 3-1번째 GET request : Category 받아오기
  const { dispCtgNos, entities, loading } = useSelector(
    (state: RootState) => state.newArrivalData
  ); // Redux State 읽기
  const dispatch = useDispatch<AppDispatch>();

  // 1st data fetch
  useEffect(() => {
    // console.log("ENTITIES", entities);
    if (entities.length === 0) {
      dispatch(fetchFirstData());
    }
  }, []);
  // console.log("ENTITIES", entities);
  // console.log("DISTPADFA", dispCtgNos);
  // 2nd data fetch
  useEffect(() => {
    dispatch(fetchNewArrivalData(dispCtgNos));
  }, [dispCtgNos]);

  const goodsListTemp: Array<Types.GoodsListItem> = [];

  entities.forEach((arr) => {
    arr?.goodsList?.forEach((goods: Types.GoodsListItem) => {
      (goods.colorInfo || [])
        .filter((color) => color.repYn === "Y")
        .forEach((color) => {
          (color.colorContInfo || [])
            .filter((colorCont) => colorCont.imgGbCd === "T01")
            .forEach((colorCont) => {
              if (colorCont.imgGbCd === "T01") {
                goodsListTemp.push({
                  mainImage: colorCont.dispGoodsContUrl,
                  ...goods,
                });
              }
            });
        });
    });
  });

  const goodsList = goodsListTemp.slice(0, 15);

  useEffect(() => {
    dispatch(updateNewArrival(goodsList));
  }, [goodsList]);

  return (
    <>
      <div className={styles.title}>
        <h1>새로 들어온 신상품</h1>
      </div>
      <MainSwiper
        list={goodsList}
        slidesPerView={5}
        slidesPerGroup={5}
        bannerName={"newArrivalData"}
      />
    </>
  );
}
