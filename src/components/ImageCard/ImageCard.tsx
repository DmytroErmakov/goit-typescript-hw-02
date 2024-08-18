import React from "react";
import css from "../ImageCard/ImageCard.module.css";


interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}


interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className={css.card}>
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={css.image}
    />
  </div>
);

export default ImageCard;
