import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imagesList = images.map(image => (
    <ImageCard image={image} key={image.id}/>
  ));

  return <div className="imageList">{imagesList}</div>;
};

export default ImageList;
