import React from "react";

// type Size =
//   | { width: number, height: number }
//   | { width: number }
//   | { height: number };

// type Quality = number | "auto";
// type Format = "jpg" | "png" | "auto";

// interface Source {
//   baseUrl: string;
//   size: Size;
//   retinaSize?: Size;
//   breakpoint?: number;
//   quality?: Quality;
//   format?: Format;
// }

// // TODO Require sources once all usages have been migrated (SPH-413)
// interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
//   sources?: Source[];
//   pictureClassName?: string;
// }

export const getImageUrl = (baseUrl = "/", size, quality, format) =>
  baseUrl
    .replace("w_{width}", `w_${"width" in size ? size.width : "auto"}`)
    .replace("h_{height}", `h_${"height" in size ? size.height : "auto"}`)
    .replace("q_{quality}", `q_${quality || "auto"}`)
    .replace("f_{format}", `f_${format || "auto"}`);

const Picture = ({ sources, pictureClassName, ...imgProps }) => {
  const defaultSource = sources && sources[sources.length - 1];
  return (
    <picture className={pictureClassName}>
      {sources &&
        sources.map(
          ({ baseUrl, size, retinaSize, breakpoint, quality, format }, key) => (
            <source
              key={key}
              srcSet={
                getImageUrl(baseUrl, size, quality, format) +
                (retinaSize
                  ? `, ${getImageUrl(baseUrl, retinaSize, quality, format)} 2x`
                  : "")
              }
              media={`(min-width: ${breakpoint || 0}px)`} // TODO Check if (min-width: 0px) is even required (SPH-413)
            />
          )
        )}
      <img
        alt=""
        src={
          defaultSource &&
          getImageUrl(defaultSource.baseUrl, defaultSource.size)
        }
        {...imgProps}
      />
    </picture>
  );
};

export default Picture;
