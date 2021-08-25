import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    
  },
  number: {
    fontSize: 30,
    position: 'relative',
    margin: '39%',
  }
});

export default function Equals() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.number} variant="h5" component="h2">
          =
        </Typography>
      </CardContent>
    </Card>
  );
}