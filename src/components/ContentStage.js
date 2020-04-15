import React from "react";
import classNames from "classnames";
import Picture from "./atoms/picture";
import "./ContentStage.css";
import { transformImage } from "../utils/transformImage";

// interface ContentStageProps {
//   headline?: string;
//   subline?: string;
//   desktopImage: { url: string };
//   mobileImage: { url: string };
//   altAttribute?: string;
//   style: 'default' | 'negative';
//   className?: string;
// }

const ContentStage = ({ blok }) => {
  return (
    <div
      className={classNames(
        "stage",
        {
          "stage--dark": blok.style === "negative"
        },
        blok.className
      )}
    >
      <div className="stage__wrapper">
        <div className="stage__visual content-stage-teaser-placeholder">
          <Picture
            className="image-stage stage__picture"
            alt={blok.altAttribute ?? blok.headline ?? blok.subline}
            sources={[
              {
                baseUrl: transformImage(blok.desktopImage, "2880x1000"),
                size: { width: 2880, height: 1000 },
                breakpoint: 1441
              },
              {
                baseUrl: transformImage(blok.desktopImage, "2880x1000"),
                size: { width: 1440, height: 500 },
                retinaSize: { width: 2880, height: 1000 },
                breakpoint: 641
              },
              {
                baseUrl: transformImage(blok.mobileImage, "1280x1280"),
                size: { width: 640, height: 640 },
                retinaSize: { width: 1280, height: 1280 }
              }
            ]}
          />
        </div>
        {blok.subline && blok.headline && (
          <div className="stage__content">
            {blok.subline && (
              <h3
                className={classNames(
                  "headline headline--h3",
                  "stage__subline",
                  blok.style === "negative" && "stage__subline--bright"
                )}
              >
                {blok.subline}
              </h3>
            )}
            {blok.headline && (
              <h1
                className={classNames(
                  "headline headline--h1",
                  "stage__headline",
                  blok.style === "negative" && "stage__headline--bright"
                )}
              >
                {blok.headline}
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentStage;
