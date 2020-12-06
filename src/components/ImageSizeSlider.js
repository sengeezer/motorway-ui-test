import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const valuetext = value => (`${value}% change in image size`);

const StyledSlider = withStyles({
  root: {
    color: '#0bf',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const ImageSizeSlider = ({ updatePictureSize }) => {
  const classes = useStyles();
  const onSliderChange = (event, newValue) => {
    console.log(newValue);
    // updatePictureSize(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="image-slider" gutterBottom>Image Size</Typography>
      <StyledSlider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="image-slider"
        valueLabelDisplay="auto"
        onChange={onSliderChange}
      />
    </div>
  );
};

export default ImageSizeSlider;
