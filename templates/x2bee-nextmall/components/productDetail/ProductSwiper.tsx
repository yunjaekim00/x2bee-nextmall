import { useState } from "react";
// Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // Image
// import ImageFallback from "../ImageFallback";
// // Types
// import * as Types from "@/models/newArrivalType";

// type PropsType = {
//   imagePath: Array<Types.ColorItem> | undefined;
// };

// const ProductSwiper = ({ imagePath }: PropsType) => {
//   const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;
//   const colorItem = imagePath?.[0].colorContInfo;

//   console.log("imagePath", colorItem);

//   return (
//     <div>
//       <Swiper
//         navigation={true}
//         slidesPerView={5}
//         slidesPerGroup={5}
//         grabCursor={true}
//         spaceBetween={1}
//         modules={[Pagination, Navigation]}
//         className="mainSwiper"
//         // Swiper CSS는 전무 /styles/base.scss에 있음
//       >
//         {colorItem?.map((item, index) => {
//           return (
//             <SwiperSlide key={`${item?.imgGbCd}` + `${index}`}>
//               <div>
//                 <ImageFallback
//                   width={188.797}
//                   height={285.117}
//                   src={`${imgBaseUrl}${item.dispGoodsContUrl}`}
//                   alt={item?.imgGbCd}
//                   priority="false"
//                 />
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default ProductSwiper;
