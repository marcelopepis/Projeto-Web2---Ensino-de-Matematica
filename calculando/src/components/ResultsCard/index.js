import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    width: '250px',
    height: '250px',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  
  number: {
    fontSize: 30,
    position: 'relative',
    margin: '39%',
  }
});

export default function ResultsCard() {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Resultado Correto/Incorreto!
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          <br />
          Voce colocou *resultado*
          <br />
          <br />
          Quando *Numero 1* x *Numero 2* é igual a *Numero 3*!
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};