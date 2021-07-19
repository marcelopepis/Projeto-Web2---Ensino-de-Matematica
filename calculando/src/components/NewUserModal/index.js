import React from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../images/close.svg';



interface NewUserModalProps {
  isOpen: Boolean;
  onRequestClose: () => void;
}


const NewUserModal = ({isOpen, onRequestClose}) => {
  return(
    <>
      <Modal isOpen ={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} class="react-modal-close">
          <img src={closeImg} alt="Fechar"/>
        </button>       
        <Container>
          <h2>Meu Cadastro</h2>
          <input type="text" placeholder="Seu Nome"></input>
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Sua Senha"></input>  
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
};

export default NewUserModal;