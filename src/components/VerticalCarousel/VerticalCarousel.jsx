import React from "react";
import "./VerticalCarousel.scss";
import { carousel1Images, carousel2Images } from "./carouselData";

const VerticalCarousel = ({ direction = "down" }) => {
  const images = direction === "down" ? carousel1Images : carousel2Images;

  if (!images || images.length === 0) {
    console.warn("No images provided to VerticalCarousel");
    return null;
  }

  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className={`vertical-carousel vertical-carousel--${direction}`}>
      <div className="vertical-carousel__container">
        <div className="vertical-carousel__track">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="vertical-carousel__item"
            >
              <div className="vertical-carousel__image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="vertical-carousel__image"
                  loading={index > 3 ? "lazy" : "eager"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
