import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PhotoIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Images
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
