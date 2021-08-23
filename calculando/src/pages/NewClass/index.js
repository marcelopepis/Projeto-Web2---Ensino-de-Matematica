import {React, useState} from 'react';
import SidebarLogado from '../../components/SidebarLogado';
import NavBarLogado from '../../components/NavbarLogado';
import { api } from '../../services/api';
import { Container, Card } from './styles';


export default function NewClass() {
  const [isOpen, setIsOpen] = useState(false);

  const [id_class, setId_class] = useState('');
  const [class_name, setCLass_name] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  async function handleCreateNewClass(event) {
    event.preventDefault();
    const id_professor = localStorage.getItem('user');
    const response = await api.post('/classes', {
      id_class: id_class,
      class_name: class_name,
      id_professor: id_professor
    });
    
    if(response != null) {
      alert("Turma Cadastrada!")
    }
  }

  return(
    <>
      <SidebarLogado isOpen={isOpen} toggle={toggle}/>
      <NavBarLogado toggle={toggle} />
      <Card>
        <Container onSubmit={handleCreateNewClass}>
            <input value={id_class} onChange={event => setId_class(event.target.value)} required type="text" placeholder="Código da Turma"></input>
            <input value={class_name} onChange={event => setCLass_name(event.target.value)} type="text" required placeholder="Nome da Turma"></input>
            <button type="submit">Cadastrar</button>
        </Container>
      </Card>
    </>
  );
};