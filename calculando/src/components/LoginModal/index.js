import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';



/*interface NewUserModalProps {
  isOpen: Boolean;
  onRequestClose: () => void;
}*/


const LoginModal = ({isOpen, onRequestClose}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleLogin(event) {
    event.preventDefault();
    const response = await api.post('/login', {
      email: email,
      password: password
    })
    const {_id} = response.data
    localStorage.setItem('user', _id);
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
          <button type="submit">Login</button>
        </Container>
      </Modal>
    </>
  );
};

export default LoginModal;