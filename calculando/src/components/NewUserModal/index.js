import {React, useState} from 'react'
import Modal from 'react-modal';
import { Container } from './styles';
import {api} from '../../services/api';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const NewUserModal = ({isOpen, onRequestClose}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [id_class, setId_class] = useState('');
  const [right_answers, setRight_answers] = useState('0');
  const [wrong_answers, setWrong_answers] = useState('0')


  async function handleCreateNewUser(event) {
    event.preventDefault();
    const response = await api.post('/users', {
      name: name,
      email: email,
      id_class: id_class,
      password: password,
      wrong_answers,
      right_answers,
      role: role
    })
    const {_id} = response.data
    console.log(_id);    
  }

  function defRole(){
    const cb = document.getElementById("chk").checked;
    if(cb === true){
      setRole("Professor");
      setId_class("none")
    }else{
      setRole("Aluno");
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
        <Container onSubmit={handleCreateNewUser}>
          <h2>Meu Cadastro</h2>
          <FormControlLabel control={<Checkbox id="chk" onChange={defRole}/>} label="Professor" />
          <input value={name} onChange={event => setName(event.target.value)} required type="text" placeholder="Seu Nome"></input>
          <input value={id_class} onChange={event => setId_class(event.target.value)} type="text" required placeholder="Código da sua Turma"></input>
          <input value={email} onChange={event => setEmail(event.target.value)} required type="email" placeholder="E-mail"></input>
          <input value={password} onChange={event => setPassword(event.target.value)} required type="password" placeholder="Sua Senha"></input>  
          <button type="submit">Cadastrar</button>
        </Container>

      </Modal>
    </>
  );
};

export default NewUserModal;