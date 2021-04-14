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
  cropToSqure = false,
}: IImageInputProps) => {
  let image = typeof value === "string" ? value : "";
  if (value instanceof File) {
    image = URL.createObjectURL(value);
  }
  // let fileName = typeof value === "string" ? value : "";
  // if (value instanceof File) {
  //   fileName = File.name;
  // }
  const fileInput = useRef<HTMLInputElement>(null);
  return (
    <div
      className={Styles.container}
      onClick={() => {
        if (fileInput.current) fileInput.current.click();
      }}
    >
      <input
        hidden
        type="file"
        ref={fileInput}
        onChange={(event) => {
          if (event.target.files) {
            if (event.target.files.length > 0) {
              const file = event.target.files[0];
              onChange(file);
            }
          }
        }}
      />
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={image} />
      </div>
      <div className={Styles.input}>{label}</div>
    </div>
  );
};
export default ImageInput;
