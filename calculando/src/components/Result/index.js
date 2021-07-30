import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    
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

const Result = ({leftNumber, rightNumber }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [userResult, setUserResult] = useState('');
  const [result, setResult] = useState('');
  
  useEffect(() => {
    setNumber1(leftNumber);
    setNumber2(rightNumber);
    setResult(number1 * number2);
  },[number1, number2, leftNumber, rightNumber]);

  
  console.log(leftNumber);
  console.log(rightNumber);
  console.log("informado pelo user " + userResult);
  console.log("resultado calculado " + result);

  function CheckResult() {
    if(result == userResult){
      window.alert("Resultado Correto!");
    }else{
      window.alert("Resultado Incorreto");
    }
  }  

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.number} variant="h5" component="h2">
          <input placeholder="Resultado" value={userResult} onChange={event => setUserResult(event.target.value)}></input>
          <button type="submit" onClick = {CheckResult}>Go</button>

        </Typography>
      </CardContent>
    </Card>
  );
};
export default Result;