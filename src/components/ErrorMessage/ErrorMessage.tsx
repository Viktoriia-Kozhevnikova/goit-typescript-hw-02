import React from "react";
import s from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "../../types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={s.error}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;




// import React from "react";
// import s from "../ErrorMessage/ErrorMessage.module.css";

// interface ErrorMessageProps {
//   message: string;
// }

// const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
//   return <p className={s.error}>{message}</p>;
// };

// export default ErrorMessage;




