import {React, useState, useEffect} from 'react';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import {Cards, Container} from './styles';
import {api} from '../../services/api';


const UserResults = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState([]);
  const [new_password, setNew_password] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    async function getStudent() {
      const id_user = localStorage.getItem('user');
      const response = await api.post('/student', {
        id_user: id_user
      });
      console.log(response.data);
      setStudent(response.data);
    }
    getStudent();
  },[]);

  async function handleChangePassword(event) {
    event.preventDefault();
    const id_user = localStorage.getItem('user');

    const response = await api.post('/student_password', {
      id_user: id_user,
      new_password: new_password
    });
    if(response === 200) {
      alert("Password Alterado com Sucesso!");
    }else{
      alert("Erro ao trocar password!");
    };
  };

  return(
    <Cards>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
      <Container onSubmit={handleChangePassword}>
        {student.map(student => (
          <>
            <span><strong>Nome:</strong> {student.name}</span>
            <span><strong>E-mail:</strong> {student.email}</span>
            <span><strong>Tipo:</strong> {student.role}</span>
            <span><strong>Respostas Corretas:</strong> {student.right_answers}</span>
            <span><strong>Respostas Erradas:</strong> {student.wrong_answers}</span>
            <input value={new_password} onChange={event => setNew_password(event.target.value)} type="password" required placeholder="Novo Password"></input>
            <button type="submit">Trocar Password</button>
          </>
        ))}
      </Container>      
    </Cards>
  );
}

export default UserResults