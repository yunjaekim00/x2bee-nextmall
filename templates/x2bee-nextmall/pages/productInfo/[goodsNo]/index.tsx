import { useRouter } from "next/router";
import styles from "./product.module.scss";
import { useState, useEffect } from "react";
// Types
import ProductInfoType from "@/models/goods/productInfoType";
import Head from "next/head";
// import ProductSwiper from "@/components/productInfo/ProductSwiper";
import ImageFallback from "@/components/ImageFallback";
import apiProductDetail from "@/pages/api/goods/apiProductDetail";

const ProductInfo = () => {
  // const API_URL = "/api/goods/1/ko/goods/";
  const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;

  const router = useRouter();
  const item = router.query.goodsNo;
  const image = router.query.image;

  const [product, setProduct] = useState<ProductInfoType>({});
  //* 아니 어떻게 똑같은 API인데 아이템번호마다 reponse 형태가 다 다른가... itemType별로 나누고 각각 따로 처리
  const [itemType, setItemType] = useState<string>("Clothes");
  // const [images, setImages] = useState<string[]>([]);
  // const images: string[] = [];

  // fetch product data
  useEffect(() => {
    async function fetchData() {
      const data = await apiProductDetail(item);
      setProduct(data);
    }
    fetchData();
  }, [item]);

  console.log("Product", product);

  // useEffect(() => {
  //   if (product.coordGoodsList && product.coordGoodsList.length > 0) {
  //     setItemType("Clothes");
  //     product.coordGoodsList.map((element) => {
  //       setImages((arr) => [...arr, `${element.contFilePathNm}`]);
  //       // images.push(`${element.contFilePathNm}`);
  //     });
  //   }
  // }, [product]);

  // console.log("Images", images);

  // 상단에 카테고리 순서 나열
  const RenderCtg = () => {
    return product.dispCtgList?.map((ctg) => (
      <span key={`${ctg.depth}`}> &gt; {ctg.dispCtgNm}</span>
    ));
  };

  // const ImageArray = () => {
  //   // item type 분리해보기
  //   if (product.coordGoodsList && product.coordGoodsList.length > 0) {
  //     setItemType("Clothes");
  //     product.coordGoodsList.map((element) => {
  //       setImages((arr) => [...arr, `${element.contFilePathNm}`]);
  //     });
  //   }
  //   return <>{images[0]}</>;
  // };

  return (
    <>
      <Head>
        {/* 브라우저 탭 상단의 이름 */}
        <title>{product.goodsNm}</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.path}>
            <b>{product.brandNm}</b>
            {RenderCtg()}
          </div>
          <div className={styles.product__main}>
            {/* <ProductSwiper imagePath={product.colorList} /> */}
            <ImageFallback
              width={376}
              height={570}
              src={`${imgBaseUrl}${image}`}
              alt={product.goodsNm}
              priority="false"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
