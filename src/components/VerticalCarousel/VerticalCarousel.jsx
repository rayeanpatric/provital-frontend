import React from "react";
import "./VerticalCarousel.scss";

const VerticalCarousel = ({ images = [], direction = "down" }) => {
  if (!images || images.length === 0) {
    console.warn("No images provided to VerticalCarousel");
    return null;
  }

  // Triple the images for smooth infinite scroll
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
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`);
                    e.target.src =
                      "https://via.placeholder.com/400x600?text=Medical+Care";
                  }}
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
