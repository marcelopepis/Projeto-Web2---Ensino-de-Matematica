import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../images/close.svg';
import { func } from 'prop-types';



interface NewUserModalProps {
  isOpen: Boolean;
  onRequestClose: () => void;
}


const NewUserModal = ({isOpen, onRequestClose}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleCreateNewUser(event) {
    event.preventDefault();
  }
  return(
    <>
      <Modal isOpen ={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
      >
        <Container onSubmit={handleCreateNewUser}>
          <h2>Meu Cadastro</h2>
          <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Seu Nome"></input>
          <input value={email} onChange={event => setEmail} type="email" placeholder="E-mail"></input>
          <input value={password} onChange={event => setPassword} type="password" placeholder="Sua Senha"></input>  
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
};

export default NewUserModal;