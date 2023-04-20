import { useState, useLayoutEffect, useEffect } from "react";
import styles from "./styles.module.scss";
import Logo from "./Logo";
import TopRight from "./TopRight";
import GnbLeft from "@/components/header/GnbLeft";
import GnbRight from "./GnbRight";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Top() {
  // scroll down시 header UI 변경
  const [slimHeader, setSlimHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHamburger, setShowHamburger] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useLayoutEffect(() => {
    function handleScroll() {
      setSlimHeader(window.pageYOffset > 40);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (windowWidth < 860) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  }, [windowWidth]);

  const handleHamburgerClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {/* Mobile 반응형은 아직 미완성... refactor 필요 */}
      {showHamburger ? (
        <div className={styles.mobile}>
          <Logo /> <div></div>
          <div onClick={handleHamburgerClick}>
            {isClicked ? (
              <div className={styles.mobile__icons}>
                <FaTimes />
                <TopRight />
                <GnbLeft />
                <GnbRight />
              </div>
            ) : (
              <FaBars />
            )}
          </div>
        </div>
      ) : (
        <div className={`${styles.top} ${slimHeader && styles.top__slim}`}>
          <div
            className={`${styles.top__container} ${
              slimHeader && styles.top__container__slim
            }`}
          >
            <div
              className={`${
                slimHeader ? styles.top__leftslim : styles.top__leftthick
              }`}
            >
              <div className={`${slimHeader && styles.top__moveFromTop}`}>
                <Logo />
              </div>

              <div className={`${slimHeader && styles.top__moveFromLeft}`}>
                <GnbLeft />
              </div>
            </div>
            <div></div>

            <div
              className={`${
                slimHeader ? styles.top__rightslim : styles.top__rightthick
              }`}
            >
              <div className={`${slimHeader && styles.top__moveFromRight}`}>
                <GnbRight />
              </div>
              <div className={`${slimHeader && styles.top__moveFromTop}`}>
                <TopRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
