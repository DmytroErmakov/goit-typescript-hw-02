import React from "react";
import css from "./ImageGallery.module.css";
import { Image } from "../../types/image";


// interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string;
//   description?: string;
//   user: {
//     name: string;
//   };
//   likes: number;
// }


interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => (
  <ul className={css.gallery}>
    {images.map(image => (
      <li
        key={image.id}
        className={css.galleryItem}
        onClick={() => onClick(image)}
      >
        <div className={css.imageWrapper}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className={css.image}
          />
        </div>
      </li>
    ))}
  </ul>
);

export default ImageGallery;
