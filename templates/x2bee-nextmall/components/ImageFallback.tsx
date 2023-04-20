import React, { useState } from "react";
import Image from "next/image";

const ImageFallback = (props: any) => {
  const { src, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const handleImgError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.preventDefault();
    setImgSrc("/images/no-image-bg.svg");
  };

  return (
    <Image {...rest} src={imgSrc} onError={handleImgError} alt="no-image" />
  );

  // const { src, ...rest } = props;
  // const fallbackSrc = "/images/no-image-bg.svg";
  // const [imgSrc, setImgSrc] = useState(false);
  // const [oldSrc, setOldSrc] = useState(src);
  // if (oldSrc !== src) {
  //   setImgSrc(false);
  //   setOldSrc(src);
  // }
  // return (
  //   <Image
  //     {...rest}
  //     src={imgSrc ? fallbackSrc : src}
  //     onError={(e) => {
  //       setImgSrc(true);
  //     }}
  //     alt="no-image"
  //   />
  // );
};

export default ImageFallback;
