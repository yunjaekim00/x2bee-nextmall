import Link from "next/link";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <>
      <ul className={styles.top__list}>
        <li>
          <Link href="/">
            <img src="/images/no-image-bg.svg" alt="logo" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Logo;
