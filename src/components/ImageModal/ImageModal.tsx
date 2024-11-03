import React, { useEffect } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { ImageModalProps } from "../../types";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, isOpen }) => {
  useEffect(() => {
    const handlePressEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handlePressEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handlePressEsc);
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <Modal
      className={s.modal}
      overlayClassName={s.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div className={s.content}>
        <img src={image.urls.regular} alt={image.alt_description} className={s.img} />
        <div className={s.container}>
          <p><strong>Author:</strong> {image.user.name}</p>
          <p><strong>Likes:</strong> {image.likes}</p>
          <p><strong>Description:</strong> {image.description || "No description."}</p>
        </div>
        <button className={s.btn} onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;




// import React, { useEffect } from "react";
// import Modal from "react-modal";
// import s from "../ImageModal/ImageModal.module.css";

// Modal.setAppElement("#root");

// interface ImageModalProps {
//   image: {
//     urls: {
//       regular: string;
//     };
//     alt_description: string;
//     user: {
//       name: string;
//     };
//     likes: number;
//     description?: string;
//   } | null;
//   onClose: () => void;
//   isOpen: boolean;
// }

// const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, isOpen }) => {
//   useEffect(() => {
//     const handlePressEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handlePressEsc);
    
    
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     }

//     return () => {
//       window.removeEventListener("keydown", handlePressEsc);
//       document.body.style.overflow = "auto"; 
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <Modal
//       className={s.modal}
//       overlayClassName={s.overlay}
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Image Modal"
//     >
//       {image && (
//         <div className={s.content}> 
//           <img src={image.urls.regular} alt={image.alt_description} className={s.img} />
//           <div className={s.container}>
//             <p><strong>Author:</strong> {image.user.name}</p>
//             <p><strong>Likes:</strong> {image.likes}</p>
//             <p><strong>Description:</strong> {image.description || "No description."}</p>
//           </div>
//           <button className={s.btn} onClick={onClose}>Close</button>
//         </div>
//       )}
//     </Modal>
//   );
// };

// export default ImageModal;




