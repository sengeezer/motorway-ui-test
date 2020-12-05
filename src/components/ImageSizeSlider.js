import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '75%',
  },
  {
    value: 25,
    label: 'default',
  },
  {
    value: 50,
    label: '125%',
  },
  {
    value: 75,
    label: '150%',
  },
  {
    value: 100,
    label: '200%',
  },
];

const valuetext = value => (`${value}% change in image size`);

const ValueLabelComponent = ({ children, open, value }) => (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
);

const StyledSlider = withStyles({
  root: {
    color: '#52af77',
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

const ImageSizeSlider = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography id="image-slider" variant="subtitle1">
        Image Size
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="image-slider"
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
      /> */}
      <Typography gutterBottom>Image Size</Typography>
      <StyledSlider valueLabelDisplay="auto" aria-label="Image size slider" defaultValue={20} />
    </div>
  );
};

export default ImageSizeSlider;
