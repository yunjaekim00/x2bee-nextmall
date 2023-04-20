import React from "react";
import styles from "./styles.module.scss";

export default function GnbRight() {
  return (
    <>
      <ul className={styles.top__menu}>
        <li>
          <span>기획전</span>
        </li>
        <li>
          <span>이벤트</span>
        </li>
      </ul>
    </>
  );
}
