import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


/*interface NewUserModalProps {
  isOpen: Boolean;
  onRequestClose: () => void;
}*/


const NewUserModal = ({isOpen, onRequestClose}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  async function handleCreateNewUser(event) {
    event.preventDefault();
    const response = await api.post('/users', {
      name: name,
      email: email,
      password: password,
      role: role
    })
    const {_id} = response.data
    console.log(_id);    
  }
  return(
    <>
      <Modal isOpen ={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       ariaHideApp={false}
      >
        <Container onSubmit={handleCreateNewUser}>
          <h2>Meu Cadastro</h2>
          <FormControlLabel control={<Switch/>} onChange={event => setRole(event.target.value)} label="Professor" />
          <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Seu Nome"></input>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="E-mail"></input>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Sua Senha"></input>  
          <button type="submit" onClick={console.log(role)}>Cadastrar</button>
        </Container>

      </Modal>
    </>
  );
};

export default NewUserModal;