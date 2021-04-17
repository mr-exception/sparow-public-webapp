import React, { useEffect, useRef, useState } from "react";
import Styles from "./ImageInput.module.scss";
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import Image from "ui-kit/Image/Image";

function getCroppedImg(
  image: HTMLImageElement,
  crop: ReactCrop.PercentCrop
): Promise<File> {
  if (
    crop.x === undefined ||
    crop.y === undefined ||
    crop.width === undefined ||
    crop.height === undefined
  ) {
    return new Promise((resolve, reject) => {
      reject("invalid crop");
    });
  }

  const { x, y, width, height, aspect = 1 } = crop;
  const canvas = document.createElement("canvas");

  const finalWidth = Math.floor((width * image.width) / 100);
  const finalHeight = Math.floor(finalWidth * aspect);
  canvas.width = finalWidth;
  canvas.height = finalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return new Promise((resolve, reject) => {
      reject("canvas creation failed");
    });
  }
  console.log(finalWidth, finalHeight);
  ctx.drawImage(
    image,
    Math.floor(x * image.width) / 100,
    Math.floor(y * image.height) / 100,
    finalWidth,
    finalHeight,
    0,
    0,
    finalWidth,
    finalHeight
  );

  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    const result = canvas.toDataURL("image/jpeg", 100);

    const arr = result.split(",");
    if (arr.length < 2) {
      return reject("invalid data url");
    }
    const mimeParts = arr[0].match(/:(.*?);/);
    if (!mimeParts) {
      return reject("invalid mime");
    }
    const mime = mimeParts[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return resolve(new File([u8arr], "image.jpeg", { type: mime }));
  });
}

const ImageCrop: React.FC<IImagePreviewProps> = ({
  value,
  onChange,
  label,
  disabled,
  errors,
  onCropped = () => {
    // do nothing
  },
  aspect,
}: IImagePreviewProps) => {
  const [crop, set_crop] = useState<ReactCrop.Crop>({ aspect });
  const [image, set_image] = useState<string>();
  const [cropped_by_image_load, set_cropped_by_image_load] = useState(false);
  useEffect(() => {
    set_image(URL.createObjectURL(value));
  }, [value]);
  const img = useRef<HTMLImageElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  if (!image) return null;
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
        <Image source={image} ref={img} style={{ display: "none" }} />
        <ReactCrop
          src={image}
          crop={crop}
          onChange={async (newCrop, percentCrop) => {
            if (
              percentCrop.x === 0 &&
              percentCrop.y === 0 &&
              percentCrop.width === 0 &&
              percentCrop.height === 0
            )
              return;
            if (cropped_by_image_load) {
              set_cropped_by_image_load(false);
              return;
            }
            set_crop(newCrop);
            if (img.current) {
              try {
                const result = await getCroppedImg(img.current, percentCrop);
                onCropped(result);
              } catch (error) {}
            }
          }}
          onImageLoaded={async (data) => {
            const length = data.width > data.height ? data.height : data.width;
            const x = (data.width - length) / 2;
            const y = (data.height - length) / 2;

            set_crop({
              width: length,
              height: length,
              x,
              y,
              aspect,
              unit: "px",
            });
            set_cropped_by_image_load(true);
            if (img.current) {
              try {
                const result = await getCroppedImg(img.current, {
                  width: (length / data.width) * 100,
                  height: (length / data.height) * 100,
                  x: (x / data.width) * 100,
                  y: (y / data.height) * 100,
                  aspect,
                });
                onCropped(result);
              } catch (error) {
                console.log(error);
              }
            }
            return false;
          }}
        />
      </div>
      <div
        className={Styles.input}
        onClick={() => {
          if (fileInput.current) fileInput.current.click();
        }}
      >
        {label}
      </div>
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
      <ul className={Styles.error}>
        {(errors || []).map((error, key) => (
          <li key={key}>{error}</li>
        ))}
      </ul>
    </div>
  );
};
export default ImageCrop;
