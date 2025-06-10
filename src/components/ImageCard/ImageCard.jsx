import React from "react";
import "./ImageCard.scss";

const ImageCard = ({ image, title, description, duration }) => {
  return (
    <div className="image-card" role="article">
      <div className="image-card__image-container">
        {" "}
        <img
          src={image}
          alt={`${title} - ${description}`}
          className="image-card__image"
          loading="lazy"
        />
        {duration && (
          <div
            className="image-card__duration"
            aria-label={`Duration: ${duration}`}
          >
            <span>{duration}</span>
          </div>
        )}
      </div>
      <div className="image-card__content">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
