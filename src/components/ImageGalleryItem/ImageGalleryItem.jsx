import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        src={webformatURL}
        alt="img"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
