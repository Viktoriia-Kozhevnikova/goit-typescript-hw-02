import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;




// import React from "react";
// import ImageCard from "../ImageCard/ImageCard";
// import s from "../ImageGallery/ImageGallery.module.css";

// interface ImageGalleryProps {
//   images: Array<{
//     id: string;
//     urls: {
//       small: string;
//     };
//     alt_description: string;
//   }>;
//   onImageClick: (image: any) => void;
// }

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
//   return (
//     <ul className={s.gallery}>
//       {images.map((image) => (
//         <li key={image.id} className={s.item}>
//           <ImageCard image={image} onClick={() => onImageClick(image)} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;


