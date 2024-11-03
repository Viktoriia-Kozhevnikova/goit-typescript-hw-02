import React from "react";
import s from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.container} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={s.img} />
    </div>
  );
};

export default ImageCard;




// import React from "react";
// import s from "../ImageCard/ImageCard.module.css";

// interface ImageCardProps {
//   image: {
//     urls: {
//       small: string;
//     };
//     alt_description: string;
//   };
//   onClick: () => void;
// }

// const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
//   return (
//     <div className={s.container} onClick={onClick}>
//       <img src={image.urls.small} alt={image.alt_description} className={s.img} />
//     </div>
//   );
// };

// export default ImageCard;



