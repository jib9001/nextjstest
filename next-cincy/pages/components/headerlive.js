import React from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    button: {
      marginLeft: "45%",
      background: 'white',
      color: '#4f4f4f',
  },
});


export default function ButtonAppBar() {

    const classes = useStyles();
  
    return (
        <div className="parallax-half bg3">
            
            <div className="space80"></div>
            
        </div>
    );
  }