import styles from "./layout.module.scss";
import Link from "next/link";
import ctglist from "@/json/mypage-sidebar-menu.json";

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mypage}>
      <aside className={styles.menu}>
        {ctglist?.map((list, idx) => (
          <ul key={`mymenu` + `${idx}`}>
            {list.largeCtg}
            {list.smallCtg.map((item, idx) => (
              <li key={`mysubmenu` + `${idx}`}>
                <Link href={`${item.pathname}` + `${item.subpathname}`}>
                  {item.menu}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default MyPageLayout;
