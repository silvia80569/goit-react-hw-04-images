import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '45110089-61221fbae9d31eb168708c8b4';
const BASE_URL = 'https://pixabay.com/api/';
const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(response.data.hits);
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        setError('Failed to fetch images.');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = largeImageURL => {
    setModalImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      {error && <p>{error}</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {modalImage && (
        <Modal largeImageURL={modalImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};
export default App;
