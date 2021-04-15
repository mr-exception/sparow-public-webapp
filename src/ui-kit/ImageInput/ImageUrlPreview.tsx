import React, { useRef } from "react";
import Styles from "./ImageInput.module.scss";

const ImageUrlPreview: React.FC<IUrlPreviewProps> = ({
  value,
  onChange,
  label,
  disabled,
  errors,
}: IUrlPreviewProps) => {
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
        <img className={Styles.image} src={value} />
      </div>
      <div className={Styles.input}>{label}</div>
      <ul className={Styles.error}>
        {(errors || []).map((error, key) => (
          <li key={key}>{error}</li>
        ))}
      </ul>
    </div>
  );
};
export default ImageUrlPreview;
