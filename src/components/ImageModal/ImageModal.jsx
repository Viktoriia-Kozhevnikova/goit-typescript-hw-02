import { useEffect} from "react";
import Modal from 'react-modal';
import s from '../ImageModal/ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose, isOpen }) => {

  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handlePressEsc);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handlePressEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      className={s.modal}
      overlayClassName={s.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Image Modal'
      onClick={handleOutsideClick}
    >
      {image && (
        <div className={s.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={s.img}
          />
          <div className={s.container}>
            <p><strong>Author:</strong> {image.user.name}</p>
            <p><strong>Likes:</strong> {image.likes}</p>
            <p><strong>Description:</strong> {image.description || 'No description.'}</p>
          </div>
          <button className={s.btn} onClick={onClose}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;

