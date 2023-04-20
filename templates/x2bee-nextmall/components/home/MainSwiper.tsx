// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// 기타
import Link from "next/link";
import styles from "./home.module.scss";
// Types
import * as Types from "@/models/display/tasteBrandType";
// next/image의 Image에서 onError 절대 동작 안해서 이 방법이 거의 유일
import ImageFallback from "../ImageFallback";

type PropsType = {
  list: Array<Types.GoodsListItem>;
  slidesPerView: number;
  slidesPerGroup: number;
  bannerName: string;
};

const MainSwiper = ({
  list,
  slidesPerView,
  slidesPerGroup,
  bannerName,
}: PropsType) => {
  const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;

  // 숫자 3자리 수마다 콤마
  const formatter = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "krw",
  });

  // console.log("LISt, Banner", list, bannerName);

  return (
    <div>
      <Swiper
        navigation={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          720: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        // slidesPerView={slidesPerView}
        // slidesPerGroup={slidesPerGroup}
        grabCursor={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mainSwiper"
        // Swiper CSS는 전무 /styles/base.scss에 있음
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={`${item?.goodsNo} + ${index}`}>
              <div>
                <Link
                  href={{
                    pathname: "/productDetail/[goodsNo]",
                    query: {
                      index,
                      bannerName,
                      goodsNo: item.goodsNo,
                      image: item.mainImage,
                    },
                  }}
                  as={`/productDetail/${item.goodsNo}`}
                >
                  <ImageFallback
                    width={188.797}
                    height={285.117}
                    src={`${imgBaseUrl}${item.mainImage}`}
                    alt={item?.brandNm}
                    priority="false"
                  />

                  <div className={styles.swiperText}>
                    <strong>{item.brandNm}</strong>
                    <span>{item.goodsNm}</span>
                    <strong>{formatter.format(item.salePrc || 0)}</strong>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
