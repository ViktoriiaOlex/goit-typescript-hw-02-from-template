import ImageCard from "../ImageCard/ImageCard";
import { Image, Props as ImageCardProps } from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

interface Props {
  pics: Image[];
  openModal: ImageCardProps["openModal"];
}
const ImageGallery: React.FC<Props> = ({ pics, openModal }) => {
  if (!Array.isArray(pics) || pics.length === 0) {
    return null;
  }

  return (
    <ul className={css.galleryList}>
      {pics.map((pic, index) => (
        <li className={css.galleryItem} key={`${pic.id}-${index}`}>
          <div>
            <ImageCard
              openModal={openModal}
              pic={pic}
              description={pic.description}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
