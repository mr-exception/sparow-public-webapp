import React from "react";
import { IImageProps } from "./props.inteface";

const Image:React.FC<IImageProps> = ({
  source,
  alt = "image",
  style = {},
  className = "",
}: IImageProps) => {
  return <img src={source} alt={alt} style={style} className={className} />;
};

export default Image;
