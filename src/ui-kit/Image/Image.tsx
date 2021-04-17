import React from "react";

const Image: React.FC<IImageProps> = ({
  source,
  alt = "image",
  style = {},
  className = "",
  ref,
}: IImageProps) => {
  return (
    <img src={source} alt={alt} style={style} className={className} ref={ref} />
  );
};

export default Image;
