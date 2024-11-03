import React from "react";
import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.loader}>
        <RotatingLines
          visible={true}
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  );
};

export default Loader;



// import React from "react";
// import { RotatingLines } from "react-loader-spinner";
// import s from "../Loader/Loader.module.css";

// const Loader: React.FC = () => {
//   return (
//     <div className={s.loaderContainer}>
//       <div className={s.loader}>
//         <RotatingLines
//           visible={true}
//           // height="96"
//           // width="96"
//           // color="grey"
//           strokeWidth="5"
//           animationDuration="0.75"
//           ariaLabel="rotating-lines-loading"
//         />
//       </div>
//     </div>
//   );
// };

// export default Loader;


