import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar position="fixed" className="full-width">
          <Grid container justify="space-between" alignContent="center" alignItems="center" spacing={1}>
            <Grid item xs={1}>
              <p>Cincy is IT</p>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={1}>
              <Button color="inherit">
                Live
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">
                Work
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit">
                Play
              </Button>
            </Grid>
          </Grid>
      </AppBar>
  );
}