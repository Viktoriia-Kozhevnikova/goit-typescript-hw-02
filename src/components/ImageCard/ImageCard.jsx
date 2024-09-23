import s from '../ImageCard/ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.container} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
