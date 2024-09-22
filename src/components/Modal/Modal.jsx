import { useEffect } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleOverlayClick}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
