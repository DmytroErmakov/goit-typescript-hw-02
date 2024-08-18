import React from "react";
import { Image } from "../../types/image";

import css from "../ImageCard/ImageCard.module.css";


// interface Image {
//   urls: {
//     small: string;
//   };
//   alt_description: string;
// }



// interface ImageCardProps {
//   image: Image;
// }

type ImageCardType = Pick<Image, "urls" | "alt_description">;

const ImageCard: React.FC<{ image: ImageCardType }> = ({ image }) => (
  <div className={css.card}>
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={css.image}
    />
  </div>
);

export default ImageCard;
