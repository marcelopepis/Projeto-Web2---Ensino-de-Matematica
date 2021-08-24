import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
  },

  input:{
    display:'flex', 
    marginTop:'50px',
    justifyContent:'center',
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

  function CheckResult() {
    if(parseInt(result) === parseInt(userResult)){
      window.alert("Resultado Correto!");
    }else{
      window.alert("Resultado Incorreto");
    }
  }  

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.input} >
          <input id={result} placeholder="Resultado" value={userResult} onChange={event => setUserResult(event.target.value)} size="6"></input>
          <button type="submit" onClick = {CheckResult}>Go</button>
      </CardContent>
    </Card>
  );
};
export default Result;