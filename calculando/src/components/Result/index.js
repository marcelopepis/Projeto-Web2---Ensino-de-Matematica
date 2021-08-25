import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Container, input, button } from './styles'
import {api} from '../../services/api';
const useStyles = makeStyles({
  root: {
    width: '170px',
    height: 'auto',
    
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

  //faz o update do número de acertos e erros do usuário no banco de dados.
  async function UpdateResult(type) {
    const id_user = localStorage.getItem('user');
    if(type === "right"){      
      await api.post('/updateright', {
        id_user: id_user
      });
    }
    if(type === "wrong"){
      await api.post('/updatewrong', {
        id_user: id_user
      });
    };
  };
  
  async function CheckResult() {
    if(parseInt(result) === parseInt(userResult)){
      window.alert("Resultado Correto!");
      await UpdateResult("right");
    }else{
      window.alert("Resultado Incorreto");
      await UpdateResult("wrong")
    }
  }  

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.input} >
        <Container onSubmit={CheckResult}>
          <input id={result} placeholder="Resultado" value={userResult} onChange={event => setUserResult(event.target.value)} size="6"></input>
          <button type="submit">Go</button>
        </Container>
      </CardContent>
    </Card>
  );
};
export default Result;