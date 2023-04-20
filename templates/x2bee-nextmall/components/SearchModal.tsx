import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./searchmodal.module.scss";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setShowSearchModal } from "@/store/modal/showModalSlice";

interface PortalProps {
  children: ReactNode;
}

export const SearchModal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  // const [mounted, setMounted] = useState(false);
  const { showSearchModal } = useSelector(
    (state: RootState) => state.showModal
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    dispatch(setShowSearchModal(true));
  }, []);
  // console.log("PortalSHow", showSearchModal);

  return showSearchModal && ref.current
    ? createPortal(
        <>
          <div
            className={styles.background}
            onClick={() => dispatch(setShowSearchModal(false))}
          ></div>
          <div className={styles.overlay}>{props.children}</div>
        </>,
        ref.current
      )
    : null;
};
