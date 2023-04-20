import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import CategoryMenu from "./CategoryMenu";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setCtgVisible } from "@/store/header/menuVisibleSlice";
import { fetchCategoryMenu } from "@/store/header/categoryMenuSlice";

export default function GnbLeft() {
  // category visible여부는 Redux로
  const { categoryVisible } = useSelector(
    (state: RootState) => state.categoryVisible
  );
  const { ctgList } = useSelector((state: RootState) => state.categoryMenu);
  const dispatch = useDispatch<AppDispatch>();

  // 브랜드 메뉴 visible은 일단 useState로
  const [brandVisible, setBrandVisible] = useState(false);

  // hover시 뜨는 '카테고리' 메뉴 list 가져오기
  useEffect(() => {
    if (ctgList.length === 0) {
      dispatch(fetchCategoryMenu());
    }
  }, [ctgList]);

  return (
    <>
      <ul className={styles.top__menu}>
        <li
          onMouseOver={() => dispatch(setCtgVisible(true))}
          onMouseLeave={() => dispatch(setCtgVisible(false))}
        >
          <span>카테고리</span>
          {categoryVisible && <CategoryMenu ctgList={ctgList} />}
        </li>
        <li
          onMouseOver={() => setBrandVisible(true)}
          onMouseLeave={() => setBrandVisible(false)}
        >
          <span>브랜드</span>
        </li>
        <li>
          <span>편집샵</span>
        </li>
        <li>
          <span>아울렛</span>
        </li>
        <li>
          <span>
            <Link href="/nft">NFT</Link>
          </span>
        </li>
        {categoryVisible && <div className={styles.top__menu__bottom} />}
        {/* 메뉴 hover시 전체 바탕 어두워지게 하는 부분 */}
      </ul>
    </>
  );
}
