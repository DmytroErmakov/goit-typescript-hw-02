import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";


interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
  description?: string;
  user: {
    name: string;
  };
  likes: number;
}


interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modal}
    overlayClassName={css.overlay}
    ariaHideApp={false}
    shouldCloseOnOverlayClick={true}
  >
    {image && (
      <div className={css.content}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.description || image.alt_description}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    )}
  </Modal>
);

export default ImageModal;
