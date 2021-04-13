import React, { useRef } from "react";
import { IImageInputProps } from "./props.inteface";
import Styles from "./ImageInput.module.scss";

const ImageInput: React.FC<IImageInputProps> = ({
  value = undefined,
  onChange = () => {
    // do nothing.
  },
  label = "label",
  disabled = false,
  errors,
}: IImageInputProps) => {
  let image = typeof value === "string" ? value : "";
  if (value instanceof File) {
    image = URL.createObjectURL(value);
  }
  let fileName = typeof value === "string" ? value : "";
  if (value instanceof File) {
    fileName = File.name;
  }
  const fileInput = useRef(null);
  return (
    <div className={Styles.container}>
      <input hidden type="file" ref={fileInput} />
      <div className={Styles.input}>{fileName}</div>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={image} />
      </div>
    </div>
  );
};
export default ImageInput;
