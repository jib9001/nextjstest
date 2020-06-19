import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


export default function ButtonAppBar() {

  return (
      <AppBar position="fixed" className="full-width dark">
          <Grid container justify="flex-end" alignContent="center" alignItems="center" spacing={1}>
            <Grid item xs={1} zeroMinWidth>
              <Button color="inherit">
                <img className="flexW" src="logo.png" alt="Cincy is IT" />
              </Button>
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

          <style jsx global>{`

                .flexW{
                    width: 100%;
                }

                .dark{
                  background-color: #242424;
                }

            `}</style>

      </AppBar>
  );
}