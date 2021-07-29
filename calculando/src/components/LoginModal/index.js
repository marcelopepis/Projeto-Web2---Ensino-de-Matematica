import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';
import { useHistory } from 'react-router';



/*interface NewUserModalProps {
  isOpen: Boolean;
  onRequestClose: () => void;
}*/


const LoginModal = ({isOpen, onRequestClose}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  async function handleLogin(event) {
    event.preventDefault();
    const response = await api.post('/login', {
      email: email,
      password: password
    })
    const {_id} = response.data
    
    if(_id != null){
      localStorage.setItem('user', _id);
      history.push("/userpage");
    }else{
      window.alert("usuário não existente ou senha incorreta!");
    }
    
  }
  return(
    <>
      <Modal isOpen ={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       ariaHideApp={false}
      >
        <Container onSubmit={handleLogin}>
          <h2>Entrar</h2>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="E-mail"></input>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Sua Senha"></input>  
          <button to="/userpage" type="submit">Login</button>
        </Container>
      </Modal>
    </>
  );
};

export default LoginModal;