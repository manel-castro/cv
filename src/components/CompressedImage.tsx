import React, { useEffect, useRef, useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  quality?: number; // 0-1
  maxWidth?: number;
  maxHeight?: number;
}

export default function CompressedImage({
  src,
  quality = 0.75,
  maxWidth,
  maxHeight,
  alt,
  ...rest
}: Props) {
  const [dataSrc, setDataSrc] = useState<string | null>(null);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (cancelled.current) return;
      try {
        const canvas = document.createElement("canvas");
        let { width, height } = img;

        if (maxWidth && width > maxWidth) {
          const ratio = maxWidth / width;
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        if (maxHeight && height > maxHeight) {
          const ratio = maxHeight / height;
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setDataSrc(src);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);

        // prefer jpeg output for compression; fallback to png
        const mime = "image/jpeg";
        const dataUrl = canvas.toDataURL(mime, quality);
        setDataSrc(dataUrl);
      } catch (e) {
        setDataSrc(src);
      }
    };
    img.onerror = () => {
      if (!cancelled.current) setDataSrc(src);
    };
    img.src = src;

    return () => {
      cancelled.current = true;
    };
  }, [src, quality, maxWidth, maxHeight]);

  return (
    <img src={dataSrc || src} alt={alt} {...rest} />
  );
}
