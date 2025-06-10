import React from "react";
import "./HorizontalCarousel.scss";

const HorizontalCarousel = ({ images = [] }) => {
  // Duplicate images array for infinite scroll
  const allImages = [...images, ...images];

  return (
    <div className="horizontal-carousel">
      <div className="horizontal-carousel__container">
        <div className="horizontal-carousel__track">
          {allImages.map((image, index) => (
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
