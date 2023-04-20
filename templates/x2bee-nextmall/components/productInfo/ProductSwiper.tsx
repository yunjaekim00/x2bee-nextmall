import { useState } from "react";
// Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // Image
// import ImageFallback from "../ImageFallback";

// // * 안 쓰는 파일...

// type PropsType = {
//   imagePath: Array<Types.coordGoodsItem> | undefined;
// };

// const ProductSwiper = ({ imagePath }: PropsType) => {
//   const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;

//   return (
//     <div>
//       <Swiper
//         navigation={true}
//         slidesPerView={3}
//         slidesPerGroup={3}
//         grabCursor={true}
//         spaceBetween={1}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Navigation]}
//         className="mainSwiper"
//         // Swiper CSS는 전무 /styles/base.scss에 있음
//       >
//         {imagePath?.map((item, index) => {
//           return (
//             <SwiperSlide key={`${item?.itmNo} + ${index}`}>
//               <div>
//                 <ImageFallback
//                   width={188.797}
//                   height={285.117}
//                   src={`${imgBaseUrl}${item.contFilePathNm}`}
//                   alt={item?.brandNm}
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
