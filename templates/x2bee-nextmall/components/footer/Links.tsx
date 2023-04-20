import Link from "next/link";
import styles from "./styles.module.scss";
import links from "@/json/footer-links.json";
import info from "@/json/footer-company-info.json";

const Links = () => {
  return (
    <>
      <div className={styles.footer__info}>
        <img src="/images/header-footer-logo.png" alt="logo" />
        {info.links.map((link) => (
          <div key={link.name}>{link.name}</div>
        ))}
      </div>

      <div className={styles.footer__links}>
        {links.map((link, i) => (
          <ul key={link.heading}>
            <b>{link.heading}</b>
            {link.links.map((link) => (
              <li key={link.name}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};
export default Links;
