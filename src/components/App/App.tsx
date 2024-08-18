import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";
import { fetchArticles } from "../../articles-api";
import { Toaster } from "react-hot-toast";
import { Image } from "../../types/image";

import css from "./App.module.css";

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

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    fetchImages(searchQuery, 1);
  };

  const fetchImages = async (searchQuery: string, pageNum: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchArticles(searchQuery, pageNum);
      setImages(prevImages => [...prevImages, ...data.results]);
    } catch (error) {
      setError("Failed to fetch images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <h1>Сервіс пошуку зображень</h1>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      <Toaster />
    </div>
  );
}
