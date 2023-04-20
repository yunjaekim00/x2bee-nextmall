import { useState, useEffect } from "react";
import {
  FiSearch,
  FiLogIn,
  FiLogOut,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

import styles from "./styles.module.scss";
import Link from "next/link";
import { SearchModal } from "../SearchModal";
import Search from "./Search";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";

const TopRight = () => {
  const { isLogin, totalBasketCount } = useSelector(
    (state: RootState) => state.isLogin
  );
  const { showSearchModal } = useSelector(
    (state: RootState) => state.showModal
  );
  const { loginResponse } = useSelector((state: RootState) => state.signIn);
  const dispatch = useDispatch<AppDispatch>();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(showSearchModal);
  }, [showSearchModal]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <ul className={`${styles.top__list} ${styles.top__list__right}`}>
        <li onClick={handleShowModal}>
          <FiSearch />

          {showModal && (
            <SearchModal>
              <Search />
            </SearchModal>
          )}
        </li>
        {isLogin ? (
          <>
            <li>
              <Link href="/signout">
                <FiLogOut />
              </Link>
            </li>
            <li>
              <Link href="/mypage/main">
                <FiUser />
              </Link>
            </li>
            <li>
              <FiHeart />
            </li>
            <li>
              <div className={styles.shoppingbag}>
                <FiShoppingCart />
                <span>{totalBasketCount}</span>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/signin">
                <FiLogIn />
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default TopRight;
