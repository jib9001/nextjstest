import React from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    button: {
      marginLeft: "48%",
      background: 'white',
      color: '#4f4f4f'
  }
});


export default function ButtonAppBar() {

    const classes = useStyles();
  
    return (
        <div className="parallax-full bg1">
            
            <div className="space80"></div>
            
            <Button className={classes.button}>
                <ArrowDownward/>
                Scroll Down
            </Button>
            
            <style jsx global>{`

                .space80{
                    height: 85vh;
                }

            `}</style>
        </div>
    );
  }