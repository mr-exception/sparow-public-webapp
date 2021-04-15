import React from "react";
import ImageUrlPreview from "./ImageUrlPreview";
import ImageCrop from "./ImageCrop";

const ImageInput: React.FC<IImageInputProps> = ({
  value = undefined,
  onChange = () => {
    // do nothing.
  },
  label = "label",
  disabled = false,
  errors = [],
  crop,
  onCroped = () => {
    // do nothing
  },
}: IImageInputProps) => {
  if (typeof value === "string") {
    return (
      <ImageUrlPreview
        value={value}
        label={label}
        errors={errors}
        disabled={disabled}
        onChange={onChange}
      />
    );
  }
  if (value instanceof File) {
    if (crop) {
      return (
        <ImageCrop
          value={value}
          label={label}
          errors={errors}
          disabled={disabled}
          onChange={onChange}
          aspect={crop}
          onCropped={onCroped}
        />
      );
    } else {
      return (
        <ImageUrlPreview
          value={URL.createObjectURL(value)}
          label={label}
          errors={errors}
          disabled={disabled}
          onChange={onChange}
        />
      );
    }
  }
  return null;
};
export default ImageInput;
