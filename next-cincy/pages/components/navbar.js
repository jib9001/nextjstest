import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #513086 30%, #2055A1 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(138, 138, 141, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
        <AppBar classes={{root: classes.root, }} position="fixed">
            <Grid container justify="flex-end" alignContent="center" alignItems="center" spacing={1}>
              <Grid item xs={1} zeroMinWidth>
              <Link href="/index">
               <Button color="inherit">
                  <img className="flexW" src="logo.png" alt="Cincy is IT" />
                </Button>
                </Link>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={1}>
              <Link href="/live">
                <Button color="inherit">
                  Live
                </Button>
                </Link>
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

            <style jsx global>{`

                  .flexW{
                      width: 100%;
                  }

                  .dark{
                    background-color:#242424;
                  }

              `}</style>

        </AppBar>
  );
}