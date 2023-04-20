import styles from "./categorymenu.module.scss";
import Link from "next/link";
import LrgCtgListItemType from "@/models/display/headerCtgList";
// 카테고리 메뉴 Visible 용도
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setCtgVisible } from "@/store/header/menuVisibleSlice";

type CtgProps = {
  ctgList: Array<LrgCtgListItemType>;
};

const CategoryMenu = ({ ctgList }: CtgProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(setCtgVisible(false));
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menu__top}>
        <div className={styles.menu__top__col}>
          {ctgList.map((list, idx) => (
            <ul key={`ctglist` + `${idx}`}>
              <b>{list.dispCtgNm}</b>
              {list.midCtgList?.map((item, idx) => (
                <li key={`midctglist` + `${idx}`}>
                  <Link
                    href={{
                      pathname: "/categoryList/[categoryNo]",
                      query: {
                        ctgNo: item.dispCtgNo,
                      },
                    }}
                    as={`/categoryList/${item.dispCtgNo}`}
                    onClick={handleClick}
                  >
                    {item.dispCtgNm}
                  </Link>
                </li>
              ))}
              <li></li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
