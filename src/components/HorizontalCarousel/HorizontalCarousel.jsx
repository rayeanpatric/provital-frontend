import React from "react";
import "./HorizontalCarousel.scss";
import { allImages } from "../VerticalCarousel/carouselData";

const HorizontalCarousel = () => {
  // Duplicate images array for infinite scroll
  const duplicatedImages = [...allImages, ...allImages];

  return (
    <div className="horizontal-carousel">
      <div className="horizontal-carousel__container">
        <div className="horizontal-carousel__track">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="horizontal-carousel__item"
            >
              <div className="horizontal-carousel__image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="horizontal-carousel__image"
                  loading={index > 7 ? "lazy" : "eager"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
