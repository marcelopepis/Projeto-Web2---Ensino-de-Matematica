import {React, useState, useEffect} from 'react';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import {Cards, Container} from './styles';
import {api} from '../../services/api';


const UserResults = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState([]);

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

  return(
    <Cards>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
      <Container>
        {student.map(student => (
          <>
            <span><strong>Nome:</strong> {student.name}</span>
            <span><strong>E-mail:</strong> {student.email}</span>
            <span><strong>Tipo:</strong> {student.role}</span>
            <span><strong>Respostas Corretas:</strong> {student.right_answers}</span>
            <span><strong>Respostas Erradas:</strong> {student.wrong_answers}</span>
            <button type="submit">Cadastrar</button>
          </>
        ))}
      </Container>      
    </Cards>
  );
}

export default UserResults