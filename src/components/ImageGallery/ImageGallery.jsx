import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.scss";

const ImageGallery = ({ items, currentIndex }) => {
  return (
    <div className="image-gallery">
      <div
        className="image-gallery__container"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
        }}
      >
        {items.map((item, index) => (
          <div key={`${item.title}-${index}`} className="image-gallery__item">
            <ImageCard
              image={item.image}
              title={item.title}
              description={item.description}
              duration={item.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
