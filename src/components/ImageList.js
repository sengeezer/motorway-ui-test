import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '0 10px',
    gridAutoRows: '10px',

    '& img.main-image': {
      width: '250px',
      gridRowEnd: 'span 2'
    }
  }
};

const ImageList = ({ classes, images }) => {
  const imagesList = images.map(image => (
    <ImageCard image={image} key={image.id}/>
  ));

  return <div className={classes.root}>{imagesList}</div>;
};

ImageList.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageList);
