import styles from "../searchmodal.module.scss";
import styles2 from "./search.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
// Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setShowSearchModal } from "@/store/modal/showModalSlice";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.overlay__search}>
      <div className={styles2.search}>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <div className={styles2.search__icon}>
          <RiSearch2Line />
        </div>
      </div>
      <div className={styles2.close}>
        <MdClose onMouseUp={() => dispatch(setShowSearchModal(false))} />
      </div>
    </div>
  );
};

export default Search;
