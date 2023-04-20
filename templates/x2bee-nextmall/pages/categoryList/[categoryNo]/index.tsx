import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./category.module.scss";
import * as Types from "@/models/display/tasteBrandType";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import apiCategoryGoodsList from "@/pages/api/display/apiCategoryGoodsList";

const CategoryNo = () => {
  // url 주소창에 있는 주소
  const router = useRouter();
  const ctgNum = router.query.categoryNo;
  // image URL
  const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;
  // 숫자 3자리 수마다 콤마
  const formatter = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "krw",
  });

  const [ctgList, setCtgList] = useState<Array<Types.GoodsListItem>>([]);

  useEffect(() => {
    const fetchCategoryGoodsList = async () => {
      const { goodsList } = await apiCategoryGoodsList(ctgNum);
      setCtgList(goodsList);
    };
    fetchCategoryGoodsList();
  }, [ctgNum]);

  return (
    <div className={styles.category}>
      {ctgList?.map((list, idx) => (
        <div
          className={styles.category__container}
          key={`list.goodsNo` + `${idx}`}
        >
          <Link
            href={{
              pathname: "/productInfo/[goodsNo]",
              query: {
                index: idx,
                bannerName: "Category",
                goodsNo: list.goodsNo,
                image: list.dispGoodsContUrl,
              },
            }}
            as={`/productInfo/${list.goodsNo}`}
          >
            <ImageFallback
              width={188.797}
              height={285.117}
              src={`${imgBaseUrl}${list.dispGoodsContUrl}`}
              alt={list?.brandNm}
              priority="false"
            />
          </Link>
          <div className={styles.category__text}>
            <strong>{list.brandNm}</strong>
            <span>{list.goodsNm}</span>
            <strong>{formatter.format(list.salePrc || 0)}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNo;
