import s from '../ErrorMessage/ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
  return <p className={s.error}>{message}</p>;
};

export default ErrorMessage;

