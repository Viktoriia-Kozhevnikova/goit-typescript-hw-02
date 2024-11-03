import React from "react";
import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../../types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;




// import React from "react";
// import s from "../LoadMoreBtn/LoadMoreBtn.module.css";

// interface LoadMoreBtnProps {
//   onClick: () => void;
// }

// const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
//   return (
//     <button className={s.btn} onClick={onClick}>
//       Load More
//     </button>
//   );
// };

// export default LoadMoreBtn;


