import styles from "./imagegrid.module.scss";
import { useState } from "react";
// Image
// import ImageFallback from "../ImageFallback";
// import Image from "next/image";
// Types
import * as Types from "@/models/display/tasteBrandType";

type PropsType = {
  imagePath: Array<Types.ColorInfoItem> | undefined;
};

const ImageGrid = ({ imagePath }: PropsType) => {
  const imgBaseUrl = process.env.NEXT_PUBLIC_PRODUCT_IMG;
  const arr = imagePath?.[0].colorContInfo;
  let colorItem = new Array();
  if (arr && arr.length > 10) {
    colorItem = [...arr.slice(1, 10)];
  } else if (arr) {
    colorItem = [...arr];
  }

  const [active, setActive] = useState(0);

  // console.log("colorItem", colorItem);
  // console.log("active", colorItem?.[active].dispGoodsContUrl);

  return (
    <div className={styles.images}>
      <div className={styles.images__list}>
        {colorItem?.map((item, index) => (
          <div
            key={index}
            className={`${styles.images__list__item} ${
              index === active && styles.active
            }`}
            onClick={() => setActive(index)}
          >
            {/* <ImageFallback
              width={38}
              height={58} */}
            <img
              key={index}
              src={`${imgBaseUrl}${item.dispGoodsContUrl}`}
              alt={item?.imgGbCd}
            />
          </div>
        ))}
      </div>

      <div className={styles.images__large}>
        {/* <Image
          width={380}
          height={580} */}
        <img
          src={`${imgBaseUrl}${colorItem?.[active].dispGoodsContUrl}`}
          alt="largeImage"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
